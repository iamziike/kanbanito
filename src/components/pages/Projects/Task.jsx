import { useState, useRef } from 'react';
import {
  Box,
  Stack,
  Typography,
  styled,
  Chip,
  Badge,
  Tooltip,
  IconButton,
} from '@mui/material';
import Mail from '@mui/icons-material/Mail';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import useTimeAgo from '../../../hooks/useTimeAgo';
import useTasksState from '../../../hooks/useTasksState';
import CommonScrollableWrapper from '../../commons/CommonScrollableWrapper/CommonScrollableWrapper';
import CommonMenu from '../../commons/CommonMenu/CommonMenu';
import CommonListItemButton from '../../commons/CommonListItemButton/CommonListItemButton';
import { HIGH, MEDIUM } from '../../../helpers/constants';

const StyledPriorityChip = styled(Chip, {
  shouldForwardProp(prop) {
    return prop !== 'isPriorityVisible';
  },
})(({ type, isPriorityVisible }) => {
  let backgroundColor = 'hsl(197 72% 69%)';
  let color = 'white';

  if (type === MEDIUM) backgroundColor = 'hsl(39 100% 50%)';
  else if (type === HIGH) backgroundColor = 'hsl(0 80% 50%)';

  return {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: 'max-content',
    height: 'max-content',
    fontWeight: 600,
    backgroundColor,
    color,
    visibility: isPriorityVisible ? 'initial' : 'hidden',

    '.MuiSvgIcon-root': {
      postion: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: 0,
      transition: 'width 0.5s',
    },

    '&:hover': { '.MuiSvgIcon-root': { width: 22 } },
  };
});

const Task = ({ sx, projectID, taskType, data }) => {
  const [isPriorityVisible, setIsPriorityVisible] = useState(true);
  const [isMenuShown, setIsMenuShown] = useState(false);
  const menuVisibilityControlRef = useRef();
  const { deleteTask } = useTasksState();
  const getTimeAgo = useTimeAgo();

  const handlePriorityVisibilityToggle = () => {
    setIsPriorityVisible((prev) => !prev);
  };

  const handleMenuVisibiltyToggle = () => {
    setIsMenuShown((prev) => !prev);
  };

  const handleTaskDeletion = () => {
    deleteTask({
      projectID,
      taskType,
      taskID: data.id,
    });
  };

  const getFilteredMenuOptions = (items) =>
    items.filter((option) =>
      option.label === 'Show Priority' && isPriorityVisible === true
        ? false
        : true
    );

  const taskMenuOptions = getFilteredMenuOptions([
    {
      label: 'Delete Task',
      icon: <DeleteForeverIcon />,
      onClick: handleTaskDeletion,
    },
    {
      label: 'Show Priority',
      icon: <VisibilityIcon />,
      onClick: handlePriorityVisibilityToggle,
    },
  ]).map(({ label, icon, onClick }) => (
    <CommonListItemButton
      key={label}
      label={label}
      icon={icon}
      onClick={onClick}
    />
  ));

  return (
    <Box
      pt={2}
      pb={1}
      sx={{
        '&::after': {
          content: '""',
          display: 'block',
          width: '100%',
          height: 1,
          opacity: 0.4,
          paddingTop: 2,
          borderBottom: 'solid 1px currentColor',
        },
        '& *': {
          wordWrap: 'break-word',
        },
        ...sx,
      }}
    >
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <StyledPriorityChip
          label={data.priority}
          type={data.priority}
          isPriorityVisible={isPriorityVisible}
          onDelete={handlePriorityVisibilityToggle}
          deleteIcon={
            <Tooltip placement='right' title='Hide' arrow>
              <VisibilityOffIcon />
            </Tooltip>
          }
        />
        <IconButton
          ref={menuVisibilityControlRef}
          onClick={handleMenuVisibiltyToggle}
        >
          <MoreHorizIcon />
        </IconButton>
        <CommonMenu
          anchorElement={menuVisibilityControlRef.current}
          isMenuOpen={isMenuShown}
          onClose={handleMenuVisibiltyToggle}
          items={taskMenuOptions}
        />
      </Stack>
      <Typography variant='subtitle2' sx={{ whiteSpace: 'nowrap' }}>
        <CommonScrollableWrapper>{data.title}</CommonScrollableWrapper>
      </Typography>
      <CommonScrollableWrapper>
        <Typography variant='body2'>created by {data.by}</Typography>
      </CommonScrollableWrapper>
      <Typography variant='body3'>{getTimeAgo(data.createdOn)}</Typography>
      <Typography variant='body2' py={2}>
        {data.detail}
      </Typography>
      <Stack direction='row' spacing={4}>
        <CommonScrollableWrapper>
          <Stack direction='row' spacing={1}>
            {data.tags.map((tag) => (
              <Chip
                label={tag}
                key={tag + Math.random()}
                sx={{ whiteSpace: 'nowrap', height: 'max-content', py: 0.3 }}
                variant='body2'
              />
            ))}
          </Stack>
        </CommonScrollableWrapper>
        <Badge
          badgeContent={data.comments.length || '0'}
          anchorOrigin={{
            horizontal: 'left',
            vertical: 'top',
          }}
        >
          <Mail />
        </Badge>
      </Stack>
    </Box>
  );
};

export default Task;
