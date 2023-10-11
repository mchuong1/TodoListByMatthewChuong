import Realm from 'realm';
import {createRealmContext} from '@realm/react';
import Todo from './todo';

const realmConfig: Realm.Configuration = {
  schema: [Todo],
  schemaVersion: 2,
};

export const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);
