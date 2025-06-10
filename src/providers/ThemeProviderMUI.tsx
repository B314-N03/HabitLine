// theme.ts
import { createTheme } from '@mui/material/styles';

export const fontFamily = '"Roboto","Helvetica","Arial",sans-serif'

const theme = createTheme({
  typography: {
    fontFamily: fontFamily,
  },
});

export default theme;
