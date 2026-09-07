"use client";

import styled from "styled-components";
import HeaderButton from "../components/HeaderButton.styled";
import LightSwitch from "@/components/LightSwitch.styled";
import Header from "../components/Header.styled";
import Spacer from "../components/Spacer.styled";
import DepthNameText from "../components/DepthNameText";
import ScrollingTextLTR from "../components/ScrollingTextLTR.styled";
import ScrollingTextRTL from "../components/ScrollingTextRTL.styled";
import HeroComponent from "../components/HeroComponent.styled";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer.styled";

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

  height: fit-content;
  width: 100vw;
`;

const CarouselWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 2px solid ${({ theme }) => (theme.debug ? "red" : "transparent")};
  height: 500px;
  width: 900px;
`;

export default function Home() {
  return (
    <>
      <SiteWrapper>
        {/* <Header /> */}
        <Spacer
          $width="1200px"
          $height="2px"
          $marginTop="30px"
          $marginBottom="30px"
        />
        <DepthNameText />
        <Spacer
          $width="1200px"
          $height="2px"
          $marginTop="30px"
          $marginBottom="10px"
        />
        <ScrollingTextRTL />
        <Spacer
          $width="1200px"
          $height="2px"
          $marginTop="10px"
          $marginBottom="10px"
          $opacity={0.5}
        />
        <HeroComponent />
        <Spacer
          $width="1200px"
          $height="2px"
          $marginTop="10px"
          $marginBottom="10px"
          $opacity={0.5}
        />
        <ScrollingTextLTR />
        <Spacer
          $width="1200px"
          $height="2px"
          $marginTop="10px"
          $marginBottom="10px"
          $opacity={0.5}
        />
        <CarouselWrapper>
          <Carousel />
        </CarouselWrapper>

      </SiteWrapper>
    </>
  );
}
