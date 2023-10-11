import React from 'react';
import {
  config,
  GluestackUIProvider,
  Text,
  Center,
  VStack,
} from '@gluestack-ui/themed';
import {RealmProvider} from './realm/realmProvider';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

export default function App() {
  return (
    <RealmProvider>
      <GluestackUIProvider config={config.theme}>
        <Center h={'100%'}>
          <VStack space="lg">
            <Text>Hello World!</Text>
            <CreateTodo />
            <TodoList />
          </VStack>
        </Center>
      </GluestackUIProvider>
    </RealmProvider>
  );
}
