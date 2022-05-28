import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

import CommonButton from '../CommonButton/CommonButton';

const CommonDialogBox = ({
  sx = {},
  isOpen,
  title,
  children,
  buttonText,
  onDone,
  onCancel,
}) => {
  return (
    <Dialog open={isOpen} onClose={onCancel}>
      <DialogTitle
        textAlign='center'
        bgcolor='primary.main'
        color='secondary'
        mb={2}
      >
        {title}
      </DialogTitle>
      <DialogContent sx={{ ...sx, display: 'flex', flexDirection: 'column' }}>
        {children}
      </DialogContent>
      <DialogActions sx={{ mx: 'auto' }}>
        <CommonButton onClick={onDone}>{buttonText}</CommonButton>
      </DialogActions>
    </Dialog>
  );
};

export default CommonDialogBox;
