import styled from "styled-components";

// # Styled-components: Useful way applying CSS
// # Use "backtic" for setting CSS properties
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

// # Simplify above code
// # Use props
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

// # Extend components
const Circle = styled(Box)`
  border-radius: 50%;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
  height: 30px;
  width: 50px;
  font-size: 10px;
`;

// # Reduce to write repeated attributes by "attrs"
const Input = styled.input.attrs({ required: true, maxLength: 10 })`
  background-color: tomato;
`;

function Styled() {
  return (
    // # Inline CSS: Easy but dirty code...
    // <div style={{ display: "flex" }}>
    //   <div style={{ backgroundColor: "teal", width: 100, height: 100 }}></div>
    //   <div style={{ backgroundColor: "tomato", width: 100, height: 100 }}></div>
    // </div>

    // # Styled-components: Easier to read than inline CSS
    <Father>
      {/* <Box bgColor="teal" />
      <Circle bgColor="tomato" /> */}

      {/* # Use Btn`s props as anchor tag 
      <Btn>Log in</Btn>
      <Btn as="a" href="/">Log in</Btn> */}

      {/* These Inputs have required & maxLength attributes */}
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default Styled;
