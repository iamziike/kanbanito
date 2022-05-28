import { Stack, styled } from '@mui/material';

import { ReactComponent as LogoSVG } from '../../../assets/logo.svg';
import { ReactComponent as ShapeLogoSVG } from '../../../assets/icon.svg';

const StyledLogoWrapper = styled(Stack, {
  shouldForwardProp(prop) {
    return !['height', 'width'].includes(prop);
  },
})(({ height, width }) => {
  return {
    '& > svg': {
      width,
      height,
    },
  };
});

const CommonLogo = ({ sx, height = '100%', width = '100%', isAlternate }) => {
  return (
    <StyledLogoWrapper sx={sx} height={isAlternate ? 50 : height} width={width}>
      {isAlternate ? <ShapeLogoSVG height={50} /> : <LogoSVG />}
    </StyledLogoWrapper>
  );
};

export default CommonLogo;
