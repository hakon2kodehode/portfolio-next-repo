"use client";

import styled from "styled-components";

import FacebookSvg from "../public/icons/facebook.svg?react";

import InstagramSvg from "../public/icons/instagram.svg?react";

import LinkedinSvg from "../public/icons/linkedin.svg?react";

import YoutubeSvg from "../public/icons/youtube.svg?react";

const FacebookIcon = styled(FacebookSvg)`
  color: red;
  height: 30px;
  width: 30px;
  padding-left: 5px;
  padding-right: 5px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.4);
  }
`;

const InstagramIcon = styled(InstagramSvg)`
  color: red;
  height: 30px;
  width: 30px;
  padding-left: 5px;
  padding-right: 5px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.4);
  }
`;

const LinkedInIcon = styled(LinkedinSvg)`
  color: red;
  height: 30px;
  width: 30px;
  padding-left: 5px;
  padding-right: 5px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.4);
  }
`;

const YoutubeIcon = styled(YoutubeSvg)`
  color: red;
  height: 30px;
  width: 30px;
  padding-left: 5px;
  padding-right: 5px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.4);
  }
`;

const FooterMainContainer = styled.div`

position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
 
  width: 100vw;
  height: 300px;

  background-color: ${({ theme }) => theme.colors.backgroundPrimary};

  border: 2px solid ${({ theme }) => (theme.debug ? "red" : "transparent")};
`;

const FooterSubContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: fit-content;

  border: 2px solid ${({ theme }) => (theme.debug ? "cyan" : "transparent")};
`;

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 200px;
  width: 300px;

  margin: 20px;

  border: 2px solid ${({ theme }) => (theme.debug ? "black" : "transparent")};
`;

const FooterHeading = styled.h2`
  font-family: Orbitron;
  font-size: large;
  color: ${({ theme }) => theme.colors.fontPrimary};
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);

  text-decoration-line: underline;
`;

const FooterText = styled.h3`
  font-family: Orbitron;
  font-size: medium;
  color: ${({ theme }) => theme.colors.fontPrimary};
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
`;

const FooterSmallText = styled.h4`
  text-align: center;
  position: absolute;
  bottom: 1%;
  padding: 0;
  margin: 0;
  font-family: Orbitron;
  font-size: smaller;
  color: ${({ theme }) => theme.colors.fontPrimary};
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
`;

const FooterLink = styled.a`
  font-family: Orbitron;
  font-size: medium;
  color: ${({ theme }) => theme.colors.fontPrimary};
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  color: #ff6803;
  margin-top: 5px;
  margin-bottom: 5px;

  &:hover {
    color: cyan;
    transform: scale(1.2);
    text-decoration: underline;
    cursor: pointer;
  }
`;

const FooterLogoBox = styled.div`
  height: fit-content;
  width: fit-content;

  margin-top: 20px;

  border: 2px solid ${({ theme }) => (theme.debug ? "yellow" : "transparent")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SocialLink = styled.a`
  border: 2px solid ${({ theme }) => (theme.debug ? "red" : "transparent")};
  height: 40px;
  width: 40px;

  display: flex;

  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export default function Footer() {
  return (
    <>
      <FooterMainContainer>
        <FooterSubContainer>
          <FooterBox>
            <FooterHeading>Useful links:</FooterHeading>

            <FooterLink>Back to the top</FooterLink>
            <FooterLink>Page 1</FooterLink>
            <FooterLink>Page 2</FooterLink>
            <FooterLink>Page 3</FooterLink>
            <FooterLink>Page 4</FooterLink>
          </FooterBox>

          <FooterBox>
            <FooterHeading>Social media:</FooterHeading>
            <FooterLogoBox>
              <SocialLink
                href="https://www.facebook.com/hakon.iversenstaurset"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FaceBook link"
              >
                <FacebookIcon />
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/hawkon_tv/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram link"
              >
                <InstagramIcon />
              </SocialLink>

              <SocialLink
                href="https://www.linkedin.com/in/h%C3%A5kon-iversen-staurset/?skipRedirect=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin link"
              >
                <LinkedInIcon />
              </SocialLink>

              <SocialLink
                href="https://www.youtube.com/@Hagon94"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube link"
              >
                <YoutubeIcon />
              </SocialLink>
            </FooterLogoBox>
          </FooterBox>

          <FooterBox>
            <FooterHeading>Contact Information:</FooterHeading>
            <FooterText>Navn: Håkon Iversen Staurset</FooterText>
            <FooterHeading>E-Mail:</FooterHeading>

            <FooterLink href="mailto:hkn-is@hotmail.com">
              Hkn-is@hotmailcom
            </FooterLink>
            <FooterText>Mobile: +47 40623565</FooterText>
          </FooterBox>
        </FooterSubContainer>

        <FooterSmallText>
          Website made by: Håkon Iversen Staurset. <br />
          Copyright &copy; 2026 Håkon Iversen Staurset. All rights reserved.
        </FooterSmallText>
      </FooterMainContainer>
    </>
  );
}
