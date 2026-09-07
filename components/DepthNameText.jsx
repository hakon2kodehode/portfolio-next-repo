import styled from "styled-components";
import DepthText from "./DepthText";

const DepthNameTextContainer = styled.div`
  border: 2px solid ${({ theme }) => (theme.debug ? "red" : "transparent")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding-top: 20px;
  height: 200px;
  width: 500px;

  margin-top: 0px;
  margin-bottom: 0px;
`;

const DepthNameTextTop = styled(DepthText)`
  line-height: 50px;
  font-family: "Orbitron", sans-serif;
`;

const DepthNameTextMiddle = styled(DepthText)`
  line-height: 50px;
  margin-left: 150px;
  font-family: "Orbitron", sans-serif;
`;

const DepthNameTextBottom = styled(DepthText)`
  line-height: 50px;
  margin-left: 300px;
  font-family: "Orbitron", sans-serif;
`;

export default function DepthNameText() {
  return (
    <>
      <DepthNameTextContainer>
        <DepthNameTextTop text="Håkon" fontSize="100px" depth={2} />
        <DepthNameTextMiddle text="Iversen" fontSize="80px" depth={1.5} />
        <DepthNameTextBottom text="Staurset" fontSize="60px" depth={1} />
      </DepthNameTextContainer>
    </>
  );
}
