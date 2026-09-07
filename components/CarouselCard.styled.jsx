import styled from "styled-components";

// import TestImage from "../assets/test.jpg";

const CardContainer = styled.div`
  /* margin-top: 20px; */

  border: solid 2px;
  border-color: ${({ theme }) => theme.colors.gradientSecondary};
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: 350px;
  width: 300px;
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

const CardHeading = styled.h2`
  font-family: michroma;
  color: aliceblue;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 2);
`;

const CardText = styled.h4`
  font-family: michroma;
  color: aliceblue;
  text-align: center;
  position: absolute;
  bottom: 0%;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 2);
`;

const CardButton = styled.button`
  /* border: solid 2px blue; */
  border-radius: 10px;
  height: 30px;
  width: 150px;
  position: absolute;
  bottom: 25%;
  box-shadow: 0px 3px 8px 3px rgba(0, 0, 0, 0.5);

  background-color: #333232;
  font-family: michroma;
  color: aliceblue;
  text-align: center;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export default function CarouselCard() {
  return (
    <>
      <CardContainer>
        <CardHeading>Project 1</CardHeading>
        <CardText>
          Card text. Card text. Card text. Card text. Card text.
        </CardText>
        <CardButton>See more</CardButton>

        <CardImage src="/images/test.jpg" alt="Profile-picture" />

        {/* <CardImage src={TestImage} /> */}
      </CardContainer>
    </>
  );
}
