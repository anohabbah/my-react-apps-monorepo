import React from 'react';
import Task, { States, TaskProps } from './task';

export default {
  component: Task,
  title: 'Task'
};

const Template = (args: TaskProps) => <Task {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  task: {
    id: 1,
    title: 'Task story',
    state: States.TASK_INBOX,
    updatedAt: new Date(2018, 0, 1, 9, 0),
  }
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Primary.args.task,
    state: States.TASK_PINNED,
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Primary.args.task,
    state: States.TASK_ARCHIVED,
  },
};
