// # Add "keyframes" for animation
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
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

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  animation: ${rotaionAnimation} 30s linear infinite;
  cursor: pointer;

  // # Select elements outside of styled-components
  // # Targeting "span" which is inside of "Box"
  span {
    font-size: 30px;

    // # Pseudo Selector : Setting hover by using "&"
    // # &:hover is same span:hover
    &:hover {
      font-size: 40px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function Animation() {
  return (
    <Wrapper>
      <Box>
        <span>🍕</span>
      </Box>
    </Wrapper>
  );
}

export default Animation;
