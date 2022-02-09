import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Field, Form} from 'react-final-form';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useAppDispatch} from '../../../../hooks/useAppDispatch';
import {UserProps} from '../../../../types';
import {Input} from '../../../../components/ui/Input';
import {registerUserAction} from '../../../../store/auth/actions';

type RegistrationParamList = {
  MainStack: undefined;
};
type Props = NativeStackScreenProps<RegistrationParamList>;

const RegistrationScreen: React.FC<Props> = () => {
  const dispath = useAppDispatch();

  const onSubmit = (values: UserProps) => {
    dispath(registerUserAction(values));
  };

  return (
    <View>
      <Form
        onSubmit={onSubmit}
        render={({form}) => (
          <>
            <View>
              <Text style={styles.label}>Name</Text>
              <Field name="name">
                {({input}) => (
                  <Input onChangeText={input.onChange} value={input.value} />
                )}
              </Field>
            </View>
            <View>
              <Text style={styles.label}>Email</Text>
              <Field name="email">
                {({input}) => (
                  <Input onChangeText={input.onChange} value={input.value} />
                )}
              </Field>
            </View>
            <View>
              <Text style={styles.label}>Password</Text>
              <Field name="password">
                {({input}) => (
                  <Input onChangeText={input.onChange} secureTextEntry={true} />
                )}
              </Field>
            </View>
            <View>
              <Button title="Registration" onPress={form.submit} />
            </View>
          </>
        )}
      />
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  label: {
    fontSize: 17,
    lineHeight: 20,
    paddingVertical: 22,
    alignSelf: 'flex-start',
    marginLeft: 25,
  },
  text: {
    fontSize: 17,
    lineHeight: 20,
    paddingVertical: 22,
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
