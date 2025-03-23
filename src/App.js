import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotation} 5s linear infinite;
  //pseudo-selector
  //styled-component요소도 targeting 할 수 있음
  ${Emoji}:hover {
    font-size: 100px;
  }
`;
function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="div">😊</Emoji>
      </Box>
      <Emoji as="div">😊</Emoji>
    </Wrapper>
  );
}

export default App;
