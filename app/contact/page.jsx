"use client";

import styled from "styled-components";
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

  height: 1000px;
  width: 100vw;
  font-family: Orbitron;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

const ContactHeading = styled.div`
  font-family: Orbitron;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

const ContactText = styled.p`
  font-family: Orbitron;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.fontPrimary};
  text-align: center;
  margin: 10px;
`;

const ContactTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;

  border: solid 2px red;

  height: 500px;
  width: 500px;
`;

const Underlined = styled.span`
  text-decoration: underline;
`;

export default function ContactPage() {
  return (
    <>
      <SiteWrapper>
        <Spacer
          $width="1200px"
          $height="2px"
          $marginTop="30px"
          $marginBottom="30px"
        />
        <ContactTextContainer>
          <ContactHeading>Contact me</ContactHeading>
          <ContactText>
            Feel free to contact me with business inquires and anything
            pertaining to past projects or potential future projects.
          </ContactText>
          <ContactText>
            <Underlined>E-Mail:</Underlined> Hkn-is@hotmail.com
          </ContactText>
          <ContactText>
            <Underlined>Phone:</Underlined> +47 40623565
          </ContactText>
          <ContactText>Feel free to leave a text message if i am unable to answer a call.</ContactText>
        </ContactTextContainer>
      </SiteWrapper>
    </>
  );
}
