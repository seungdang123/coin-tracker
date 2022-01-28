import styled from "styled-components";

interface ISwitch {
  changeTheme: (event: React.MouseEvent) => void;
  isDark: Boolean;
}

function Switch({ changeTheme, isDark }: ISwitch) {
  return (
    <SwitchWrapper onClick={changeTheme}>{isDark ? "☼" : "☽"}</SwitchWrapper>
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
