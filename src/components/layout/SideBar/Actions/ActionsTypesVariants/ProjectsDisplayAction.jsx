import { useEffect, useState } from 'react';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import AddBoxOutlined from '@mui/icons-material/AddBoxOutlined';
import { TextField } from '@mui/material';

import useTasksState from '../../../../../hooks/useTasksState';
import SubMenuDisplayAction from '../ActionsTypes/SubMenuDisplayAction';
import CommonDialogBox from '../../../../commons/CommonDialogBox/CommonDialogBox';
import { NAVIGATION } from '../../../../../helpers/constants';

const ProjectsDisplayAction = (props) => {
  const { getProjectsID, createProject } = useTasksState();
  const [projectID, setProjectID] = useState('');
  const [isProjectInputFieldVisible, setIsProjectInputFieldVisible] =
    useState(false);

  const handleProjectInputFieldVisibilityToggle = () => {
    setIsProjectInputFieldVisible((prev) => !prev);
  };

  const handleProjectInputFieldChange = ({ target }) => {
    setProjectID(target.value);
  };

  const handleProjectInputFieldSubmit = () => {
    handleProjectInputFieldVisibilityToggle();
    createProject(projectID);
    setProjectID('');
  };

  const subMenuItems = getProjectsID().map((id) => ({
    label: id,
    icon: <InsertDriveFileOutlinedIcon />,
    to: `/projects/${id}`,
    type: NAVIGATION,
  }));

  useEffect(() => {}, []);

  return (
    <>
      <SubMenuDisplayAction
        {...{
          ...props,
          subMenuItems: [
            ...subMenuItems,
            {
              label: 'Create Project',
              icon: <AddBoxOutlined />,
              onClick: handleProjectInputFieldVisibilityToggle,
            },
          ],
        }}
      />

      {isProjectInputFieldVisible && (
        <CommonDialogBox
          isOpen={isProjectInputFieldVisible}
          onCancel={handleProjectInputFieldVisibilityToggle}
          onDone={handleProjectInputFieldSubmit}
          title='Enter Your New Project?'
          buttonText='Create New Project'
        >
          <TextField
            sx={{ '& > *': { fontSize: '25px !important' } }}
            type='text'
            placeholder='Name????'
            fullWidth
            value={projectID}
            onChange={handleProjectInputFieldChange}
            InputProps={{
              maxLength: 10,
            }}
          />
        </CommonDialogBox>
      )}
    </>
  );
};

export default ProjectsDisplayAction;
