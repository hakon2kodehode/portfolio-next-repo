"use client";

import styled from "styled-components";
import Link from "next/link";


const ParallelogramButton = styled(Link)`

display: flex;
flex-direction: column;

justify-content: center;
align-items: center;

  --skew: -30deg;

  /* width: 100px;
  height: 30px; */

  width: inherit;
  height: fit-content;
  padding-left: 8px;
  padding-right: 8px;

  border-radius: 5px 0 5px 0;

  margin-left: 10px;
  margin-right: 10px;

  border: 2px solid transparent;
  box-sizing: border-box;

  background-color: ${({ theme }) => theme.colors.backgroundPrimary};

  transform: skewX(var(--skew)) scale(1);

  transition:
    transform 0.3s ease,
    border 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: skewX(var(--skew)) scale(1.1);

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

    &:hover {
      cursor: pointer;
    }
  }

  > * {
    display: inline-block;
    transform: skewX(calc(var(--skew) * -1));
  }
`;

const ButtonText = styled.span`
  font-family: Orbitron;
  font-size: large;
  color: ${({ theme }) => theme.colors.fontPrimary};

  display: inline-block;

  transform: skewX(30deg);
`;

export default function Button({ children, href }) {
  return (
    <>
      <ParallelogramButton href={href}>
        <ButtonText>{children}</ButtonText>
      </ParallelogramButton>
    </>
  );
}
