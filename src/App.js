import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
//tag안에 넣어줄 arrribute를 작성할 수 있음
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
