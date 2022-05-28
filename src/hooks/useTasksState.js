import { useSelector, useDispatch } from 'react-redux';

import {
  createAProject,
  createATask,
  deleteATask,
  deleteAProject,
} from '../store/slices/tasksSlice';

const useTasksState = () => {
  const tasksState = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const getAllProjects = () => tasksState;

  const getProjectsID = () => Object.keys(tasksState);

  const getProject = (projectID) => tasksState[projectID];

  const createProject = (projectID) => dispatch(createAProject(projectID));

  const createTask = (task) => dispatch(createATask(task));

  const deleteTask = (taskData) => dispatch(deleteATask(taskData));

  const deleteProject = (projectID) => dispatch(deleteAProject(projectID));

  return {
    getAllProjects,
    getProjectsID,
    getProject,
    createProject,
    createTask,
    deleteTask,
    deleteProject,
  };
};

export default useTasksState;
