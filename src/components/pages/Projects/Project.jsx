import { Grid, styled } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';

import useTasksState from '../../../hooks/useTasksState';
import useMediaQueryMatches from '../../../hooks/useMediaQueryMatches';

import TaskBar from './TaskBar';

const StyledBoxContainer = styled(Grid)({
  flexWrap: 'nowrap',
});

const Project = ({ sx, projectID, data }) => {
  const taskTypes = Object.keys(data);
  const matches = useMediaQueryMatches({ breakpoint: 1250 });

  const { moveTaskToIndex } = useTasksState();

  let gridColumnCount = 3;

  if (matches) gridColumnCount = 4;

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
      <StyledBoxContainer sx={sx} container spacing={1}>
        {taskTypes.map((taskType) => {
          return (
            <Grid key={taskType} item xs={gridColumnCount} height='100%'>
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
