import "styled-components";

// interface IPalette {
//   gray: {
//     darker: string;
//     normal: string;
//     lighter: string;
//   };
//   red: {
//     darker: string;
//     lighter: string;
//   };
// }

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string;
        white: string;
      };
      gray: {
        darker: string;
        normal: string;
        lighter: string;
      };
      red: {
        darker: string;
        lighter: string;
      };
    };
  }
}