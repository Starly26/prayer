import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Field, Form} from 'react-final-form';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {login} from '../../store/auth/userSlice';
import {UserAuthResponseDto, UserProps} from '../../types';
import {Input} from '../ui/Input';
import {AxiosResponse} from 'axios';
import LocalStorageService from '../../services/LocalStorageService';
import {addColumn} from '../../store/column/slice';
import {registerUser} from '../../api/api';

type RegistrationParamList = {
  MainStack: undefined;
};
type Props = NativeStackScreenProps<RegistrationParamList>;

const Registration: React.FC<Props> = () => {
  const dispath = useAppDispatch();

  const onSubmit = (values: UserProps) => {
    dispath(login(values.name!));
    registerUser(values).then(function (
      response: AxiosResponse<UserAuthResponseDto>,
    ) {
      LocalStorageService.setToken(response.data.token);
      response.data.columns.forEach(column => {
        dispath(addColumn(column));
        console.log(column);
      });
    });
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

export default Registration;

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
