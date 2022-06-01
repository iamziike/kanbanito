import { Stack, Box, Typography, styled } from '@mui/material';

import { ReactComponent as HeroImage } from '../../../assets/hero_image.svg';

const StyledHeroTextWrapper = styled(Box)(({ theme }) => ({
  '& > *': {
    background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
    backgroundClip: 'text',
    '-webkitBackgroundClip': 'text',
    textShadow: `1px 1px 1px ${theme.palette.text.dark}, 3px 3px 3px ${theme.palette.text.dark}`,
  },
}));

const Overview = () => {
  return (
    <Stack
      p={5}
      spacing={2}
      textAlign='center'
      alignItems='center'
      sx={{
        flexDirection: {
          xs: 'column',
          lg: 'row',
        },
      }}
    >
      <StyledHeroTextWrapper
        sx={{
          textAlign: {
            xs: 'center',
            lg: 'left',
          },
        }}
      >
        <Typography color='primary.main' variant='h1'>
          Built with React
        </Typography>
        <Typography color='primary.main' variant='h2'>
          + Material UI v5
        </Typography>
      </StyledHeroTextWrapper>
      <Box
        sx={{
          '& > *': {
            width: {
              xs: '100%',
              lg: 'initial',
            },
          },
        }}
      >
        <HeroImage />
      </Box>
    </Stack>
  );
};

export default Overview;
