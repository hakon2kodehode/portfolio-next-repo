"use client";

import styled from "styled-components";
import Button from "./Button.styled";
import LightSwitch from "./LightSwitch.styled";

const OuterWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 50%;

  transform: translateX(-50%);
  z-index: 10;

  /* margin: 20px auto 0 auto; */
  height: auto;
  width: fit-content;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border: 2px solid ${({ theme }) => (theme.debug ? "red" : "transparent")};
`;

const NavWrapper = styled.div`
  /* Gives the glow effect */
  filter: drop-shadow(
    0 0 8px
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.gradientPrimary} 35%,
        transparent
      )
  );

  --skew: -30deg;

  position: relative;

  margin-left: 5px;
  margin-right: 5px;

  width: fit-content;
  height: 50px;

  background: transparent;

  /* Main parallelogram skew */
  transform: skewX(var(--skew));

  border-top-left-radius: 15px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 2px;

  /* Gradient border */
  &::before {
    content: "";
    position: absolute;
    inset: 0;

    padding: 2px;
    border-radius: inherit;

    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.gradientPrimary},
      ${({ theme }) => theme.colors.gradientSecondary}
    );

    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);

    mask-composite: exclude;

    pointer-events: none;
  }

  /* Inner background */
  &::after {
    content: "";
    position: absolute;
    inset: 2px;

    border-radius: inherit;

    background-color: ${(props) => props.theme.colors.backgroundSecondary};

    z-index: -1;

    pointer-events: none;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  width: fit-content;
  height: 100%;

  margin-left: 10px;
  margin-right: 10px;

  transform: skewX(30deg);
`;

const ParallelogramBitThree = styled.div`
  width: 20px;
  height: 50px;

  border-top-left-radius: 5px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 0px;

  margin-left: 5px;
  margin-right: 5px;

  background-color: color-mix(
    in srgb,
    ${({ theme }) => theme.colors.backgroundPrimary} 30%,
    transparent
  );

  transform: skewX(-30deg);
`;

const ParallelogramBitTwo = styled.div`
  width: 20px;
  height: 50px;

  border-top-left-radius: 5px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 0px;

  margin-left: 5px;
  margin-right: 5px;

  background-color: color-mix(
    in srgb,
    ${({ theme }) => theme.colors.backgroundPrimary} 50%,
    transparent
  );

  transform: skewX(-30deg);
`;

const ParallelogramWrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin: 0;
  padding: 0;

  justify-content: center;
  align-items: center;

  width: fit-content;
  height: 50px;
`;

const ParallelogramBitOne = styled.div`
  width: 20px;
  height: 50px;

  border-top-left-radius: 5px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 0px;

  margin-left: 5px;
  margin-right: 5px;

  background-color: color-mix(
    in srgb,
    ${({ theme }) => theme.colors.backgroundPrimary} 70%,
    transparent
  );

  transform: skewX(-30deg);
`;

export default function Header() {
  return (
    <>
      <OuterWrapper>
        <LightSwitch />

        <ParallelogramWrapper>
          <ParallelogramBitThree />
          <ParallelogramBitTwo />
          <ParallelogramBitOne />
        </ParallelogramWrapper>

        <NavWrapper>
          <InnerWrapper>
            <Button href="/">Home</Button>
            <Button href="/projects">Projects</Button>
            <Button href="/about">About</Button>
            <Button href="/contact">Contact</Button>
          </InnerWrapper>
        </NavWrapper>
      </OuterWrapper>
    </>
  );
}
