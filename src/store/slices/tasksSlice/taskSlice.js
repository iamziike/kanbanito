import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

import { DONE, IN_PROGRESS, IN_REVIEW, TODO } from '../../../helpers/constants';

import initialState from './initialState';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createAProject(state, { payload }) {
      state[payload] = {
        data: {
          [TODO]: [],
          [IN_PROGRESS]: [],
          [IN_REVIEW]: [],
          [DONE]: [],
        },
        createdOn: new Date().getTime(),
      };
    },
    createATask(state, { payload }) {
      const { projectID, taskType, data } = payload;
      if (!state[projectID]) return state;

      const { by, title, detail, comments, tags, priority, isSpecial } = data;

      const prevTasks = state[projectID].data[taskType];

      const task = {
        id: uuid(),
        title,
        by,
        createdOn: new Date().getTime(),
        detail,
        comments,
        tags,
        priority,
        isSpecial,
      };
      state[projectID].data[taskType] = [...prevTasks, task];
    },
    deleteATask(state, { payload }) {
      const { projectID, taskType, taskID } = payload;
      if (!state[projectID]) return state;

      const prevTasks = state[projectID].data[taskType].filter(
        (prevTask) => prevTask.id !== taskID
      );

      state[projectID].data[taskType] = prevTasks;
    },
    deleteAProject(state, { payload }) {
      if (!state[payload]) return state;

      delete state[payload];
    },
    updateTask() {},
    updateProject() {},
  },
});

const tasksReducer = tasksSlice.reducer;
export default tasksReducer;

export const { createAProject, createATask, deleteATask, deleteAProject } =
  tasksSlice.actions;
