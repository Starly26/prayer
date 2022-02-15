import React from 'react';
import {Field, Form} from 'react-final-form';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Input} from '../../../../components/ui/Input';
import {useAppDispatch} from '../../../../hooks/useAppDispatch';
import {loginUserAction} from '../../../../store/auth/actions';
import {UserProps} from '../../../../types';

const LoginScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (values: UserProps) => {
    dispatch(loginUserAction(values));
  };

  return (
    <View style={styles.background}>
      <Form
        onSubmit={onSubmit}
        validate={values => {
          const errors = {} as UserProps;
          if (!values.email) {
            errors.email = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          return errors;
        }}
        render={({form, submitting}) => (
          <>
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
                    <Input
                      onChangeText={input.onChange}
                      value={input.value}
                      secureTextEntry={true}
                    />
                    {meta.error && meta.touched && (
                      <Text style={styles.error}>{meta.error}</Text>
                    )}
                  </View>
                )}
              </Field>
            </View>
            <View>
              <Button
                title="Login"
                onPress={form.submit}
                disabled={submitting}
              />
            </View>
          </>
        )}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    lineHeight: 20,
    paddingVertical: 22,
    alignSelf: 'center',
  },
  label: {
    fontSize: 17,
    lineHeight: 20,
    paddingVertical: 22,
    alignSelf: 'flex-start',
    marginLeft: 25,
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
