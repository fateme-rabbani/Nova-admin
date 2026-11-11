import "styled-components";
import type { lightTheme } from "../Shared/Theme/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof lightTheme.colors;
  }
}
