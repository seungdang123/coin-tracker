import styled from "styled-components";

// Styled-components: Useful way applying CSS
// Use "backtic" for setting CSS properties
const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

function App() {
  return (
    // # Inline CSS: Easy but dirty code...
    // <div style={{ display: "flex" }}>
    //   <div style={{ backgroundColor: "teal", width: 100, height: 100 }}></div>
    //   <div style={{ backgroundColor: "tomato", width: 100, height: 100 }}></div>
    // </div>

    // # Styled-components: Easier to read than inline CSS
    <Father>
      <BoxOne>
        <Text>Hello</Text>
      </BoxOne>
      <BoxTwo />
    </Father>
  );
}

export default App;
