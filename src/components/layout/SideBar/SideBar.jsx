import { Paper, styled } from '@mui/material';
import useMediaQueryMatches from '../../../hooks/useMediaQueryMatches';

import CommonLogo from '../../commons/CommonLogo';
import Actions from './Actions/Actions';

const StyledPaperContainer = styled(Paper)({
  position: 'relative',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  gap: 100,
  borderRadius: 0,
  height: '100vh',
});

const SideBar = ({ sx }) => {
  const matches = useMediaQueryMatches({ breakpoint: 900 });

  return (
    <StyledPaperContainer sx={sx} elevation={2}>
      <CommonLogo sx={{ p: 2 }} isAlternate={matches} />
      <Actions />
    </StyledPaperContainer>
  );
};

export default SideBar;
