import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Field, Form, FormProps} from 'react-final-form';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import AppRoutes from '../../navigation/route';
import {addUserName} from '../../store/slices/user/userSlice';
import {Input} from '../ui/Input';
type RegistrationParamList = {
  MainStack: undefined;
};
type Props = NativeStackScreenProps<RegistrationParamList>;

const Registration: React.FC<Props> = ({navigation}) => {
  const onSubmit = (values: FormProps<{name: string}>) => {
    console.log(values);
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
    </SafeAreaView>
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
