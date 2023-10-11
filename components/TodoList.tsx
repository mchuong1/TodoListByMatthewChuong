import React from 'react';
import {
  Text,
  Center,
  Button,
  ButtonIcon,
  TrashIcon,
  VStack,
} from '@gluestack-ui/themed';
import {useRealm, useQuery} from '../realm/realmProvider';
import Todo from '../realm/todo';

const TodoList = () => {
  const realm = useRealm();
  const todos = useQuery(Todo);
  const deleteTodo = (todo: Todo) => {
    realm.write(() => {
      realm.delete(todo);
    });
  };
  return (
    <Center>
      <VStack space="xl">
        {todos.map((t, i) => (
          <Text key={i}>
            {`${t.description} `}
            <Button size="xs" onPress={() => deleteTodo(t)}>
              <ButtonIcon as={TrashIcon} />
            </Button>
          </Text>
        ))}
      </VStack>
    </Center>
  );
};

export default TodoList;
