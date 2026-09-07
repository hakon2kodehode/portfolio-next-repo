"use client";

import styled from "styled-components";
import MoonSvg from "../public/icons/moon.svg";
import SunSvg from "../public/icons/sun.svg";
import { useAppTheme } from "./ThemeProvider";

const MoonIcon = styled(MoonSvg)`
  color: ${({ theme }) => theme.colors.fontPrimary};
  height: 24px;
  width: 24px;
  margin-left: 5px;
  margin-right: 15px;
  transform: skewX(30deg);
`;

const SunIcon = styled(SunSvg)`
  color: ${({ theme }) => theme.colors.fontPrimary};
  height: 24px;
  width: 24px;
  margin-left: 15px;
  margin-right: 5px;
  transform: skewX(30deg);
`;

const SwitchWrapper = styled.div`
  /* Gives the switch a subtle glow */
  filter: drop-shadow(
    0 0 8px
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.gradientPrimary} 35%,
        transparent
      )
  );

  --skew: -30deg;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

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

    background-color: ${({ theme }) => theme.colors.backgroundSecondary};

    z-index: -1;

    pointer-events: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const SwitchInside = styled.div`
  position: relative;

  width: 60px;
  height: 30px;

  border-top-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 0;

  margin-left: 5px;
  margin-right: 5px;

  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

const SwitchHead = styled.div`
  width: 20px;
  height: 30px;

  border-top-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 0;

  background-color: ${({ theme }) => theme.colors.fontPrimary};

  position: absolute;
  left: 0;

  transform: ${({ $dark }) => ($dark ? "translateX(40px)" : "translateX(0px)")};

  box-sizing: border-box;

  transition:
    transform 0.3s ease,
    border 0.2s ease,
    box-shadow 0.2s ease;

  /* Hovering anywhere over the entire switch */
  ${SwitchWrapper}:hover & {
    transform: ${({ $dark }) =>
      $dark ? "translateX(40px) scale(1.1)" : "translateX(0px) scale(1.1)"};

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
  }
`;

export default function LightSwitch() {
  const { isDarkMode, setIsDarkMode } = useAppTheme();

  return (
    <SwitchWrapper
      onClick={() => {
        setIsDarkMode((prev) => !prev);
      }}
    >
      <SunIcon />

      <SwitchInside>
        <SwitchHead $dark={isDarkMode} />
      </SwitchInside>

      <MoonIcon />
    </SwitchWrapper>
  );
}
