import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack, Typography, Snackbar, styled } from '@mui/material';
import MoreVerticalIcon from '@mui/icons-material/MoreVert';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Project from './Project';
import CommonButton from '../../commons/CommonButton/CommonButton';
import CommonMenu from '../../commons/CommonMenu/CommonMenu';
import CommonListItemButton from '../../commons/CommonListItemButton/CommonListItemButton';
import useTasksState from '../../../hooks/useTasksState';
import useTimeAgo from '../../../hooks/useTimeAgo';
import { getRandomChoice, toLegalUpperCase } from '../../../helpers/utils';
import CommonScrollableWrapper from '../../commons/CommonScrollableWrapper/CommonScrollableWrapper';

const StyledProjectTopBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  zIndex: 100,
  padding: '10px 20px',
  boxShadow: `0px 1px 2px 0 ${theme.palette.text.main}`,
}));

const StyledProjectUnknown = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50%',
});

const Projects = ({ sx, className }) => {
  const getTimeAgo = useTimeAgo();
  const { getProject, deleteProject } = useTasksState();
  const { id } = useParams();

  const optionsButtonRef = useRef();
  const [isMenuOptionsOpen, setIsMenuOpeionsOpen] = useState(false);
  const [isDeletionNotifierOpen, setIsDeletionNotifierOpen] = useState(false);

  const project = getProject(id);

  const handleDeletionNotifierVisibilityToggle = () => {
    setIsDeletionNotifierOpen((prev) => !prev);
  };

  const handleMenuOptionsVisibilityToggle = () => {
    setIsMenuOpeionsOpen((prev) => !prev);
  };

  const handleProjectDeletion = () => {
    deleteProject(id);
    handleMenuOptionsVisibilityToggle();
    handleDeletionNotifierVisibilityToggle();
  };

  return (
    <Box px={2} sx={sx} className={className}>
      {project ? (
        <>
          <StyledProjectTopBar>
            <Stack
              sx={{
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'flex-start', sm: 'center' },
              }}
              spacing={1.5}
            >
              <Typography variant='h3' component='h1'>
                🚧 {id}
              </Typography>
              <Typography
                variant='body3'
                sx={{
                  backgroundColor: 'text.light',
                  px: 1,
                  py: 0.2,
                  borderRadius: 10,
                }}
              >
                created {getTimeAgo(project.createdOn)}
              </Typography>
            </Stack>
            <Stack
              sx={{
                justifyContent: { xs: 'center', sm: 'center' },
              }}
            >
              <CommonButton
                ref={optionsButtonRef}
                endIcon={<MoreVerticalIcon />}
                title=''
                sx={{
                  borderRadius: 100,
                }}
                onClick={handleMenuOptionsVisibilityToggle}
              />
            </Stack>
            <CommonMenu
              anchorElement={optionsButtonRef.current}
              isMenuOpen={isMenuOptionsOpen}
              onClose={handleMenuOptionsVisibilityToggle}
              items={
                <CommonListItemButton
                  label={'Delete Project'}
                  icon={<DeleteForeverIcon />}
                  onClick={handleProjectDeletion}
                />
              }
              anchorOrigin={{
                horizontal: 'right',
                vertical: 'bottom',
              }}
            />
          </StyledProjectTopBar>
          <CommonScrollableWrapper>
            {(sx) => {
              return <Project sx={sx} data={project.data} projectID={id} />;
            }}
          </CommonScrollableWrapper>
        </>
      ) : (
        <StyledProjectUnknown>
          <Typography variant='h4' width='70%' textAlign='center'>
            {getRandomChoice([
              'You must follow your own path',
              `I wonder why I did not take care
            of this empty page 🤔🤔🤔!!!`,
              'You shall not pass',
            ])}
          </Typography>
        </StyledProjectUnknown>
      )}
      <Snackbar
        message={`Sucessfully Deleted ${toLegalUpperCase(id)}`}
        autoHideDuration={3000}
        open={isDeletionNotifierOpen}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        onClose={handleDeletionNotifierVisibilityToggle}
        sx={{ backgroundColor: 'secondary.main' }}
      />
    </Box>
  );
};

export default Projects;
