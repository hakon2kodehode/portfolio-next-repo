"use client";

import styled from "styled-components";

const ThumbnailContainer = styled.div`
  position: relative;

  border: solid 2px;
  border-color: ${({ theme }) => theme.colors.gradientSecondary};
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: 80px;

  width: 140px;

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

const ThumbnailImage = styled.img`
  width: auto;
  height: 100%;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export default function SliderThumbnail({ image, imagetext }) {
  return (
    <>
      <ThumbnailContainer>
        <ThumbnailImage src={image} alt={imagetext} />
      </ThumbnailContainer>
    </>
  );
}
