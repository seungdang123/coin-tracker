// 1. TypeScript definition : Make a explanation for TS
// Solve a problem by doing npm install -i --save-dev @types/styled-components for some error in related in TS
// refer to "DefinitelyTyped"

// 2. Typing for Event
// const [value, setValue] = useState("");
// const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//   const {
//     currentTarget: { value },
//   } = event;
//   setValue(value);
// };

// const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//   console.log("Hello", value);
// };

// <form onSubmit={onSubmit}>
//   <input
//     value={value}
//     onChange={onChange}
//     type="text"
//     placeholder="username"
//   />
//   <button>Log in</button>
// </form>

// 3. Theme in TS
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <H1>Protected</H1>
    </Container>
  );
}

export default App;
