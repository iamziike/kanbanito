import { Box, Divider, Typography, styled, useTheme } from '@mui/material';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';

import Task from './Task';
import CommonButton from '../../commons/CommonButton/CommonButton';
import { toLegalUpperCase } from '../../../helpers/utils';
import CommonScrollableWrapper from '../../commons/CommonScrollableWrapper/CommonScrollableWrapper';
import TaskCreator from './TaskCreator';
import { useState } from 'react';

const StyledCommonButton = styled(CommonButton)({
  width: '100%',
  marginTop: 15,
  marginBottom: 15,
  borderRadius: 5,
  animation: 'movingBg 0.5s infinite',
  '@keyframes movingBg': {
    0: {
      color: 'red',
    },
    100: {
      color: 'blue',
    },
  },
});

const TaskBar = ({ sx, projectID, title, tasks }) => {
  const theme = useTheme();
  const [isTaskCreatorVisible, setIsTaskCreatorVisible] = useState(false);

  const handleTaskCreatorVisibility = () => {
    setIsTaskCreatorVisible((prev) => !prev);
  };

  return (
    <Box sx={sx}>
      <Box>
        <Typography variant='subtitle1'>{toLegalUpperCase(title)}</Typography>
        <Typography
          component='p'
          variant='body3'
          sx={{
            backgroundColor: 'text.light',
            px: 1,
            py: 0.2,
            borderRadius: 10,
            width: 'max-content',
          }}
        >
          {tasks.length} {tasks.length > 1 ? 'tasks' : 'task'} available
        </Typography>
        <StyledCommonButton
          title='add'
          startIcon={<AddCircleSharpIcon />}
          background={`linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`}
          onClick={handleTaskCreatorVisibility}
        />
        <Divider />
      </Box>
      <CommonScrollableWrapper>
        <Box>
          {tasks.map((task) => (
            <Task
              key={task.id}
              projectID={projectID}
              taskType={title}
              data={task}
            />
          ))}
        </Box>
      </CommonScrollableWrapper>
      {isTaskCreatorVisible && (
        <TaskCreator
          isOpen={isTaskCreatorVisible}
          taskType={title}
          projectID={projectID}
          onCancel={handleTaskCreatorVisibility}
          onDone={handleTaskCreatorVisibility}
        />
      )}
    </Box>
  );
};

export default TaskBar;
