import React, {Suspense, lazy} from 'react';
import {
  config,
  GluestackUIProvider,
  Center,
  VStack,
  Text,
} from '@gluestack-ui/themed';
import {RealmProvider} from './realm/realmProvider';

const TodoList = lazy(() => import('./components/TodoList'));
const CreateTodoForm = lazy(() => import('./pages/CreateTodoForm'));

export default function App() {
  return (
    <RealmProvider>
      <GluestackUIProvider config={config.theme}>
        <Center h={'100%'}>
          <VStack space="lg">
            <Suspense fallback={<Text>Loading...</Text>}>
              <CreateTodoForm />
              <TodoList />
            </Suspense>
          </VStack>
        </Center>
      </GluestackUIProvider>
    </RealmProvider>
  );
}
