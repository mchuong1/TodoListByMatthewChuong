import React from 'react';
import {Button, ButtonText} from '@gluestack-ui/themed';
import {useRealm} from '../realm/realmProvider';

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

export default CreateTodo;
