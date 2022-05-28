import { Paper, styled } from '@mui/material';
import useMediaQueryMatches from '../../../hooks/useMediaQueryMatches';

import CommonLogo from '../../commons/CommonLogo/CommonLogo';
import Actions from './Actions/Actions';

const StyledPaperContainer = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  gap: 100,
  justifyContent: 'space-between',
  borderRadius: 0,
});

const SideBar = ({ sx }) => {
  const matches = useMediaQueryMatches({ breakpoint: 900 });

  return (
    <StyledPaperContainer sx={sx} elevation={2}>
      <CommonLogo sx={{ px: 2 }} isAlternate={matches} />
      <Actions />
    </StyledPaperContainer>
  );
};

export default SideBar;
