import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Grid, styled } from '@mui/material';

import SideBar from '../SideBar/SideBar';
import Overview from '../../pages/Overview/Overview';
import Projects from '../../pages/Projects/Projects';
import CommonScrollableWrapper from '../../commons/CommonScrollableWrapper/CommonScrollableWrapper';

const StyledGridItem = styled(Grid)({
  height: '100vh',
});

const PageDivider = () => {
  return (
    <BrowserRouter>
      <Grid container>
        <StyledGridItem item xs={2}>
          <SideBar />
        </StyledGridItem>
        <CommonScrollableWrapper>
          {(sx) => {
            return (
              <StyledGridItem item xs={10} sx={sx}>
                <Routes>
                  <Route path='/' element={<Overview />} />
                  <Route path='/projects/:id' element={<Projects />} />
                </Routes>
              </StyledGridItem>
            );
          }}
        </CommonScrollableWrapper>
      </Grid>
    </BrowserRouter>
  );
};

export default PageDivider;
