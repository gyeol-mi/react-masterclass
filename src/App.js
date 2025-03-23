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

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotation} 5s linear infinite;
  //pseudo-selector
  //styled-component가 아닌 요소를 부모 styled-component요소에서 선택할 수 있음
  span {
    font-size: 36px;
    //span:hover{}와 같음-단축키처럼 쓴 코드드
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;
function App() {
  return (
    <Wrapper>
      <Box>
        <span>😊</span>
      </Box>
    </Wrapper>
  );
}

export default App;
