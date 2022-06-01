import { useEffect } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';

import {
  createAProject,
  createATask,
  deleteATask,
  deleteAProject,
  moveATaskToIndex,
} from '../store/slices/tasksSlice';

const useTasksState = (listener = null, listenerDependencies = []) => {
  const tasksState = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const store = useStore();

  useEffect(() => {
    if (!listener) return;
    const unsubscribe = store.subscribe(() => {});
    return unsubscribe;
  }, listenerDependencies);

  const getAllProjects = () => tasksState;

  const getProjectsID = () => Object.keys(tasksState);

  const getProject = (projectID) => tasksState[projectID];

  const createProject = (projectID) => dispatch(createAProject(projectID));

  const createTask = (task) => dispatch(createATask(task));

  const deleteTask = (taskData) => dispatch(deleteATask(taskData));

  const deleteProject = (projectID) => dispatch(deleteAProject(projectID));

  const moveTaskToIndex = (source, destination) =>
    dispatch(moveATaskToIndex({ source, destination }));

  // const deleteProject = (projectID) => dispatch(deleteAProject(projectID));

  return {
    getAllProjects,
    getProjectsID,
    getProject,
    createProject,
    createTask,
    deleteTask,
    deleteProject,
    moveTaskToIndex,
  };
};

export default useTasksState;
