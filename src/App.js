import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs((props) => ({
  placeholder: props.placeholder || "text",
  required: true,
}))`
  background-color: tomato;
`;

function App() {
  return (
    <Father>
      <Input placeholder="props text" />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
