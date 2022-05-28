import { forwardRef } from 'react';
import { Button, Typography } from '@mui/material';

const CommonButton = forwardRef(
  (
    {
      sx = {},
      className = '',
      variant = 'contained',
      title = 'Click Me',
      startIcon,
      endIcon,
      color = 'secondary.main',
      backgroundColor = 'primary.main',
      background,
      width = 'max-content',
      onClick = () => {},
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        className={className}
        variant={variant}
        sx={{
          fontSize: 10,
          py: 1,
          px: 1.5,
          color,
          backgroundColor,
          backgroundImage: background,
          border: 'solid 1px',
          borderColor: backgroundColor,
          borderRadius: 0,
          width,
          transition: 'color 0.3s, background 0.5s',
          boxShadow: '2px 2px 1px #440b64',
          '&:hover': {
            color: backgroundColor,
            background: 'transparent',
            boxShadow: '2px 2px 1px #440b64',
          },
          ...sx,
        }}
        onClick={onClick}
      >
        {startIcon}
        <Typography variant='span' mx={0.2} fontSize={14}>
          {title}
        </Typography>
        {endIcon}
      </Button>
    );
  }
);

CommonButton.displayName = 'CommonButton';

export default CommonButton;
