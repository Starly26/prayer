import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Login} from '../../../components/Authorization';
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
      <Tab.Navigator>
        <Tab.Screen name="Register" component={Registration} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    </>
  );
};

export default AuthorizationStack;
