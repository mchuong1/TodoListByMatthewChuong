import React, {Suspense, lazy} from 'react';
import {
  config,
  GluestackUIProvider,
  Center,
  VStack,
  Text,
  Heading,
} from '@gluestack-ui/themed';
import {RealmProvider} from './realm/realmProvider';

const TodoList = lazy(() => import('./components/TodoList'));
const CreateTodoForm = lazy(() => import('./pages/CreateTodoForm'));
const TodoProgress = lazy(() => import('./components/TodoProgress'));

export default function App() {
  return (
    <RealmProvider>
      <GluestackUIProvider config={config.theme}>
        <Center h={'100%'}>
          <VStack space="lg">
            <Suspense fallback={<Text>Loading...</Text>}>
              <Heading>Todo List</Heading>
              <TodoProgress />
              <TodoList />
              <CreateTodoForm />
            </Suspense>
          </VStack>
        </Center>
      </GluestackUIProvider>
    </RealmProvider>
  );
}
