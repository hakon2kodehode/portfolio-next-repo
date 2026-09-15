"use client";

import styled from "styled-components";
import { useTheme } from "styled-components";
import Spacer from "@/components/Spacer.styled";
import YouTubeEmbed from "@/components/YouTubeEmbed";

const SiteWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-top: 50px;

  background:
    radial-gradient(
      circle at 50% 35%,
      ${({ theme }) => theme.colors.gradientPrimary}26,
      transparent 25%
    ),
    ${({ theme }) => theme.colors.backgroundSecondary};

  border: 2px solid ${({ theme }) => (theme.debug ? "green" : "transparent")};

  height: 1200px;
  width: 100vw;
  font-family: Orbitron;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

const ProjectHeadingMain = styled.h1`
  font-family: Orbitron;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

const ProjectHeadingSecondary = styled.h2`
  font-family: Orbitron;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;

  /* border: solid 2px red; */

  height: 900px;
  width: 1200px;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  /* border: solid 2px red; */

  width: 700px;
  height: auto;
`;

const ProjectText = styled.p`
  font-family: Orbitron;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.fontPrimary};
  text-align: center;
`;

const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

width: 800px;
height: fit-content;

/* border: solid 2px purple; */

margin: 20px;


`

export default function Project_diorama() {
  return (
    <SiteWrapper>
      <Spacer
        $width="1200px"
        $height="2px"
        $marginTop="30px"
        $marginBottom="10px"
      />
      <ProjectHeadingMain>Cozy Cabin Diorama</ProjectHeadingMain>
      <Spacer
        $width="1200px"
        $height="2px"
        $marginTop="10px"
        $marginBottom="30px"
      />
<ProjectContainer>
  <VideoContainer>
    <YouTubeEmbed videoId="xABRSnkgPnY" />
  </VideoContainer>

  <TextContainer>
    <ProjectText>
      A cozy highly stylized diorama of a log cabin in the snow. This was my final exam project during my last study year in Oslo. It was awarded as "Best Student Work" during the "Golden Egg" award ceremony event, organized by the school.
    </ProjectText>
  </TextContainer>

  <TextContainer>
    <ProjectText>
      All models and textures were created by me, as well as the environment and lighting.
    </ProjectText>
  </TextContainer>

  <TextContainer>
    <ProjectText>
      The assets were modelled in Blender, textured in Substance Painter and rendered in Unreal Engine 5.
    </ProjectText>
  </TextContainer>
</ProjectContainer>
    </SiteWrapper>
  );
}
