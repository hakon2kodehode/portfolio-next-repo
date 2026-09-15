"use client";

import styled from "styled-components";
import Link from "next/link";
import Button from "./Button.styled";

const CardContainer = styled.div`
  position: relative;

  /* margin-top: 20px; */
  /* margin-bottom: 40px; */

  border: solid 2px;
  border-color: ${({ theme }) => theme.colors.gradientSecondary};
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: inherit;

  width: 600px;
  overflow: hidden;
  position: relative;

  z-index: 2;

  box-shadow: 0px 3px 8px 3px
    color-mix(
      in srgb,
      ${({ theme }) => theme.colors.gradientSecondary} 50%,
      transparent
    );
`;

const CardImage = styled.img`
  width: auto;
  height: 100%;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const ButtonContainer = styled.div`
  position: absolute;

  bottom: 15%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 2px solid ${({ theme }) => (theme.debug ? "red" : "transparent")};

  height: 50px;
  width: 200px;
`;

const CardHeading = styled.h1`
  font-family: Orbitron;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.fontPrimary};

  position: absolute;

  top: 5%;
`;

const CardText = styled.h3`
  font-family: Orbitron;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.fontPrimary};
  position: absolute;

  bottom: 5%;
`;

export default function SliderCard({ image, imagetext, heading, description, pagelink }) {
  return (
    <>
      <CardContainer>
        <CardImage src={image} alt={imagetext} />
        <CardHeading>{heading}</CardHeading>
        <CardText>{description}</CardText>

        <ButtonContainer>
          <Button href={pagelink}>See More</Button>
        </ButtonContainer>
      </CardContainer>
    </>
  );
}
