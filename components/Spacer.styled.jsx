import styled from "styled-components";

const Spacer = styled.div`


  /* border: 2px solid ${({ theme }) => (theme.debug ? "red" : "transparent")}; */

  width: ${({ $width = "100%" }) => $width};
  height: ${({ $height = "2px" }) => $height};

  margin-top: ${({ $marginTop = "20px" }) => $marginTop};
  margin-bottom: ${({ $marginBottom = "20px" }) => $marginBottom};

  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.gradientPrimary},
    ${({ theme }) => theme.colors.gradientSecondary},
    transparent
  );

  opacity: ${({ $opacity = 0.7 }) => $opacity};

  box-shadow: 0 0 5px
    color-mix(
      in srgb,
      ${({ theme }) => theme.colors.gradientPrimary} 30%,
      transparent
    );
`;

export default Spacer;
