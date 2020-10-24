import React from 'react';
import { TaskList, TaskListProps } from './task-list';

export default {
  component: TaskList,
  title: 'TaskList',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: TaskListProps = {};

  return <TaskList />;
};
