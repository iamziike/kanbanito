import { Grid, styled } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';

import useTasksState from '../../../hooks/useTasksState';
import CommonScrollableWrapper from '../../commons/CommonScrollableWrapper';
import TaskBar from './TaskBar';

const StyledBoxContainer = styled(Grid)({
  flexWrap: 'nowrap',
});

const Project = ({ projectID, data }) => {
  const taskTypes = Object.keys(data);
  const { moveTaskToIndex } = useTasksState();

  const handleDragEnd = ({ source, destination, draggableId }) => {
    if (!destination) return;
    const { droppableId: destinationID, index: destinationIndex } = destination;
    const { droppableId: sourceID, index: sourceIndex } = source;

    if (destinationID === sourceID && destinationIndex === sourceIndex) return;

    moveTaskToIndex(
      {
        projectID,
        taskType: sourceID,
        taskID: draggableId,
        taskIndex: sourceIndex,
      },
      {
        projectID,
        taskType: destinationID,
        taskIndex: destinationIndex,
      }
    );
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <CommonScrollableWrapper>
        {(sx) => {
          return (
            <StyledBoxContainer container sx={sx}>
              {taskTypes.map((taskType) => {
                return (
                  <Grid item key={taskType} xs={12} md={6} lg={3}>
                    <TaskBar
                      sx={{ px: 1 }}
                      title={taskType}
                      projectID={projectID}
                      tasks={data[taskType]}
                    />
                  </Grid>
                );
              })}
            </StyledBoxContainer>
          );
        }}
      </CommonScrollableWrapper>
    </DragDropContext>
  );
};

export default Project;
