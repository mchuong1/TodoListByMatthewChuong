import React, {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  Button,
  ButtonText,
  Heading,
  Input,
  InputField,
  VStack,
} from '@gluestack-ui/themed';
import {useRealm} from '../realm/realmProvider';

const CreateTodoForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [field, setField] = useState('');
  const realm = useRealm();
  const updateField = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    setField(event.nativeEvent.text);
  };
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
    <>
      <Button onPress={() => setShowForm(true)}>
        <ButtonText>Create Todo*</ButtonText>
      </Button>
      <Actionsheet
        isOpen={showForm}
        onClose={() => setShowForm(!showForm)}
        snapPoints={[30]}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <VStack space="md" width="90%">
            <Heading>Create A New Todo</Heading>
            <Input
              size="md"
              variant="outline"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}>
              <InputField
                placeholder="Enter what you want to do..."
                onChange={e => updateField(e)}
              />
            </Input>
            <Button onPress={() => addTodo(field)}>
              <ButtonText>Submit</ButtonText>
            </Button>
          </VStack>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
};

export default CreateTodoForm;
