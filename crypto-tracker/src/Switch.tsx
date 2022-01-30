import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "./routes/atom";

function Switch() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <SwitchWrapper onClick={toggleDarkAtom}>{isDark ? "☼" : "☽"}</SwitchWrapper>
  );
}

export default Switch;

export const SwitchWrapper = styled.button`
  padding: 8px;
  cursor: pointer;
  margin-top: 10px;
  position: fixed;
  top: 0%;
  right: 3%;
  width: 55px;
  height: 30px;

  background-color: ${(props) => props.theme.boxColor};
  color: ${(props) => props.theme.textColor};
  font-size: 13px;
  font-weight: 400;

  padding: 5px 10px;
  border-radius: 8px;
  border: none;
`;
