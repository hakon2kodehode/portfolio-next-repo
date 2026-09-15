"use client";

import styled from "styled-components";
import { useTheme } from "styled-components";
import Spacer from "@/components/Spacer.styled";

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

  height: 3000px;
  width: 100vw;
  font-family: Orbitron;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

const AboutHeadingMain = styled.h1`
  font-family: Orbitron;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

const AboutMeHeadingSecondary = styled.h2`
  font-family: Orbitron;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
  align-items: center;

  height: fit-content;
  width: 1300px;

  border: 2px solid ${({ theme }) => (theme.debug ? "blue" : "transparent")};
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  border: 2px solid ${({ theme }) => (theme.debug ? "red" : "transparent")};

  height: 350px;
  width: auto;
`;

const ImageContainerMultiCol = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  border: 2px solid ${({ theme }) => (theme.debug ? "yellow" : "transparent")};

  height: 600px;
  width: 300px;

  margin: 0;
  padding: 0;
`;

const ImageContainerMultiRow = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  border: 2px solid ${({ theme }) => (theme.debug ? "yellow" : "transparent")};

  height: 300px;
  width: 1200px;
  margin: 30px;
`;

const AboutMeImage = styled.img`
  width: auto;
  height: inherit;
  overflow: hidden;
  /* position: absolute; */
  z-index: 1;
`;

const AboutMeImageAlt = styled.img`
  width: auto;
  height: inherit;
  overflow: hidden;
  /* position: absolute; */
  z-index: 1;

  margin-top: 20px;
  margin-bottom: 20px;

  border: 2px solid ${({ theme }) => (theme.debug ? "cyan" : "transparent")};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;

  height: fit-content;
  width: inherit;

  /* margin-left: 20px;
  margin-right: 20px; */

  border: 2px solid ${({ theme }) => (theme.debug ? "purple" : "transparent")};
`;

const AboutMeText = styled.p`
  font-family: Orbitron;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.fontPrimary};
  font-weight: 450;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-align: center;
`;

const Underlined = styled.span`
  text-decoration: underline;
`;

export default function AboutPage() {
  const theme = useTheme();

  return (
    <>
      <SiteWrapper>
        <Spacer
          $width="1200px"
          $height="2px"
          $marginTop="30px"
          $marginBottom="10px"
        />
        <AboutHeadingMain>About me</AboutHeadingMain>
        <Spacer
          $width="1200px"
          $height="2px"
          $marginTop="10px"
          $marginBottom="30px"
        />
        <AboutMeContainer>
          <ImageContainer>
            <AboutMeImage
              src="/images/portraitpicturegray.png"
              alt="portrait picture"
            />
          </ImageContainer>
          <TextContainer>
            <AboutMeHeadingSecondary>
              <strong>Who am I</strong> <br />
              <br />
            </AboutMeHeadingSecondary>
            <AboutMeText>
              My name is Håkon Iversen Staurset <br />
              I am 32 years old and I'm currently living in Molde, Norway.
              <br />
              <br />
              I would describe myself as an earnest, open, easygoing person.
              <br />
              <br />
              Amongst my hobbies are frisbeegolf, gaming and going to the gym.
              <br />
              <br />
              I also have an interest in cooking, outdoorslife and 3D art.
              <br />
              I almost always listen to music, and my favorite bands are
              Gorillaz & Tame Impala.
              <br />
              My favourite foods are burritos, pizza & lasagna.
              <br />
              My favorite color is purple.
              <br />
              <br />I run a one-man company ( Håkon Staurset 3D-visalization)
              where i take on contracts for 3D scanning, courses & more.
            </AboutMeText>
          </TextContainer>
        </AboutMeContainer>

        <Spacer
          $width="1200px"
          $height="2px"
          $marginTop="30px"
          $marginBottom="30px"
        />

        <AboutMeContainer>
          <TextContainer>
            <AboutMeHeadingSecondary>
              {" "}
              <strong>My history</strong>
              <br />
              <br />
            </AboutMeHeadingSecondary>
            <AboutMeText>
              Originally I have a background in construction (with a
              craftsmanship certificate), which comes in handy when doing
              projects involving buildings and their structure.
              <br />
              <br />
              After an adventurous year in northern Norway being a dog
              sledding-guide I later shifted my career towards 3D modelling and
              visualization. This started when i got the opportunity to learn
              about 3D modelling & game technology in a two year long online
              course through "Kunnskapstrening IT". Here i learned the basics of
              3D modelling and using software like Blender and how to create
              scenes in game engines like Unity and Unreal Engine. I was also
              introduced to some basic programming through C#.
              <br />
              <br />
              There I experienced accomplishment and mastery in my work and i
              thoroughly enjoyed being able to exercise my creativity. <br />
              <br />
              With my newfound interest sparked, I continued to study "3D and
              games technology" at Noroff Fagskole in Oslo, Norway for two
              years. Here i got to further advance my knowledge in the field and
              learn to work in a team. I was also lucky to be part of several
              interesting projects, two of which were exceptionally lauded and
              received notable awards, both from the school itself and an
              independant organization.
              <br />
              <br />
              After my studies i worked as an intern for the local county
              municipality in Molde for half a year, working alongside with
              archeologists, historians and architects in the cultural
              department. There i used my 3D skills to preserve and visualize
              historical buildings and artifacts both from the past and current
              day, learning new skills and methods along the way such as
              photogrammetry, 3D Scanning and drone-work.
              <br />
              <br />
              Then i created my own one-man company ( Håkon Staurset 3D
              visualization) where i continued to work as a sole contractor.
              This includes 3D-scanning projects for the local county
              municipality as well as creating and holding comprehensive courses
              in basic 3D modelling and 3D Printing for local libraries &
              hobbyist groups.
              <br />
              <br />
              Recently I had the opportunity to partake in a half year intensive
              course focused on learning web development & programming where i
              got the opportunity to further expand my digital skillset. Here I
              learned the basics of web development and design like html, css,
              javascript, figma, next & react.
              <br />
              <br />
              Today I continue to look for opportunies where i can grow my
              skills and exercise my creativity. My goal is to create a life and
              daily routine that i can look forward to every morning. One where
              I can exercise my skillset & creativity as well as develop and
              deliver quality digital products.
            </AboutMeText>
          </TextContainer>

          <ImageContainerMultiCol>
            <AboutMeImageAlt src="/images/award1.jpg" alt="image of award" />
            <AboutMeImageAlt src="/images/award2.jpg" alt="image of award" />
          </ImageContainerMultiCol>
        </AboutMeContainer>

        <Spacer
          $width="1200px"
          $height="2px"
          $marginTop="30px"
          $marginBottom="30px"
        />

        <AboutMeContainer>
          <TextContainer>
            <AboutMeHeadingSecondary>
              {" "}
              <strong>My Skillset:</strong>
              <br />
              <br />
            </AboutMeHeadingSecondary>

            <AboutMeText>
              <Underlined>
                3D visualization, scanning & 3D printing:
                <br />
                <br />
              </Underlined>
              Basic modelling. Subdivision & hard-surface modelling. CAD.
              Sculpting. PBR( physically based rendering) texturing realistic &
              stylized assets. Rigging & weight painting character armatures.
              UV-Unwrapping. Lighting, Environment & level design in games
              engines. Retopology & optimizing of 3D Assets. Photogrammetry
              through photo & drone photo. Indoor scanning. Basic knowledge of
              3D printers, filament, 3D printing practises & slicer software.
              <br />
              <br />
              <Underlined>
                Web dev/design & programming:
                <br />
                <br />
              </Underlined>
              Html, CSS, Javascript, React, Next, Figma, <br />
              <br />
              <Underlined>
                Software Proficiency:
                <br />
                <br />
              </Underlined>
              Blender, Maya, Substance Painter 3D, Zbrush, RealityCapture,
              Unreal engine, Unity, Photopea, TinkerCad, Bambu lab, Da vinci
              resolve, VsCode,
            </AboutMeText>
          </TextContainer>
        </AboutMeContainer>
        <Spacer
          $width="1200px"
          $height="2px"
          $marginTop="30px"
          $marginBottom="30px"
        />
        <AboutMeContainer>
          <TextContainer>
            <AboutMeHeadingSecondary>
              What can I offer?
              <br />
              <br />
            </AboutMeHeadingSecondary>
            <AboutMeText>
              Here are just some examples of things I can do, based on previous
              projects & general experience.
              <br />
              <br />
              I can realize any concept or idea in the form of 3D and 3D
              visualization. Some examples can be models for product design,
              animations for commercials, marketing material and more. <br />
              <br />
              3D can be used to scan, store, preserve & present historically or
              culturally significant architecture or artifacts in present day,
              or visualize ones from the past. <br />
              <br />
              I can create assets for use in video games, tv-series, movies,
              animations & more.
              <br />
              <br />
              Functional parts can be produced and 3D printed with accurate
              measurements as well as any product like toys or figurines in
              varying colours / materials.
              <br />
              <br />
              I can design and develop sleek, professional and reactive websites
              for any purpose.
              <br />
              <br />
              I can hold courses and educate on 3D printing & 3D design for most
              age groups.
              <br />
              <br />
              These are just some examples, though the opportunities are vast.
              If you have an idea you think that I could help bring to life, let
              me know!
            </AboutMeText>
            <ImageContainerMultiRow></ImageContainerMultiRow>
          </TextContainer>
        </AboutMeContainer>
        <Spacer
          $width="1200px"
          $height="2px"
          $marginTop="30px"
          $marginBottom="30px"
        />
      </SiteWrapper>
    </>
  );
}
