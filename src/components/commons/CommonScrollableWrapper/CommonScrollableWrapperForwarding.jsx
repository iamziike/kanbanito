import { Box, styled } from '@mui/material';

const StyledScrollableWrapper = styled(Box)({
  overflowY: 'scroll',
  msOverflowStyle: 'none', //IE and Edge
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
  '& > *': {
    height: '100%',
  },
});

const CommonScrollableWrapper = ({
  sx,
  children,
  height = '100%',
  width = '100%',
}) => {
  return (
    <StyledScrollableWrapper sx={sx} height={height} width={width}>
      {children}
    </StyledScrollableWrapper>
  );
};

export default CommonScrollableWrapper;
