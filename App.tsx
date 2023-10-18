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
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const TodoList = lazy(() => import('./components/TodoList'));
const CreateTodoForm = lazy(() => import('./pages/CreateTodoForm'));
const TodoProgress = lazy(() => import('./components/TodoProgress'));

export default function App() {
  const getCorrectDate = () => {
    const date = new Date();
    date.setDate(date.getDate());
    date.setHours(22);
    date.setMinutes(5);
    return date;
  };

  PushNotificationIOS.addNotificationRequest({
    body: 'test',
    id: 'test',
    title: 'title',
    subtitle: 'subtitile',
    badge: 1,
    isCritical: true,
    fireDate: getCorrectDate(),
    repeats: true,
    repeatsComponent: {
      minute: true,
    },
  });

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
