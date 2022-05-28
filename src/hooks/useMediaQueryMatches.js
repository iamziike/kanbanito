import { useMediaQuery, useTheme } from '@mui/material';

const useMediaQueryMatches = ({ mode = 'down', breakpoint }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints[mode](breakpoint));

  return matches;
};

export default useMediaQueryMatches;
