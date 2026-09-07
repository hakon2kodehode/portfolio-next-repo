import styled from "styled-components";
import ModelViewer from "./ModelViewer";

import RippleGrid from "./Ripplegrid";
import { useTheme } from "styled-components";
import { useState } from "react";
// import profilepicture from "../public/images/profilepicture.jpg";
import BlenderIcon from "../public/icons/blender.svg?react";
import PainterIcon from "../public/icons/painter.svg?react";
import MayaIcon from "../public/icons/maya.svg?react";
import ZbrushIcon from "../public/icons/zbrush.svg?react";
import UnrealIcon from "../public/icons/unreal.svg?react";
import UnityIcon from "../public/icons/unity.svg?react";
import RealityscanIcon from "../public/icons/realityscan.svg?react";
import FigmaIcon from "../public/icons/figma.svg?react";
import HtmlIcon from "../public/icons/html.svg?react";
import CssIcon from "../public/icons/css.svg?react";
import ReactIcon from "../public/icons/react.svg?react";
import JavascriptIcon from "../public/icons/javascript.svg?react";

import Spacer from "./Spacer.styled";

const HeroWrapper = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 2px solid ${({ theme }) => (theme.debug ? "purple" : "transparent")};
  height: 500px;
  width: 900px;

  position: relative;
`;

const HeroSideContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 300px;
  border: 2px solid ${({ theme }) => (theme.debug ? "yellow" : "transparent")};

  margin: 0px;
`;

const ModelContainer = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid ${({ theme }) => (theme.debug ? "cyan" : "transparent")};
`;

const RippleGridContainer = styled.div`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  pointer-events: none;

  & > div {
    transform: scale(4);
  }
`;

const SideText = styled.h2`
  font-family: Orbitron;
  margin: 0;
  z-index: 3;

  position: relative;
  display: inline-block;

  color: ${({ theme }) => theme.colors.fontPrimary};

  text-shadow:
    0 0 4px
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.gradientSecondary} 30%,
        transparent
      ),
    0 0 8px
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.gradientPrimary} 15%,
        transparent
      );

  cursor: pointer;

  transition: transform 0.2s ease;

  /* Glow behind the underline */
  &::before {
    content: "";
    position: absolute;

    left: 0;
    bottom: -6px;

    width: 100%;
    height: 2px;

    background: linear-gradient(
      to right,
      transparent 0%,
      ${({ theme }) => theme.colors.gradientSecondary} 20%,
      ${({ theme }) => theme.colors.gradientSecondary} 80%,
      transparent 100%
    );

    filter: blur(4px);

    opacity: 0;

    transform: scaleX(0);
    transform-origin: center;

    transition:
      transform 0.25s ease,
      opacity 0.25s ease;
  }

  /* Actual underline */
  &::after {
    content: "";
    position: absolute;

    left: 0;
    bottom: -6px;

    width: 100%;
    height: 2px;

    background: linear-gradient(
      to right,
      transparent 0%,
      ${({ theme }) => theme.colors.gradientSecondary} 20%,
      ${({ theme }) => theme.colors.gradientSecondary} 80%,
      transparent 100%
    );

    transform: scaleX(0);
    transform-origin: center;

    transition: transform 0.25s ease;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:hover::before,
  &:hover::after {
    transform: scaleX(1);
  }

  &:hover::before {
    opacity: 0.7;
  }

  span {
    color: ${({ theme }) => theme.colors.gradientSecondary};

    text-shadow:
      0 0 4px ${({ theme }) => theme.colors.gradientSecondary},
      0 0 10px
        color-mix(
          in srgb,
          ${({ theme }) => theme.colors.gradientSecondary} 50%,
          transparent
        );

    transition: text-shadow 0.2s ease;
  }
`;

const TestText = styled.h3`
  position: absolute;
  align-self: center;
  justify-self: center;
  text-align: center;
  z-index: 4;
  top: 70px;
  color: #f87801;
`;
const InfoPanelRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  z-index: 5;

  background: rgba(20, 25, 35, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  //border
  border: 1px solid
    color-mix(
      in srgb,
      ${({ theme }) => theme.colors.gradientSecondary} 40%,
      transparent
    );

  // glow

  box-shadow: 0 0 30px
    color-mix(
      in srgb,
      ${({ theme }) => theme.colors.gradientSecondary} 15%,
      transparent
    );

  position: absolute;
  left: 50%;
  top: 0;
  width: 50%;
  height: 100%;

  // animation
  transform-origin: left center;

  transform: ${({ $visible }) => ($visible ? "scaleX(1)" : "scaleX(0)")};

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  transition:
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.3s ease;
`;

const InfoPanelLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  z-index: 5;

  background: rgba(20, 25, 35, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  //border
  border: 1px solid
    color-mix(
      in srgb,
      ${({ theme }) => theme.colors.gradientSecondary} 40%,
      transparent
    );

  // glow

  box-shadow: 0 0 30px
    color-mix(
      in srgb,
      ${({ theme }) => theme.colors.gradientSecondary} 15%,
      transparent
    );

  position: absolute;
  left: 0%;
  top: 0;
  width: 50%;
  height: 100%;

  // animation
  transform-origin: right center;

  transform: ${({ $visible }) => ($visible ? "scaleX(1)" : "scaleX(0)")};

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  transition:
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.3s ease;
`;

const CloseButton = styled.button`
  position: absolute;
  z-index: 7;

  top: 15px;
  right: 15px;

  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;

  border: 1px solid
    color-mix(
      in srgb,
      ${({ theme }) => theme.colors.gradientSecondary} 40%,
      transparent
    );

  background: transparent;

  color: ${({ theme }) => theme.colors.fontPrimary};

  font-size: 20px;
  line-height: 1;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.1);

    border-color: ${({ theme }) => theme.colors.gradientSecondary};

    box-shadow: 0 0 10px
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.gradientSecondary} 30%,
        transparent
      );
  }
`;

const ImageDiv = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  align-self: self-start;

  height: 175px;
  width: auto;
  /* 
  border: solid 2px red; */

  border: 2px solid
    color-mix(
      in srgb,
      ${({ theme }) => theme.colors.gradientSecondary} 40%,
      transparent
    );
`;

const ContentDivRow = styled.div`
  margin-top: 10px;

  /* border: solid 2px blue; */

  z-index: 6;
  width: 400px;
  height: fit-content;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ContentDivCol = styled.div`
  border: solid 2px green;
  z-index: 6;
  width: 400px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const InfoTagContainer = styled.div`
  /* border: solid 2px purple; */

  z-index: 6;
  width: 400px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const InfoHeading = styled.h4`
  font-family: Orbitron;
  color: ${({ theme }) => theme.colors.fontPrimary};
  font-size: small;

  margin-top: 20px;
  margin-bottom: 0;
`;

const InfoText = styled.p`
  font-family: Orbitron;
  color: ${({ theme }) => theme.colors.fontPrimary};
  font-size: small;

  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 0px;
  /* line-height: 30px; */
`;

const InfoTagText = styled.p`
  font-family: Orbitron;
  color: ${({ theme }) => theme.colors.fontPrimary};
  font-size: small;
  padding-left: 20px;
  margin: 0;
  line-height: 30px;
`;

const IconContainerTop = styled.div`
  /* border: solid 2px purple; */

  /* position: absolute;
  top: 0%; */

  z-index: 6;
  width: 450px;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const IconContainerBottom = styled.div`
  /* border: solid 2px purple; */

  position: absolute;
  bottom: 0%;

  z-index: 6;
  width: 450px;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  /* border: solid 1px red; */
  width: 30px;
  height: 30px;

  color: ${({ theme }) => theme.colors.colorPrimary};

  margin-left: 5px;
  margin-right: 5px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const SpacerTop = styled.div`
  position: absolute;
  top: 8%;

  /* border: 2px solid ${({ theme }) =>
    theme.debug ? "red" : "transparent"}; */

  width: ${({ $width = "100%" }) => $width};
  height: ${({ $height = "2px" }) => $height};

  margin-top: ${({ $marginTop = "20px" }) => $marginTop};
  margin-bottom: ${({ $marginBottom = "20px" }) => $marginBottom};

  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.gradientPrimary},
    ${({ theme }) => theme.colors.gradientSecondary},
    transparent
  );

  opacity: ${({ $opacity = 0.7 }) => $opacity};

  box-shadow: 0 0 5px
    color-mix(
      in srgb,
      ${({ theme }) => theme.colors.gradientPrimary} 30%,
      transparent
    );
`;

const SpacerBottom = styled.div`
  position: absolute;
  bottom: 8%;

  /* border: 2px solid ${({ theme }) =>
    theme.debug ? "red" : "transparent"}; */

  width: ${({ $width = "100%" }) => $width};
  height: ${({ $height = "2px" }) => $height};

  margin-top: ${({ $marginTop = "20px" }) => $marginTop};
  margin-bottom: ${({ $marginBottom = "20px" }) => $marginBottom};

  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.gradientPrimary},
    ${({ theme }) => theme.colors.gradientSecondary},
    transparent
  );

  opacity: ${({ $opacity = 0.7 }) => $opacity};

  box-shadow: 0 0 5px
    color-mix(
      in srgb,
      ${({ theme }) => theme.colors.gradientPrimary} 30%,
      transparent
    );
`;

const ParallelogramButton = styled.button`
  --skew: -30deg;

  width: 200px;
  height: 30px;

  border-radius: 5px 0 5px 0;

  margin-left: 10px;
  margin-right: 10px;

  border: 2px solid transparent;
  box-sizing: border-box;

  background-color: ${({ theme }) => theme.colors.backgroundPrimary};

  transform: skewX(var(--skew)) scale(1);

  transition:
    transform 0.3s ease,
    border 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: skewX(var(--skew)) scale(1.1);

    border: 2px solid ${({ theme }) => theme.colors.colorPrimary};

    box-shadow:
      0 0 5px
        color-mix(
          in srgb,
          ${({ theme }) => theme.colors.colorPrimary} 60%,
          transparent
        ),
      0 0 10px
        color-mix(
          in srgb,
          ${({ theme }) => theme.colors.colorPrimary} 25%,
          transparent
        );

    &:hover {
      cursor: pointer;
    }
  }

  > * {
    display: inline-block;
    transform: skewX(calc(var(--skew) * -1));
  }
`;

const ButtonText = styled.span`
  font-family: Orbitron;
  font-size: large;
  color: ${({ theme }) => theme.colors.fontPrimary};

  display: inline-block;

  transform: skewX(30deg);
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 15%;
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  height: 40px;
  width: 450px;

  /* border: solid 2px red; */
`;

export default function HeroComponent() {
  const theme = useTheme();

  const [isRightInfoPanelOpen, setIsRightInfoPanelOpen] = useState(false);

  const [isLeftInfoPanelOpen, setIsLeftInfoPanelOpen] = useState(false);

  return (
    <>
      <HeroWrapper>
        <InfoPanelLeft $visible={isLeftInfoPanelOpen}>
          <CloseButton onClick={() => setIsLeftInfoPanelOpen(false)}>
            ×
          </CloseButton>

          <IconContainerTop>
            <Icon>
              <BlenderIcon />
            </Icon>
            <Icon>
              <PainterIcon />
            </Icon>
            <Icon>
              <MayaIcon />
            </Icon>
            <Icon>
              <ZbrushIcon />
            </Icon>
            <Icon>
              <UnrealIcon />
            </Icon>
            <Icon>
              <UnityIcon />
            </Icon>
          </IconContainerTop>
          <SpacerTop
            $width="400px"
            $height="1px"
            $marginTop="5px"
            $marginBottom="5px"
          />
          <SpacerBottom
            $width="400px"
            $height="1px"
            $marginTop="5px"
            $marginBottom="5px"
          />
          <InfoHeading>3D Visualization</InfoHeading>
          <InfoText>
            With a background in construction and a longstanding interest in 3D
            I have acquired a large and varied skillset that allows me to use 3D
            across a multitude of usecases ranging from product design &
            showcase to scanning and preserving historical buildings & artifacts
            to models for movies, games, simulations & more.
          </InfoText>

          <InfoHeading>Web design & programming</InfoHeading>
          <InfoText>
            I have recently expanded my digital skillset with web design and
            programming. I use design platforms like figma to plan memorable and
            interesting designs and develop responsive websites and apps using a
            foundation of react, javascript, html and css.
          </InfoText>

          <ButtonContainer>
            <ParallelogramButton>
              <ButtonText>Read More</ButtonText>
            </ParallelogramButton>
          </ButtonContainer>
          <IconContainerBottom>
            <Icon>
              <FigmaIcon />
            </Icon>
            <Icon>
              <HtmlIcon />
            </Icon>
            <Icon>
              <CssIcon />
            </Icon>
            <Icon>
              <ReactIcon />
            </Icon>
            <Icon>
              <JavascriptIcon />
            </Icon>
          </IconContainerBottom>
        </InfoPanelLeft>
        <InfoPanelRight $visible={isRightInfoPanelOpen}>
          <CloseButton onClick={() => setIsRightInfoPanelOpen(false)}>
            ×
          </CloseButton>
          <ContentDivRow>
            <ImageDiv src="/images/profilepicture.jpg" alt="Profile-picture" />
            <InfoTagContainer>
              <InfoTagText>
                <strong>
                  <u>Name:</u>
                </strong>
                &nbsp;Håkon
              </InfoTagText>
              <InfoTagText>
                <strong>
                  <u>Age:</u>
                </strong>
                &nbsp;32
              </InfoTagText>
              <InfoTagText>
                <strong>
                  <u>Location:</u>
                </strong>
                &nbsp;Molde
              </InfoTagText>

              <InfoTagText>
                <strong>
                  <u>Interests:</u>
                </strong>
                &nbsp;3D, Web design
              </InfoTagText>

              <InfoTagText>
                <strong>
                  <u>Hobbies:</u>
                </strong>
                &nbsp;Disc-golf, MTG, Gaming
              </InfoTagText>
              <InfoTagText>
                <strong>
                  <u>Favorite food:</u>
                </strong>
                &nbsp;Burritos
              </InfoTagText>
            </InfoTagContainer>
          </ContentDivRow>
          <ContentDivRow>
            <InfoText>
              I’m a creative, curious, and down-to-earth person who likes to
              explore ideas and bring them to life. I enjoy working with others
              and believe that good communication, openness, and a bit of humour
              is important when working as a team. <br /> <br /> I’m comfortable
              working independently as well as with others. I don't mind asking
              for input and I am open to feedback. I enjoy learning, adapt well
              to new situations, and see them as opportunities to grow. For me,
              a good workplace is about about creating an environment where
              people can collaborate and and bring out the best in each other.{" "}
              <br /> <br />
              My Ideal workplace is one where I look forward to showing up to
              work in the morning.{" "}
            </InfoText>
          </ContentDivRow>
        </InfoPanelRight>
        <RippleGridContainer>
          <RippleGrid
            enableRainbow={false}
            gridColor={theme.colors.gradientSecondary}
            rippleIntensity={0.01}
            gridSize={18}
            gridThickness={27}
            mouseInteraction={false}
            mouseInteractionRadius={1.3}
            opacity={1}
            fadeDistance={1.4}
            vignetteStrength={3.6}
            glowIntensity={0.1}
            gridRotation={0}
          />
        </RippleGridContainer>

        <HeroSideContainer>
          <SideText
            onClick={() => setIsRightInfoPanelOpen(!isRightInfoPanelOpen)}
          >
            <span>&lt;</span> Who Am I? <span>&gt;</span>
          </SideText>
        </HeroSideContainer>

        <ModelContainer>
          <TestText>Test Model</TestText>
          <ModelViewer
            url="/models/male_head.glb"
            modelXOffset={0}
            modelYOffset={-0.7}
            defaultRotationX={0}
            defaultRotationY={0}
            // autoFrame={true}
            enableMouseParallax={false}
            enableHoverRotation={true}
            showScreenshotButton={false}
            minZoomDistance={0.5}
            defaultZoom={6.5}
            maxZoomDistance={10}
          />
        </ModelContainer>

        <HeroSideContainer>
          <SideText
            onClick={() => setIsLeftInfoPanelOpen(!isLeftInfoPanelOpen)}
          >
            <span>&lt;</span>
            What Can I Do?
            <span>&gt;</span>
          </SideText>
        </HeroSideContainer>
      </HeroWrapper>
    </>
  );
}
