import React from 'react';
import _ from 'lodash';
import {useQuery, useRealm} from '../../realm/realmProvider';
import Todo from '../../realm/todo';

const withTodos = (WrappedComponent: React.FC) => {
  return (props: any) => {
    const realm = useRealm();
    const todos = useQuery(Todo);

    const addTodo = (description: string) => {
      realm.write(() => {
        realm.create('Todo', {
          _id: new Realm.BSON.ObjectId(),
          description: description,
          done: false,
        });
      });
    };

    const updateTodoDescription = (todo: Todo, description: string) => {
      realm.write(() => {
        _.set(todo, 'description', description);
      });
    };

    const updateTodoDone = (todo: Todo, bool: boolean) => {
      realm.write(() => {
        _.set(todo, 'done', !bool);
      });
    };

    const deleteTodo = (todo: Todo) => {
      realm.write(() => {
        realm.delete(todo);
      });
    };

    const resetTodos = () => {
      todos.forEach(todo => {
        realm.write(() => {
          _.set(todo, 'done', false);
        });
      });
    };

    return (
      <WrappedComponent
        todos={todos}
        addTodo={addTodo}
        updateTodoDone={updateTodoDone}
        updateTodoDescription={updateTodoDescription}
        deleteTodo={deleteTodo}
        resetTodos={resetTodos}
        {...props}
      />
    );
  };
};

export default withTodos;
