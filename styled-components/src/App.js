import styled from "styled-components";

// Styled-components: Useful way applying CSS
// Use "backtic" for setting CSS properties
const Father = styled.div`
  display: flex;
`;

// const BoxOne = styled.div`
//   background-color: teal;
//   width: 100px;
//   height: 100px;
// `;

// const BoxTwo = styled.div`
//   background-color: tomato;
//   width: 100px;
//   height: 100px;
// `;

// Simplify above code
// Use props
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// Extend components
const Circle = styled(Box)`
  border-radius: 50%;
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
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}

export default App;
