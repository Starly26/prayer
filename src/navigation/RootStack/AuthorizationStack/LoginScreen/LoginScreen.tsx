// import {NativeStackScreenProps} from '@react-navigation/native-stack';
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
    <View>
      <Form
        onSubmit={onSubmit}
        render={({form}) => (
          <>
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
                  <Input
                    onChangeText={input.onChange}
                    value={input.value}
                    secureTextEntry={true}
                  />
                )}
              </Field>
            </View>
            <View>
              <Button title="Login" onPress={form.submit} />
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
});
