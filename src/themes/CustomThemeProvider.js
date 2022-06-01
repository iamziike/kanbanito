import { responsiveFontSizes, ThemeProvider } from '@mui/material';

import customTheme from './customTheme';

const CustomThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={responsiveFontSizes(customTheme)}>
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
