import React from 'react';
import {config, GluestackUIProvider, Text, Center} from '@gluestack-ui/themed';
// import {RealmProvider} from './realm/realmProvider';
import {createRealmContext} from '@realm/react';
import Realm, {ObjectSchema} from 'realm';

class Todo extends Realm.Object<Todo> {
  _id!: Realm.BSON.ObjectId;
  description!: string;
  done!: boolean;

  static schema: ObjectSchema = {
    name: 'Todo',
    properties: {
      _id: 'int',
      description: {type: 'string'},
      done: 'bool',
    },
    primaryKey: '_id',
  };
}

const realmConfig: Realm.Configuration = {
  schema: [Todo],
};

export const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);

export default function App() {
  return (
    <RealmProvider>
      <GluestackUIProvider config={config.theme}>
        <Center h={'100%'}>
          <Text>Hello World!</Text>
        </Center>
      </GluestackUIProvider>
    </RealmProvider>
  );
}
