import React from 'react';
import { render } from '@testing-library/react';

import Task, { States } from './task';

describe('Task', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Task
        task={{ id: 1, title: 'Test task', state: States.TASK_ARCHIVED }}
        onPinTask={() => ({})}
        onArchiveTask={() => ({})}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
