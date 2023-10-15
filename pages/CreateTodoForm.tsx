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
  Text,
  Divider,
  RadioGroup,
  Radio,
  RadioIndicator,
  RadioIcon,
  RadioLabel,
  CircleIcon,
  HStack,
} from '@gluestack-ui/themed';
import withTodos from '../components/HOC/withTodos';

const CreateTodoForm = (props: any) => {
  const [showForm, setShowForm] = useState(false);
  const [field, setField] = useState('');

  const {addTodo} = props;

  const updateField = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    setField(event.nativeEvent.text);
  };
  const handleAddTodo = (description: string) => {
    addTodo(description);
    setShowForm(false);
  };

  return (
    <>
      <Button onPress={() => setShowForm(true)}>
        <ButtonText>Create Todo*</ButtonText>
      </Button>
      <Actionsheet
        isOpen={showForm}
        onClose={() => setShowForm(!showForm)}
        snapPoints={[40]}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <VStack space="md" width="90%">
            <Heading>Create A New Todo</Heading>
            <>
              <Text>Description</Text>
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
            </>
            <Divider />
            <Text>Recurring</Text>
            <RadioGroup>
              <HStack space="sm">
                <Radio value="everyday">
                  <RadioIndicator mr="$2">
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Everyday</RadioLabel>
                </Radio>
                <Radio value="onceaweek">
                  <RadioIndicator mr="$2">
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Once a week</RadioLabel>
                </Radio>
                <Radio value="custom">
                  <RadioIndicator mr="$2">
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Custom</RadioLabel>
                </Radio>
              </HStack>
            </RadioGroup>
            <Button onPress={() => handleAddTodo(field)}>
              <ButtonText>Submit</ButtonText>
            </Button>
          </VStack>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
};

export default withTodos(CreateTodoForm);
