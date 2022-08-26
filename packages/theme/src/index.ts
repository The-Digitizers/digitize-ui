import { extendTheme } from '@mui/joy/styles';
import { palette } from "./palette";

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: palette
    }
  }
});