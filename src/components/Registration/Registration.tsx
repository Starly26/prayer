import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Field, Form, FormProps} from 'react-final-form';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Input} from '../ui/Input';

const Registration = () => {
  const onSubmit = (values: FormProps<{name: string}>) => {
    console.log(values.name);
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Wellcome to Prayer</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
          <>
            <View>
              <Text style={styles.label}>Email</Text>
              <Field name="Email">
                {({input}) => <Input onChangeText={input.onChange} />}
              </Field>
            </View>
            <View>
              <Text style={styles.label}>Password</Text>
              <Field name="Email">
                {({input}) => <Input onChangeText={input.onChange} />}
              </Field>
            </View>
            <View>
              <Button title="Registration" />
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
