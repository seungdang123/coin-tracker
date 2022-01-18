import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 1px solid ${(props) => props.borderColor};
`;

// Set interface
// Interface explain object
// We can check error relating to props before starting
interface CircleProps {
  bgColor: string;

  // ?: is mean optional
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  // Use State
  // TypeScript deduce that counter's type is number based on default value of useState
  // value's type could be a number or string
  // const [value, setValue] = useState<number|string>(0)

  const [counter, setCounter] = useState(1);
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) =>
  `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

sayHello({ name: "seung", age: 25 });
sayHello({ name: "seung", age: 25 });

export default Circle;
