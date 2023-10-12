import React from 'react';
import {
  config,
  GluestackUIProvider,
  Center,
  VStack,
} from '@gluestack-ui/themed';
import {RealmProvider} from './realm/realmProvider';
import TodoList from './components/TodoList';
import CreateTodoForm from './pages/CreateTodoForm';

export default function App() {
  return (
    <RealmProvider>
      <GluestackUIProvider config={config.theme}>
        <Center h={'100%'}>
          <VStack space="lg">
            <CreateTodoForm />
            <TodoList />
          </VStack>
        </Center>
      </GluestackUIProvider>
    </RealmProvider>
  );
}
