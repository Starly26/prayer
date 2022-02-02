import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AppRoutes from '../route';
import AuthorizationStack from './AuthorizationStack/AuthorizationStack';

const Stack = createNativeStackNavigator();

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppRoutes.AuthorizationStack}
        component={AuthorizationStack}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
