import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Tooltip,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

import CommonScrollableWrapper from '../CommonScrollableWrapper/CommonScrollableWrapper';

const StyledExploreMore = styled(
  ExpandMore,
  {
    shouldForwardProp(prop) {
      return prop !== 'isClick';
    },
  },
  {
    shouldForwardProp(prop) {
      return prop !== 'isClicked';
    },
  }
)(({ isClick }) => ({
  fontSize: 20,
  transform: `rotate(${isClick ? '180deg' : '0deg'})`,
  transition: 'transform 0.6s',
}));

const CommonListItemButton = ({
  label,
  icon,
  isIncludesExpandMore,
  isClick,
  disableGutters,
  disableLeftIconPadding,
  dense,
  onClick,
  isLabelHidden,
  sx,
  iconSx,
  iconInnerChildSx,
  textSx,
  exploreMoreIconSx,
}) => {
  const listItemButton = (
    <ListItemButton
      sx={sx}
      disableGutters={disableGutters}
      dense={dense}
      onClick={onClick}
    >
      {icon && (
        <ListItemIcon
          sx={{
            minWidth: disableLeftIconPadding ? 0 : 40,
            ...iconSx,
            '.MuiSvgIcon-root': iconInnerChildSx,
          }}
        >
          {icon}
        </ListItemIcon>
      )}
      {label && !isLabelHidden && (
        <CommonScrollableWrapper>
          {(sx) => {
            return (
              <ListItemText sx={{ ...sx, ...textSx }}>{label}</ListItemText>
            );
          }}
        </CommonScrollableWrapper>
      )}
      {isIncludesExpandMore && (
        <StyledExploreMore sx={exploreMoreIconSx} isClick={isClick} />
      )}
    </ListItemButton>
  );

  return isLabelHidden ? (
    <Tooltip title={label} arrow placement='top' color='red'>
      {listItemButton}
    </Tooltip>
  ) : (
    listItemButton
  );
};

export default CommonListItemButton;
