import { Grid, styled } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';

import useTasksState from '../../../hooks/useTasksState';
import TaskBar from './TaskBar';

const StyledBoxContainer = styled(Grid)({
  flexWrap: 'nowrap',
});

const Project = ({ sx, projectID, data }) => {
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
      <StyledBoxContainer container sx={sx}>
        {taskTypes.map((taskType) => {
          return (
            <Grid key={taskType} mx={1} item xs={12} md={6} lg={4} xl={3}>
              <TaskBar
                title={taskType}
                projectID={projectID}
                tasks={data[taskType]}
              />
            </Grid>
          );
        })}
      </StyledBoxContainer>
    </DragDropContext>
  );
};

export default Project;
