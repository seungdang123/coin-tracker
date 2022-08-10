import "styled-components";

// 기존의 DefaultTheme는 비어있는 상태이므로 아래와 같이 확장시켜준다.
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    boxColor: string;
    borderColor: string;
    bulbColor: string;
    tapColor: string;
  }
}
