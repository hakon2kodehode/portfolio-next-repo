"use client";

import styled from "styled-components";
import Spacer from "@/components/Spacer.styled";
import SliderThreeD from "@/components/SliderThreeD";
import SliderWebDev from "@/components/SliderWebDev";
import SliderCard from "@/components/SliderCard";
import SliderThumbnail from "@/components/SliderThumbnail";
import RippleGrid from "@/components/RippleGrid";
import { useTheme } from "styled-components";

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
const SiteWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-top: 50px;

  background:
    radial-gradient(
      circle at 50% 30%,
      ${({ theme }) => theme.colors.gradientPrimary}26,
      transparent 50%
    ),
    radial-gradient(
      circle at 50% 80%,
      ${({ theme }) => theme.colors.gradientPrimary}26,
      transparent 50%
    ),
    ${({ theme }) => theme.colors.backgroundSecondary};

  border: 2px solid ${({ theme }) => (theme.debug ? "green" : "transparent")};

  height: fit-content;
  width: 100vw;
`;

const ThreeDContainer = styled.div`
  position: relative;

  border: 2px solid ${({ theme }) => (theme.debug ? "red" : "transparent")};

  margin-top: 20px;

  height: 500px;
  width: 700px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const WebDevContainer = styled.div`
  border: 2px solid ${({ theme }) => (theme.debug ? "red" : "transparent")};

  margin-top: 40px;

  height: 500px;
  width: 700px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const IntroHeading = styled.h1`
  font-family: Orbitron;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

const IntroSubHeading = styled.h2`
  font-family: Orbitron;
  font-size: large;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

const IntroText = styled.p`
  padding: 10px;
  font-family: Orbitron;
  font-size: medium;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

const SliderContainer = styled.div`
  border: 2px solid ${({ theme }) => (theme.debug ? "green" : "transparent")};

  height: 400px;
  width: 700px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default function ProjectsPage() {

  const theme = useTheme();

  return (
    <SiteWrapper>
      <Spacer
        $width="1200px"
        $height="2px"
        $marginTop="30px"
        $marginBottom="30px"
      />

      <IntroHeading>My Projects</IntroHeading>

      <ThreeDContainer>
        {/* <RippleGridContainer>
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
        </RippleGridContainer> */}
        <IntroSubHeading>3D Visualization</IntroSubHeading>
        <IntroText>
          Below are some works related to 3D visualization & games tech
        </IntroText>
        <SliderContainer>
          <SliderThreeD />
        </SliderContainer>
      </ThreeDContainer>
      <Spacer
        $width="1200px"
        $height="2px"
        $marginTop="0px"
        $marginBottom="0px"
      />
      <WebDevContainer>
        <IntroSubHeading>Web Development & Programming</IntroSubHeading>
        <IntroText>
          Below are some works related to Web development & programming
        </IntroText>
        <SliderContainer>
          <SliderWebDev />
        </SliderContainer>
      </WebDevContainer>
    </SiteWrapper>
  );
}
