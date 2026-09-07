import styled from "styled-components";

const ScrollContainer = styled.div`
  display: flex;
  align-items: center;

  height: 20px;
  width: 80vw;
  overflow: hidden;

  border: 2px solid ${({ theme }) => (theme.debug ? "red" : "transparent")};
  white-space: nowrap;

  /* 20% fade on both sides */
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );

  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );
`;

const ScrollTrack = styled.div`
  display: flex;
  flex-shrink: 0;
  width: max-content;

  animation: scrollLTR 80s linear infinite;

  @keyframes scrollLTR {
    from {
      transform: translateX(-50%);
    }

    to {
      transform: translateX(0);
    }
  }
`;

const ScrollGroup = styled.div`
  display: flex;
  gap: 50px;
  flex-shrink: 0;

  /* Must be the same width as the other group */
  padding-right: 50px;
`;

const ScrollText = styled.h4`
  font-family: Orbitron;
  margin: 0;

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
`;

export default function ScrollingTextLTR() {
  return (
    <ScrollContainer>
      <ScrollTrack>
        {/* First copy */}
        <ScrollGroup>
          <ScrollText>&lt;Web design&gt;</ScrollText>
          <ScrollText>&lt;Programming&gt;</ScrollText>
          <ScrollText>&lt;3D Visualization&gt;</ScrollText>
          <ScrollText>&lt;3D Printing&gt;</ScrollText>
          <ScrollText>&lt;Courses&gt;</ScrollText>
          <ScrollText>&lt;Drone Photo&gt;</ScrollText>
          <ScrollText>&lt;Photogrammetry&gt;</ScrollText>

          <ScrollText>&lt;Html&gt;</ScrollText>
          <ScrollText>&lt;Css&gt;</ScrollText>
          <ScrollText>&lt;Javascript&gt;</ScrollText>
          <ScrollText>&lt;React&gt;</ScrollText>
          <ScrollText>&lt;Figma&gt;</ScrollText>

          <ScrollText>&lt;Blender&gt;</ScrollText>
          <ScrollText>&lt;Unity&gt;</ScrollText>
          <ScrollText>&lt;Unreal&gt;</ScrollText>
          <ScrollText>&lt;Zbrush&gt;</ScrollText>
          <ScrollText>&lt;Maya&gt;</ScrollText>

          <ScrollText>&lt;Modeling&gt;</ScrollText>
          <ScrollText>&lt;Sculpting&gt;</ScrollText>
          <ScrollText>&lt;Texturing&gt;</ScrollText>
          <ScrollText>&lt;Rendering&gt;</ScrollText>
          <ScrollText>&lt;Lighting&gt;</ScrollText>
          <ScrollText>&lt;Rigging&gt;</ScrollText>
          <ScrollText>&lt;Level design&gt;</ScrollText>
          <ScrollText>&lt;Retopology&gt;</ScrollText>
        </ScrollGroup>

        {/* Identical second copy */}
        <ScrollGroup>
          <ScrollText>&lt;Web design&gt;</ScrollText>
          <ScrollText>&lt;Programming&gt;</ScrollText>
          <ScrollText>&lt;3D Visualization&gt;</ScrollText>
          <ScrollText>&lt;3D Printing&gt;</ScrollText>
          <ScrollText>&lt;Courses&gt;</ScrollText>
          <ScrollText>&lt;Drone Photo&gt;</ScrollText>
          <ScrollText>&lt;Photogrammetry&gt;</ScrollText>

          <ScrollText>&lt;Html&gt;</ScrollText>
          <ScrollText>&lt;Css&gt;</ScrollText>
          <ScrollText>&lt;Javascript&gt;</ScrollText>
          <ScrollText>&lt;React&gt;</ScrollText>
          <ScrollText>&lt;Figma&gt;</ScrollText>

          <ScrollText>&lt;Blender&gt;</ScrollText>
          <ScrollText>&lt;Unity&gt;</ScrollText>
          <ScrollText>&lt;Unreal&gt;</ScrollText>
          <ScrollText>&lt;Zbrush&gt;</ScrollText>
          <ScrollText>&lt;Maya&gt;</ScrollText>

          <ScrollText>&lt;Modeling&gt;</ScrollText>
          <ScrollText>&lt;Sculpting&gt;</ScrollText>
          <ScrollText>&lt;Texturing&gt;</ScrollText>
          <ScrollText>&lt;Rendering&gt;</ScrollText>
          <ScrollText>&lt;Lighting&gt;</ScrollText>
          <ScrollText>&lt;Rigging&gt;</ScrollText>
          <ScrollText>&lt;Level design&gt;</ScrollText>
          <ScrollText>&lt;Retopology&gt;</ScrollText>
        </ScrollGroup>
      </ScrollTrack>
    </ScrollContainer>
  );
}
