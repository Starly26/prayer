import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Field, Form, FormProps} from 'react-final-form';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import AppRoutes from '../../navigation/route';
import {addUserName} from '../../store/slices/user/userSlice';
import {Input} from '../ui/Input';

type LoginParamList = {
  MainStack: undefined;
};
type Props = NativeStackScreenProps<LoginParamList>;

const Login: React.FC<Props> = ({navigation}) => {
  const onSubmit = (values: FormProps<{name: string}>) => {
    console.log(values.name);
    navigation.navigate(AppRoutes.MainStack);
    dispath(addUserName(values.email));
  };

  const dispath = useAppDispatch();
  return (
    <SafeAreaView>
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
    </SafeAreaView>
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
