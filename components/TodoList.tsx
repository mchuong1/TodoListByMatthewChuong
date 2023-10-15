import React, {useState} from 'react';
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
import Todo from '../realm/todo';
import withTodos from './HOC/withTodos';

const TodoList = (props: any) => {
  const {todos, deleteTodo, updateTodoDescription} = props;
  const [showForm, setShowForm] = useState(false);
  const [activeTodo, setActiveTodo] = useState({});
  const [field, setField] = useState('');

  const handleUpdateTodo = () => {
    updateTodoDescription(activeTodo, field);
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
        {todos.map((t: Todo, i: number) => (
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
            <Button onPress={handleUpdateTodo}>
              <ButtonText>Submit</ButtonText>
            </Button>
          </VStack>
        </ActionsheetContent>
      </Actionsheet>
    </Center>
  );
};

export default withTodos(TodoList);
