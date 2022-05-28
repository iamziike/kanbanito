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

const StyledProjectUnknown = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  height: '50%',
});

const Projects = ({ sx }) => {
  const getTimeAgo = useTimeAgo();
  const { getProject, deleteProject } = useTasksState();
  const { id } = useParams();

  const optionsButtonRef = useRef();
  const [isMenuOptionsOpen, setIsMenuOpeionsOpen] = useState(false);
  const [isDeletionNotifierOpen, setIsDeletionNotifierOpen] = useState(false);

  const project = getProject(id);

  const boxTopHeightPercentage = 10;

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
    <Box sx={{ ...sx, pt: 4, pl: 5 }}>
      {project ? (
        <>
          <Stack
            direction='row'
            alignItems='flex-start'
            justifyContent='space-between'
            pr={5}
            height={boxTopHeightPercentage + '%'}
          >
            <Stack direction='row' alignItems='center' spacing={1}>
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
            <Stack>
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
          </Stack>
          <Project
            sx={{ pr: 5, height: 100 - boxTopHeightPercentage + '%' }}
            data={project.data}
            projectID={id}
          />
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
