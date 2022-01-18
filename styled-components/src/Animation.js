// # Add "keyframes" for animation
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

// # Animation
const rotaionAnimation = keyframes`
    0% {
        transform: rotate(0deg);
        background-color: dodgerblue;
        border-radius: 0px;
    }
    50% {
        transform: rotate(360deg);
        background-color: lavender;
        border-radius: 100px;
    }
    100% {
        transform: rotate(0deg);
        background-color: dodgerblue;
        border-radius: 0px;
    }
`;

const colorText = keyframes`
  from {
    color: teal;
  }
  to {
    color: tomato;
  }
`;

const Emoji = styled.span`
  transition: 1s;
  font-size: 30px;
`;

const Text = styled.h3`
  color: white;
  transition: 1s;
`;

export const Btn = styled.button`
  animation: ${colorText} 1s linear infinite;
  font-size: 30px;
  padding: 15px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  animation: ${rotaionAnimation} 30s linear infinite;
  cursor: pointer;

  &:hover {
    ${Emoji} {
      display: block;
    }
    ${Text} {
      display: block;
    }
  }

  // # Select elements outside of styled-components
  // # Targeting "span" which is inside of "Box"

  /* span {
    // # States Selector : Setting hover by using "&"
    // # &:hover is same span:hover
    &:hover {
      font-size: 98px;
    }
  } */

  // Pseudo selector: Select another styled-components in side of styled-components.
  // Targeting by using Pseudo Selector
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }

  ${Text} {
    &:hover {
      color: purple;
    }
  }
`;

function Animation() {
  return (
    <Wrapper>
      <Box>
        {/* <span>🍕</span> */}

        {/* Use Pseudo SElectors components */}
        <Emoji>🍕</Emoji>
        <Text>Pseudo</Text>
      </Box>
      <Btn>Click</Btn>
    </Wrapper>
  );
}

export default Animation;
