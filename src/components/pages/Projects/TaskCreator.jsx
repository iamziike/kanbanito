import { useState } from 'react';
import { TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';

import CommonDialogBox from '../../commons/CommonDialogBox';
import useTasksState from '../../../hooks/useTasksState';
import { toLegalUpperCase } from '../../../helpers/utils';
import { HIGH, LOW, MEDIUM } from '../../../helpers/constants';

const TaskCreator = ({ onCancel, onDone, isOpen, taskType, projectID }) => {
  const { createTask } = useTasksState();

  const [taskPriority, setTaskPriority] = useState(LOW);
  const [taskName, setTaskName] = useState('');
  const [taskCreator, setTaskCreator] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [taskHashtags, setTaskHashtags] = useState('');

  const sanitizedHashTags = (tagsStrings) =>
    tagsStrings
      .split(' ')
      .filter((tag) => tag)
      .map((tag) => `#${tag.toUpperCase()}`);

  const handleDialogBoxSubmission = () => {
    if (!(taskPriority && taskName && taskCreator && taskDesc && taskHashtags))
      return;

    const task = {
      taskType,
      projectID,
      data: {
        title: taskName,
        by: taskCreator,
        detail: taskDesc,
        comments: [],
        tags: sanitizedHashTags(taskHashtags),
        priority: taskPriority,
        isSpecial: false,
      },
    };

    createTask(task);
    onDone();
  };

  return (
    <CommonDialogBox
      sx={{ width: '40vw' }}
      isOpen={isOpen}
      title={`Create a new ${toLegalUpperCase(taskType)} task`}
      buttonText='Create New Project'
      onCancel={onCancel}
      onDone={handleDialogBoxSubmission}
    >
      <TextField
        type='text'
        label='New Task Name'
        margin='normal'
        value={taskName}
        required
        onChange={({ target }) => setTaskName(target.value)}
      />
      <TextField
        type='text'
        label='Created by'
        placeholder='Please no weird names'
        margin='normal'
        value={taskCreator}
        required
        onChange={({ target }) => setTaskCreator(target.value)}
      />
      <TextField
        type='text'
        label='Task Tags'
        placeholder='Seperate with a space eg) UIDESIGN GITHUB anime'
        margin='normal'
        value={taskHashtags}
        required
        onChange={({ target }) => setTaskHashtags(target.value)}
      />
      <TextField
        type='text'
        label='Task Description'
        multiline
        margin='normal'
        value={taskDesc}
        required
        onChange={({ target }) => setTaskDesc(target.value)}
      />
      <ToggleButtonGroup
        sx={{ mx: 'auto' }}
        value={taskPriority}
        required
        onChange={({ target }) => setTaskPriority(target.value)}
        exclusive
      >
        <ToggleButton value={LOW}>{LOW} PRIORITY</ToggleButton>
        <ToggleButton value={MEDIUM}>{MEDIUM} PRIORITY</ToggleButton>
        <ToggleButton value={HIGH}>{HIGH} PRIORITY</ToggleButton>
      </ToggleButtonGroup>
    </CommonDialogBox>
  );
};

export default TaskCreator;
