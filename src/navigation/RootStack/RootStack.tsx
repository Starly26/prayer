import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AppRoutes from '../route';
import AuthorizationStack from './AuthorizationStack/AuthorizationStack';
import MainStack from './MainStack/MainStack';

const Stack = createNativeStackNavigator();

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppRoutes.AuthorizationStack}
        component={AuthorizationStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AppRoutes.MainStack}
        component={MainStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
