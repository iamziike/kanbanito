import { styled } from '@mui/material';

const CommonScrollableWrapperSX = {
  overflowY: 'scroll',
  msOverflowStyle: 'none', //IE and Edge
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
};

const StyledScrollableWrapper = styled('div')(({ height }) => ({
  ...CommonScrollableWrapperSX,
  '& > *': {
    height: height,
  },
}));

const CommonScrollableWrapper = ({
  children,
  sx,
  height = '100%',
  width = '100%',
}) => {
  if (typeof children === 'function')
    return children(CommonScrollableWrapperSX);

  return (
    <StyledScrollableWrapper sx={sx} height={height} width={width}>
      {children}
    </StyledScrollableWrapper>
  );
};

export default CommonScrollableWrapper;
