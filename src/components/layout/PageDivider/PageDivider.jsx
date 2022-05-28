import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Grid, styled } from '@mui/material';

import SideBar from '../SideBar/SideBar';
import Overview from '../../pages/Overview/Overview';
import Projects from '../../pages/Projects/Projects';
import Settings from '../../pages/Settings/Settings';
import CommonScrollableWrapper from '../../commons/CommonScrollableWrapper/CommonScrollableWrapper';

const StyledGridItem = styled(Grid)({
  height: '100vh',
});

const PageDivider = () => {
  const leftItemStyle = { height: '100%', padding: '10px 0' };
  const rightItemStyle = { ...leftItemStyle, pl: 2, pt: 4 };

  return (
    <BrowserRouter>
      <Grid container>
        <StyledGridItem item xs={2}>
          <SideBar sx={leftItemStyle} />
        </StyledGridItem>
        <StyledGridItem item xs={10}>
          <CommonScrollableWrapper>
            <Routes>
              <Route path='/' element={<Overview sx={rightItemStyle} />} />
              <Route
                path='/projects/:id'
                element={<Projects sx={rightItemStyle} />}
              />
              <Route
                path='/settings'
                element={<Settings sx={rightItemStyle} />}
              />
            </Routes>
          </CommonScrollableWrapper>
        </StyledGridItem>
      </Grid>
    </BrowserRouter>
  );
};

export default PageDivider;
