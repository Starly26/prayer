import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Login} from '../../../components/Login';
import {Registration} from '../../../components/Registration';

const Tab = createMaterialTopTabNavigator<AuthorizationParamList>();

type AuthorizationParamList = {
  Register: undefined;
  Login: undefined;
};
type Props = NativeStackScreenProps<AuthorizationParamList>;

const AuthorizationStack: React.FC<Props> = () => {
  return (
    <>
      <SafeAreaView>
        <Text style={styles.text}>Wellcome to Prayer</Text>
      </SafeAreaView>
      <Tab.Navigator>
        <Tab.Screen name="Register" component={Registration} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    </>
  );
};

export default AuthorizationStack;

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    lineHeight: 20,
    paddingTop: 22,
    alignSelf: 'center',
  },
});
