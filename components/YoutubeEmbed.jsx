"use client";

import styled from "styled-components";
import { useTheme } from "styled-components";

const VideoWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;

  border: 2px solid ${({ theme }) => theme.colors.gradientSecondary};
  border-radius: 16px;

  overflow: hidden;

  box-shadow:
    0 0 20px ${({ theme }) => theme.colors.gradientSecondary}33,
    0 0 50px ${({ theme }) => theme.colors.gradientSecondary}11;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }
`;

export default function YouTubeEmbed({ videoId }) {
  return (
    <VideoWrapper>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </VideoWrapper>
  );
}
