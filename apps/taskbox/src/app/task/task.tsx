import React from 'react';

import './task.scss';


export enum States {
  TASK_INBOX= 'TASK_INBOX',
  TASK_PINNED= 'TASK_PINNED',
  TASK_ARCHIVED= 'TASK_ARCHIVED',
}

export interface TaskModel {
  id: number;
  title: string;
  state: States;
  date: Date;
}

export interface TaskProps {
  task: TaskModel,
  onArchiveTask: (taskId: number) => void;
  onPinTask: (taskId: number) => void;
}

export const Task = (props: TaskProps) => {
  return (
    <div className={`list-item ${props.task.state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={props.task.state === States.TASK_ARCHIVED}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => props.onArchiveTask(props.task.id)} />
      </label>
      <div className="title">
        <input type="text" value={props.task.title} readOnly={true} placeholder="Input title" />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {props.task.state !== States.TASK_ARCHIVED && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => props.onPinTask(props.task.id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Task;
