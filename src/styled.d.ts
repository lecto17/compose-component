import "styled-components";

import {
  AlertTypes,
  FontSizeTypes,
  FontWeightTypes,
  PrimaryTypes,
  SecondaryTypes,
} from "./theme/cnTheme";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    primary: PrimaryTypes;
    secondary: SecondaryTypes;
    alert: AlertTypes;
    fontSize: FontSizeTypes;
    fontWeight: FontWeightTypes;
  }
}
