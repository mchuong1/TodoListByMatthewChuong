import React from 'react';
import withTodos from './HOC/withTodos';
import {Progress, ProgressFilledTrack} from '@gluestack-ui/themed';
import _ from 'lodash';

const TodoProgress = (props: any) => {
  const {todos} = props;

  const totalDone = () => {
    const done = _.filter(todos, t => t.done).length;
    return _.floor(_.divide(done, todos.length) * 100);
  };

  totalDone();

  return (
    <Progress size="md" value={totalDone()}>
      <ProgressFilledTrack />
    </Progress>
  );
};

export default withTodos(TodoProgress);
