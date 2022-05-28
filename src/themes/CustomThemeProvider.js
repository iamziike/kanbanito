import { ThemeProvider } from '@mui/material';

import customTheme from './customTheme';

const CustomThemeProvider = ({ children }) => {
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
