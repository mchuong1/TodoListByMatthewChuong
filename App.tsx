import React, {useState} from 'react';
import {
  config,
  GluestackUIProvider,
  Text,
  Center,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
// import {RealmProvider} from './realm/realmProvider';
import {createRealmContext} from '@realm/react';
import Realm, {ObjectSchema} from 'realm';

class Todo extends Realm.Object<Todo> {
  _id!: Realm.BSON.ObjectId;
  description!: string;
  done!: boolean;

  static schema: ObjectSchema = {
    name: 'Todo',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      description: {type: 'string'},
      done: 'bool',
    },
  };
}

const realmConfig: Realm.Configuration = {
  schema: [Todo],
  schemaVersion: 2,
};

const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);

export default function App() {
  return (
    <RealmProvider>
      <GluestackUIProvider config={config.theme}>
        <Center h={'100%'}>
          <Text>Hello World!</Text>
          <CreateTodo />
          <TodoList />
        </Center>
      </GluestackUIProvider>
    </RealmProvider>
  );
}

const TodoList = () => {
  // const [allTodos, setAllTodos] = useState<Realm.Results<Todo>>();
  const todos = useQuery(Todo);

  return (
    <Center>
      {todos.map(t => (
        <Text>{t.description}</Text>
      ))}
    </Center>
  );
};

const CreateTodo = () => {
  const realm = useRealm();
  const addTodo = (description: string) => {
    realm.write(() => {
      realm.create('Todo', {
        _id: new Realm.BSON.ObjectId(),
        description: description,
        done: false,
      });
    });
  };
  return (
    <Button onPress={() => addTodo('test')}>
      <ButtonText>Create Todo</ButtonText>
    </Button>
  );
};
