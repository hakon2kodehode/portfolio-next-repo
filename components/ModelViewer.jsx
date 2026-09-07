/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */

import {
  Suspense,
  useRef,
  useLayoutEffect,
  useEffect,
  useMemo
} from 'react';

import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
  invalidate
} from '@react-three/fiber';

import {
  OrbitControls,
  useGLTF,
  useFBX,
  useProgress,
  Html,
  Environment,
  ContactShadows
} from '@react-three/drei';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';


// ------------------------------------------------------------
// CONSTANTS
// ------------------------------------------------------------

const isTouch =
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

const deg2rad = d => (d * Math.PI) / 180;

const DECIDE = 8;

const ROTATE_SPEED = 0.005;
const INERTIA = 0.925;

const PARALLAX_MAG = 0.05;
const PARALLAX_EASE = 0.12;

const HOVER_MAG = deg2rad(6 * 2);
const HOVER_EASE = 0.15;


// ------------------------------------------------------------
// LOADER
// ------------------------------------------------------------

const Loader = ({ placeholderSrc }) => {
  const { progress, active } = useProgress();

  if (!active && placeholderSrc) return null;

  return (
    <Html center>
      {placeholderSrc ? (
        <img
          src={placeholderSrc}
          width={128}
          height={128}
          style={{
            filter: 'blur(8px)',
            borderRadius: 8
          }}
        />
      ) : (
        `${Math.round(progress)} %`
      )}
    </Html>
  );
};


// ------------------------------------------------------------
// DESKTOP ORBIT CONTROLS
// ------------------------------------------------------------

const DesktopControls = ({
  pivot,
  min,
  max,
  zoomEnabled
}) => {
  const ref = useRef(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.target.copy(pivot);
      ref.current.update();
    }
  });

  return (
    <OrbitControls
      ref={ref}
      makeDefault
      enablePan={false}
      enableRotate={false}
      enableZoom={zoomEnabled}
      minDistance={min}
      maxDistance={max}
    />
  );
};


// ------------------------------------------------------------
// MODEL INNER
// ------------------------------------------------------------

const ModelInner = ({
  url,
  xOff,
  yOff,
  pivot,
  initYaw,
  initPitch,
  minZoom,
  maxZoom,
  defaultZoom,
  enableMouseParallax,
  enableManualRotation,
  enableHoverRotation,
  enableManualZoom,
  autoFrame,
  fadeIn,
  autoRotate,
  autoRotateSpeed,
  onLoaded
}) => {
  const outer = useRef(null);
  const inner = useRef(null);

  const { camera, gl } = useThree();

  const vel = useRef({
    x: 0,
    y: 0
  });

  const tPar = useRef({
    x: 0,
    y: 0
  });

  const cPar = useRef({
    x: 0,
    y: 0
  });

  const tHov = useRef({
    x: 0,
    y: 0
  });

  const cHov = useRef({
    x: 0,
    y: 0
  });

  // Stores the model's actual world-space pivot.
  const pivotW = useRef(new THREE.Vector3());


  // ----------------------------------------------------------
  // DETERMINE FILE TYPE
  // ----------------------------------------------------------

  const ext = useMemo(
    () => url.split('.').pop().toLowerCase(),
    [url]
  );


  // ----------------------------------------------------------
  // LOAD MODEL
  // ----------------------------------------------------------

  const content = useMemo(() => {
    if (ext === 'glb' || ext === 'gltf') {
      return useGLTF(url).scene.clone();
    }

    if (ext === 'fbx') {
      return useFBX(url).clone();
    }

    if (ext === 'obj') {
      return useLoader(OBJLoader, url).clone();
    }

    console.error('Unsupported format:', ext);

    return null;
  }, [url, ext]);


  // ----------------------------------------------------------
  // MODEL INITIALIZATION
  // ----------------------------------------------------------

  useLayoutEffect(() => {
    if (!content || !inner.current || !outer.current) {
      return;
    }

    const g = inner.current;
    const o = outer.current;

    // --------------------------------------------------------
    // STEP 1
    // Make sure the loaded model's matrices are current.
    // --------------------------------------------------------

    g.updateMatrixWorld(true);


    // --------------------------------------------------------
    // STEP 2
    // Calculate the model's bounding box.
    // --------------------------------------------------------

    const box = new THREE.Box3().setFromObject(g);

    const center = box.getCenter(
      new THREE.Vector3()
    );

    const size = box.getSize(
      new THREE.Vector3()
    );


    // --------------------------------------------------------
    // STEP 3
    // Normalize the model.
    //
    // The largest dimension becomes exactly 1 world unit.
    // This makes models with different source scales behave
    // consistently.
    // --------------------------------------------------------

    const maxDimension = Math.max(
      size.x,
      size.y,
      size.z
    );

    if (maxDimension > 0) {
      const scale = 1 / maxDimension;

      g.scale.setScalar(scale);

      // Center the model after scaling.
      g.position.copy(center).multiplyScalar(-scale);
    }


    // --------------------------------------------------------
    // STEP 4
    // Update matrices again because we changed position/scale.
    // --------------------------------------------------------

    g.updateMatrixWorld(true);
    o.updateMatrixWorld(true);


    // --------------------------------------------------------
    // STEP 5
    // Calculate the final world-space pivot.
    //
    // This happens AFTER normalization.
    // --------------------------------------------------------

    g.getWorldPosition(pivotW.current);

    pivot.copy(pivotW.current);


    // --------------------------------------------------------
    // STEP 6
    // Apply initial rotation.
    // --------------------------------------------------------

    o.rotation.set(
      initPitch,
      initYaw,
      0
    );

    o.updateMatrixWorld(true);


    // --------------------------------------------------------
    // STEP 7
    // Configure camera.
    //
    // autoFrame uses the normalized model dimensions.
    // Otherwise we use the supplied defaultZoom.
    // --------------------------------------------------------

    if (camera.isPerspectiveCamera) {
      const persp = camera;

      if (autoFrame) {
        // The model is normalized to approximately 1 unit.
        const normalizedRadius = 0.5;

        const fovRadians =
          (persp.fov * Math.PI) / 180;

        const distance =
          (normalizedRadius * 1.2) /
          Math.sin(fovRadians / 2);

        persp.position.set(
          pivotW.current.x,
          pivotW.current.y,
          pivotW.current.z + distance
        );

        persp.near = Math.max(
          distance / 10,
          0.001
        );

        persp.far = Math.max(
          distance * 10,
          100
        );
      } else {
        persp.position.set(
          pivotW.current.x,
          pivotW.current.y,
          pivotW.current.z + defaultZoom
        );

        persp.near = 0.01;
        persp.far = 100;
      }

      // Explicitly point the camera at the model.
      persp.lookAt(pivotW.current);

      // Recalculate projection matrix after changing
      // camera position / clipping planes.
      persp.updateProjectionMatrix();
    }


    // --------------------------------------------------------
    // STEP 8
    // Configure meshes/materials.
    // --------------------------------------------------------

    g.traverse(o => {
      if (!o.isMesh) return;

      o.castShadow = true;
      o.receiveShadow = true;

      if (fadeIn) {
        o.material.transparent = true;
        o.material.opacity = 0;
      }
    });


    // --------------------------------------------------------
    // STEP 9
    // Force the renderer to actually render the initialized
    // state.
    // --------------------------------------------------------

    invalidate();


    // --------------------------------------------------------
    // STEP 10
    // Fade-in if enabled.
    // --------------------------------------------------------

    if (fadeIn) {
      let t = 0;

      const id = setInterval(() => {
        t += 0.05;

        const v = Math.min(t, 1);

        g.traverse(o => {
          if (o.isMesh) {
            o.material.opacity = v;
          }
        });

        invalidate();

        if (v === 1) {
          clearInterval(id);

          onLoaded?.();

          // One final guaranteed render.
          invalidate();
        }
      }, 16);

      return () => clearInterval(id);
    }


    // No fade-in.
    onLoaded?.();

    // Final initialization render.
    invalidate();

  }, [
    content,
    camera,
    autoFrame,
    defaultZoom,
    initYaw,
    initPitch,
    fadeIn,
    pivot,
    onLoaded
  ]);


  // ----------------------------------------------------------
  // DESKTOP MANUAL ROTATION
  // ----------------------------------------------------------

  useEffect(() => {
    if (!enableManualRotation || isTouch) {
      return;
    }

    const el = gl.domElement;

    let drag = false;

    let lx = 0;
    let ly = 0;

    const down = e => {
      if (
        e.pointerType !== 'mouse' &&
        e.pointerType !== 'pen'
      ) {
        return;
      }

      drag = true;

      lx = e.clientX;
      ly = e.clientY;

      window.addEventListener(
        'pointerup',
        up
      );
    };

    const move = e => {
      if (!drag || !outer.current) {
        return;
      }

      const dx = e.clientX - lx;
      const dy = e.clientY - ly;

      lx = e.clientX;
      ly = e.clientY;

      outer.current.rotation.y +=
        dx * ROTATE_SPEED;

      outer.current.rotation.x +=
        dy * ROTATE_SPEED;

      vel.current = {
        x: dx * ROTATE_SPEED,
        y: dy * ROTATE_SPEED
      };

      invalidate();
    };

    const up = () => {
      drag = false;
    };

    el.addEventListener(
      'pointerdown',
      down
    );

    el.addEventListener(
      'pointermove',
      move
    );

    return () => {
      el.removeEventListener(
        'pointerdown',
        down
      );

      el.removeEventListener(
        'pointermove',
        move
      );

      window.removeEventListener(
        'pointerup',
        up
      );
    };
  }, [
    gl,
    enableManualRotation
  ]);


  // ----------------------------------------------------------
  // TOUCH CONTROLS
  // ----------------------------------------------------------

  useEffect(() => {
    if (!isTouch) {
      return;
    }

    const el = gl.domElement;

    const pts = new Map();

    let mode = 'idle';

    let sx = 0;
    let sy = 0;

    let lx = 0;
    let ly = 0;

    let startDist = 0;
    let startZ = 0;


    const down = e => {
      if (e.pointerType !== 'touch') {
        return;
      }

      pts.set(e.pointerId, {
        x: e.clientX,
        y: e.clientY
      });

      if (pts.size === 1) {
        mode = 'decide';

        sx = lx = e.clientX;
        sy = ly = e.clientY;
      } else if (
        pts.size === 2 &&
        enableManualZoom
      ) {
        mode = 'pinch';

        const [p1, p2] = [
          ...pts.values()
        ];

        startDist = Math.hypot(
          p1.x - p2.x,
          p1.y - p2.y
        );

        startZ = camera.position.z;

        e.preventDefault();
      }

      invalidate();
    };


    const move = e => {
      const p = pts.get(
        e.pointerId
      );

      if (!p) {
        return;
      }

      p.x = e.clientX;
      p.y = e.clientY;


      if (mode === 'decide') {
        const dx = e.clientX - sx;
        const dy = e.clientY - sy;

        if (
          Math.abs(dx) > DECIDE ||
          Math.abs(dy) > DECIDE
        ) {
          if (
            enableManualRotation &&
            Math.abs(dx) > Math.abs(dy)
          ) {
            mode = 'rotate';

            el.setPointerCapture(
              e.pointerId
            );
          } else {
            mode = 'idle';

            pts.clear();
          }
        }
      }


      if (
        mode === 'rotate' &&
        outer.current
      ) {
        e.preventDefault();

        const dx = e.clientX - lx;
        const dy = e.clientY - ly;

        lx = e.clientX;
        ly = e.clientY;

        outer.current.rotation.y +=
          dx * ROTATE_SPEED;

        outer.current.rotation.x +=
          dy * ROTATE_SPEED;

        vel.current = {
          x: dx * ROTATE_SPEED,
          y: dy * ROTATE_SPEED
        };

        invalidate();

      } else if (
        mode === 'pinch' &&
        pts.size === 2 &&
        enableManualZoom
      ) {
        e.preventDefault();

        const [p1, p2] = [
          ...pts.values()
        ];

        const d = Math.hypot(
          p1.x - p2.x,
          p1.y - p2.y
        );

        if (d > 0) {
          const ratio =
            startDist / d;

          camera.position.z =
            THREE.MathUtils.clamp(
              startZ * ratio,
              minZoom,
              maxZoom
            );

          invalidate();
        }
      }
    };


    const up = e => {
      pts.delete(e.pointerId);

      if (
        mode === 'rotate' &&
        pts.size === 0
      ) {
        mode = 'idle';
      }

      if (
        mode === 'pinch' &&
        pts.size < 2
      ) {
        mode = 'idle';
      }
    };


    el.addEventListener(
      'pointerdown',
      down,
      { passive: true }
    );

    window.addEventListener(
      'pointermove',
      move,
      { passive: false }
    );

    window.addEventListener(
      'pointerup',
      up,
      { passive: true }
    );

    window.addEventListener(
      'pointercancel',
      up,
      { passive: true }
    );


    return () => {
      el.removeEventListener(
        'pointerdown',
        down
      );

      window.removeEventListener(
        'pointermove',
        move
      );

      window.removeEventListener(
        'pointerup',
        up
      );

      window.removeEventListener(
        'pointercancel',
        up
      );
    };

  }, [
    gl,
    camera,
    enableManualRotation,
    enableManualZoom,
    minZoom,
    maxZoom
  ]);


  // ----------------------------------------------------------
  // MOUSE PARALLAX / HOVER
  // ----------------------------------------------------------

  useEffect(() => {
    if (isTouch) {
      return;
    }

    const mm = e => {
      if (e.pointerType !== 'mouse') {
        return;
      }

      const nx =
        (e.clientX / window.innerWidth) *
          2 -
        1;

      const ny =
        (e.clientY / window.innerHeight) *
          2 -
        1;


      if (enableMouseParallax) {
        tPar.current = {
          x: -nx * PARALLAX_MAG,
          y: -ny * PARALLAX_MAG
        };
      }


      if (enableHoverRotation) {
        tHov.current = {
          x: ny * HOVER_MAG,
          y: nx * HOVER_MAG
        };
      }

      invalidate();
    };


    window.addEventListener(
      'pointermove',
      mm
    );

    return () => {
      window.removeEventListener(
        'pointermove',
        mm
      );
    };

  }, [
    enableMouseParallax,
    enableHoverRotation
  ]);


  // ----------------------------------------------------------
  // FRAME LOOP
  // ----------------------------------------------------------

  useFrame((_, dt) => {
    if (!outer.current) {
      return;
    }

    let need = false;


    // --------------------------------------------------------
    // PARALLAX
    // --------------------------------------------------------

    cPar.current.x +=
      (tPar.current.x - cPar.current.x) *
      PARALLAX_EASE;

    cPar.current.y +=
      (tPar.current.y - cPar.current.y) *
      PARALLAX_EASE;


    // --------------------------------------------------------
    // HOVER ROTATION
    // --------------------------------------------------------

    const phx =
      cHov.current.x;

    const phy =
      cHov.current.y;


    cHov.current.x +=
      (tHov.current.x - cHov.current.x) *
      HOVER_EASE;

    cHov.current.y +=
      (tHov.current.y - cHov.current.y) *
      HOVER_EASE;


    // --------------------------------------------------------
    // MODEL POSITION
    //
    // Convert the pivot to NDC, apply offsets, then convert
    // back to world space.
    // --------------------------------------------------------

    const ndc =
      pivotW.current
        .clone()
        .project(camera);


    ndc.x +=
      xOff +
      cPar.current.x;

    ndc.y +=
      yOff +
      cPar.current.y;


    outer.current.position.copy(
      ndc.unproject(camera)
    );


    // --------------------------------------------------------
    // HOVER ROTATION
    // --------------------------------------------------------

    outer.current.rotation.x +=
      cHov.current.x - phx;

    outer.current.rotation.y +=
      cHov.current.y - phy;


    // --------------------------------------------------------
    // AUTO ROTATION
    // --------------------------------------------------------

    if (autoRotate) {
      outer.current.rotation.y +=
        autoRotateSpeed * dt;

      need = true;
    }


    // --------------------------------------------------------
    // INERTIA
    // --------------------------------------------------------

    outer.current.rotation.y +=
      vel.current.x;

    outer.current.rotation.x +=
      vel.current.y;


    vel.current.x *= INERTIA;
    vel.current.y *= INERTIA;


    if (
      Math.abs(vel.current.x) >
        1e-4 ||
      Math.abs(vel.current.y) >
        1e-4
    ) {
      need = true;
    }


    // --------------------------------------------------------
    // PARALLAX / HOVER ANIMATION
    // --------------------------------------------------------

    if (
      Math.abs(
        cPar.current.x -
          tPar.current.x
      ) > 1e-4 ||

      Math.abs(
        cPar.current.y -
          tPar.current.y
      ) > 1e-4 ||

      Math.abs(
        cHov.current.x -
          tHov.current.x
      ) > 1e-4 ||

      Math.abs(
        cHov.current.y -
          tHov.current.y
      ) > 1e-4
    ) {
      need = true;
    }


    // --------------------------------------------------------
    // DEMAND RENDERING
    // --------------------------------------------------------

    if (need) {
      invalidate();
    }
  });


  if (!content) {
    return null;
  }


  return (
    <group ref={outer}>
      <group ref={inner}>
        <primitive object={content} />
      </group>
    </group>
  );
};


// ------------------------------------------------------------
// MODEL VIEWER
// ------------------------------------------------------------

const ModelViewer = ({
  url,

  width = 400,
  height = 400,

  modelXOffset = 0,
  modelYOffset = 0,

  defaultRotationX = -50,
  defaultRotationY = 20,

  defaultZoom = 1.5,

  minZoomDistance = 0.5,
  maxZoomDistance = 10,

  enableMouseParallax = true,
  enableManualRotation = false,
  enableHoverRotation = true,
  enableManualZoom = false,

  ambientIntensity = 0.3,
  keyLightIntensity = 1,
  fillLightIntensity = 0.5,
  rimLightIntensity = 0.8,

  environmentPreset = 'forest',

  autoFrame = false,

  placeholderSrc,

  showScreenshotButton = true,

  fadeIn = false,

  autoRotate = false,
  autoRotateSpeed = 0.35,

  onModelLoaded
}) => {

  // ----------------------------------------------------------
  // PRELOAD GLTF
  // ----------------------------------------------------------

  useEffect(() => {
    if (
      url.endsWith('.glb') ||
      url.endsWith('.gltf')
    ) {
      useGLTF.preload(url);
    }
  }, [url]);


  // ----------------------------------------------------------
  // SHARED MODEL PIVOT
  // ----------------------------------------------------------

  const pivot =
    useRef(
      new THREE.Vector3()
    ).current;


  // ----------------------------------------------------------
  // SCREENSHOT REFS
  // ----------------------------------------------------------

  const contactRef =
    useRef(null);

  const rendererRef =
    useRef(null);

  const sceneRef =
    useRef(null);

  const cameraRef =
    useRef(null);


  // ----------------------------------------------------------
  // ROTATION
  //
  // Keep the meaning of the props consistent:
  //
  // defaultRotationX → X rotation
  // defaultRotationY → Y rotation
  // ----------------------------------------------------------

  const initPitch =
    deg2rad(defaultRotationX);

  const initYaw =
    deg2rad(defaultRotationY);


  // ----------------------------------------------------------
  // CLAMP DEFAULT ZOOM
  // ----------------------------------------------------------

  const camZ =
    Math.min(
      Math.max(
        defaultZoom,
        minZoomDistance
      ),
      maxZoomDistance
    );


  // ----------------------------------------------------------
  // SCREENSHOT
  // ----------------------------------------------------------

  const capture = () => {
    const g = rendererRef.current;
    const s = sceneRef.current;
    const c = cameraRef.current;

    if (!g || !s || !c) {
      return;
    }


    g.shadowMap.enabled = false;


    const tmp = [];


    s.traverse(o => {
      if (
        o.isLight &&
        'castShadow' in o
      ) {
        tmp.push({
          l: o,
          cast: o.castShadow
        });

        o.castShadow = false;
      }
    });


    if (contactRef.current) {
      contactRef.current.visible = false;
    }


    // Make sure the screenshot uses the latest camera state.
    c.updateMatrixWorld(true);

    g.render(s, c);


    const urlPNG =
      g.domElement.toDataURL(
        'image/png'
      );


    const a =
      document.createElement('a');

    a.download =
      'model.png';

    a.href = urlPNG;

    a.click();


    g.shadowMap.enabled = true;


    tmp.forEach(
      ({ l, cast }) => {
        l.castShadow = cast;
      }
    );


    if (contactRef.current) {
      contactRef.current.visible = true;
    }


    invalidate();
  };


  // ----------------------------------------------------------
  // RENDER
  // ----------------------------------------------------------

  return (
    <div
      style={{
        width,
        height,

        touchAction:
          'pan-y pinch-zoom',

        position: 'relative'
      }}
    >

      {showScreenshotButton && (
        <button
          onClick={capture}
          style={{
            position: 'absolute',

            border:
              '1px solid #fff',

            right: 16,
            top: 16,

            zIndex: 10,

            cursor: 'pointer',

            padding:
              '8px 16px',

            borderRadius: 10
          }}
        >
          Take Screenshot
        </button>
      )}


      <Canvas
        shadows

        // We keep demand rendering because your
        // interaction system already uses invalidate().
        frameloop="demand"

        gl={{
          preserveDrawingBuffer: true
        }}

        onCreated={({
          gl,
          scene,
          camera
        }) => {

          rendererRef.current =
            gl;

          sceneRef.current =
            scene;

          cameraRef.current =
            camera;


          // --------------------------------------------------
          // Renderer setup
          // --------------------------------------------------

          gl.toneMapping =
            THREE.ACESFilmicToneMapping;

          gl.outputColorSpace =
            THREE.SRGBColorSpace;


          // Prevent excessively large pixel ratios.
          gl.setPixelRatio(
            Math.min(
              window.devicePixelRatio,
              2
            )
          );


          // --------------------------------------------------
          // Explicit camera initialization
          // --------------------------------------------------

          camera.updateProjectionMatrix();

          camera.updateMatrixWorld(
            true
          );


          // --------------------------------------------------
          // Force first render.
          // --------------------------------------------------

          invalidate();
        }}

        camera={{
          fov: 50,

          position: [
            0,
            0,
            camZ
          ],

          near: 0.01,
          far: 100
        }}

        style={{
          touchAction:
            'pan-y pinch-zoom'
        }}
      >

        {/* -------------------------------------------------- */}
        {/* ENVIRONMENT                                        */}
        {/* -------------------------------------------------- */}

        {environmentPreset !== 'none' && (
          <Environment
            preset={environmentPreset}
            background={false}
          />
        )}


        {/* -------------------------------------------------- */}
        {/* LIGHTING                                           */}
        {/* -------------------------------------------------- */}

        <ambientLight
          intensity={
            ambientIntensity
          }
        />

        <directionalLight
          position={[
            5,
            5,
            5
          ]}
          intensity={
            keyLightIntensity
          }
          castShadow
        />

        <directionalLight
          position={[
            -5,
            2,
            5
          ]}
          intensity={
            fillLightIntensity
          }
        />

        <directionalLight
          position={[
            0,
            4,
            -5
          ]}
          intensity={
            rimLightIntensity
          }
        />


        {/* -------------------------------------------------- */}
        {/* CONTACT SHADOWS                                    */}
        {/* -------------------------------------------------- */}

        <ContactShadows
          ref={contactRef}
          position={[
            0,
            -0.5,
            0
          ]}
          opacity={0}
          scale={10}
          blur={2}
        />


        {/* -------------------------------------------------- */}
        {/* MODEL                                               */}
        {/* -------------------------------------------------- */}

        <Suspense
          fallback={
            <Loader
              placeholderSrc={
                placeholderSrc
              }
            />
          }
        >

          <ModelInner
            url={url}

            xOff={
              modelXOffset
            }

            yOff={
              modelYOffset
            }

            pivot={pivot}

            initYaw={
              initYaw
            }

            initPitch={
              initPitch
            }

            defaultZoom={
              camZ
            }

            minZoom={
              minZoomDistance
            }

            maxZoom={
              maxZoomDistance
            }

            enableMouseParallax={
              enableMouseParallax
            }

            enableManualRotation={
              enableManualRotation
            }

            enableHoverRotation={
              enableHoverRotation
            }

            enableManualZoom={
              enableManualZoom
            }

            autoFrame={
              autoFrame
            }

            fadeIn={
              fadeIn
            }

            autoRotate={
              autoRotate
            }

            autoRotateSpeed={
              autoRotateSpeed
            }

            onLoaded={
              onModelLoaded
            }
          />

        </Suspense>


        {/* -------------------------------------------------- */}
        {/* DESKTOP CONTROLS                                  */}
        {/* -------------------------------------------------- */}

        {!isTouch && (
          <DesktopControls
            pivot={pivot}
            min={
              minZoomDistance
            }
            max={
              maxZoomDistance
            }
            zoomEnabled={
              enableManualZoom
            }
          />
        )}

      </Canvas>
    </div>
  );
};


export default ModelViewer;