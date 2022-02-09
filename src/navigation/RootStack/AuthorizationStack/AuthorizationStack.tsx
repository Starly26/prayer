import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppRoutes from '../../route';
import {LoginScreen} from './LoginScreen';
import {RegistrationScreen} from './RegistrationScreen';

const Tab = createMaterialTopTabNavigator<AuthorizationParamList>();

type AuthorizationParamList = {
  [AppRoutes.RegistrationScreen]: undefined;
  [AppRoutes.LoginScreen]: undefined;
};
type Props = NativeStackScreenProps<AuthorizationParamList>;

const AuthorizationStack: React.FC<Props> = () => {
  return (
    <>
      <SafeAreaView style={styles.background}>
        <Text style={styles.text}>Wellcome to Prayer</Text>
      </SafeAreaView>
      <Tab.Navigator>
        <Tab.Screen
          name={AppRoutes.RegistrationScreen}
          component={RegistrationScreen}
        />
        <Tab.Screen name={AppRoutes.LoginScreen} component={LoginScreen} />
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
  background: {
    backgroundColor: '#FFFFFF',
  },
});
