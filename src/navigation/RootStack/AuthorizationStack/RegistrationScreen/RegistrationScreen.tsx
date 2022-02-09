import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Field, Form} from 'react-final-form';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useAppDispatch} from '../../../../hooks/useAppDispatch';
import {UserRegisterProps} from '../../../../types';
import {Input} from '../../../../components/ui/Input';
import {registerUserAction} from '../../../../store/auth/actions';

type RegistrationParamList = {
  MainStack: undefined;
};
type Props = NativeStackScreenProps<RegistrationParamList>;

const RegistrationScreen: React.FC<Props> = () => {
  const dispath = useAppDispatch();

  const onSubmit = (values: UserRegisterProps) => {
    dispath(registerUserAction(values));
  };

  return (
    <View style={styles.background}>
      <Form
        onSubmit={onSubmit}
        validate={values => {
          const errors = {} as UserRegisterProps;
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          return errors;
        }}
        render={({form}) => (
          <>
            <View>
              <Text style={styles.label}>Name</Text>
              <Field name="name">
                {({input, meta}) => (
                  <View>
                    <Input onChangeText={input.onChange} value={input.value} />
                    {meta.error && meta.touched && (
                      <Text style={styles.error}>{meta.error}</Text>
                    )}
                  </View>
                )}
              </Field>
            </View>
            <View>
              <Text style={styles.label}>Email</Text>
              <Field name="email">
                {({input, meta}) => (
                  <View>
                    <Input onChangeText={input.onChange} value={input.value} />
                    {meta.error && meta.touched && (
                      <Text style={styles.error}>{meta.error}</Text>
                    )}
                  </View>
                )}
              </Field>
            </View>
            <View>
              <Text style={styles.label}>Password</Text>
              <Field name="password">
                {({input, meta}) => (
                  <View>
                    <Input onChangeText={input.onChange} value={input.value} />
                    {meta.error && meta.touched && (
                      <Text style={styles.error}>{meta.error}</Text>
                    )}
                  </View>
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
  background: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  error: {
    marginLeft: 22,
    color: 'red',
    marginTop: 5,
  },
});
