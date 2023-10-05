import Realm from 'realm';
import {createRealmContext} from '@realm/react';
import Todo from './todo';

const realmConfig: Realm.Configuration = {
  schema: [Todo],
};

export const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);
