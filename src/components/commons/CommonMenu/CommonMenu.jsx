import { Menu } from '@mui/material';

const CommonMenu = ({
  anchorElement,
  isMenuOpen,
  onClose,
  items,
  anchorPosition,
  anchorOrigin,
}) => {
  return (
    <Menu
      anchorPosition={anchorPosition}
      anchorOrigin={anchorOrigin}
      anchorEl={anchorElement}
      open={isMenuOpen}
      onClose={onClose}
    >
      {items}
    </Menu>
  );
};

export default CommonMenu;
