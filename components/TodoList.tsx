import React, {useState} from 'react';
import _ from 'lodash';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {
  Text,
  Center,
  Button,
  ButtonIcon,
  TrashIcon,
  VStack,
  EditIcon,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  Heading,
  Input,
  InputField,
  ButtonText,
} from '@gluestack-ui/themed';
import {useRealm, useQuery} from '../realm/realmProvider';
import Todo from '../realm/todo';

const TodoList = () => {
  const realm = useRealm();
  const todos = useQuery(Todo);
  const [showForm, setShowForm] = useState(false);
  const [activeTodo, setActiveTodo] = useState({});
  const [field, setField] = useState('');
  const deleteTodo = (todo: Todo) => {
    realm.write(() => {
      realm.delete(todo);
    });
  };
  const updateTodo = () => {
    realm.write(() => {
      _.set(activeTodo, 'description', field);
    });
    setShowForm(false);
  };
  const updateField = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    setField(event.nativeEvent.text);
  };
  const openEditTodo = (todo: Todo): void => {
    setShowForm(true);
    setActiveTodo(todo);
    setField(todo.description);
  };
  const handleClose = () => {
    setShowForm(!showForm);
  };
  return (
    <Center>
      <VStack space="xl">
        {todos.map((t, i) => (
          <Text key={i}>
            {`${t.description} `}
            <Button size="xs" onPress={() => openEditTodo(t)}>
              <ButtonIcon as={EditIcon} />
            </Button>
            <Button size="xs" onPress={() => deleteTodo(t)}>
              <ButtonIcon as={TrashIcon} />
            </Button>
          </Text>
        ))}
      </VStack>
      <Actionsheet isOpen={showForm} onClose={handleClose} snapPoints={[30]}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <VStack space="md" width="90%">
            <Heading>Updating Todo</Heading>
            <Input
              size="md"
              variant="outline"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}>
              <InputField value={field} onChange={e => updateField(e)} />
            </Input>
            <Button onPress={updateTodo}>
              <ButtonText>Submit</ButtonText>
            </Button>
          </VStack>
        </ActionsheetContent>
      </Actionsheet>
    </Center>
  );
};

export default TodoList;
