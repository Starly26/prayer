// import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AxiosResponse} from 'axios';
import React from 'react';
import {Field, Form} from 'react-final-form';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import LocalStorageService from '../../services/LocalStorageService';
import {login} from '../../store/auth/userSlice';
import {UserAuthResponseDto, UserProps} from '../../types';
import {Input} from '../ui/Input';
import {putColumnsAction} from '../../store/column/actions';
import {loginUser} from '../../api/api';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (values: UserProps) => {
    loginUser(values).then(function (
      response: AxiosResponse<UserAuthResponseDto>,
    ) {
      LocalStorageService.setToken(response.data.token);
      dispatch(login(response.data.name));
    });
    dispatch(putColumnsAction());
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

export default Login;

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
