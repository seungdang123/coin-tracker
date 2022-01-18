import styled from "styled-components";

// # Styled-components: Useful way applying CSS
// # Use "backtic" for setting CSS properties
const Father = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

// # Extending components
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
  background-color: ${(props) => props.bgColor};
  margin-bottom: 15px;
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
      <Input bgColor="red" />
      <Input bgColor="orange" />
      <Input bgColor="yellow" />
      <Input bgColor="green" />
      <Input bgColor="blue" />
      <Input
        as="div"
        bgColor="purple"
        style={{ color: "white", width: "80px", textAlign: "center" }}
      >
        as
      </Input>
    </Father>
  );
}

export default Styled;
