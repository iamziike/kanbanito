import { Grid, styled } from '@mui/material';
import useMediaQueryMatches from '../../../hooks/useMediaQueryMatches';

import TaskBar from './TaskBar';

const StyledBoxContainer = styled(Grid)({
  flexWrap: 'nowrap',
});

const Project = ({ sx, projectID, data }) => {
  const taskTypes = Object.keys(data);
  const matches = useMediaQueryMatches({ breakpoint: 1250 });

  let gridColumnCount = 3;

  if (matches) gridColumnCount = 4;

  return (
    <StyledBoxContainer sx={sx} container spacing={3}>
      {taskTypes.map((taskType) => {
        return (
          <Grid item xs={gridColumnCount} key={taskType} height='100%'>
            <TaskBar
              sx={{ height: '100%' }}
              title={taskType}
              projectID={projectID}
              tasks={data[taskType]}
            />
          </Grid>
        );
      })}
    </StyledBoxContainer>
  );
};

export default Project;
