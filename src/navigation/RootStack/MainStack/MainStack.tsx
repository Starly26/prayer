import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DescScreen} from './DescScreen';

import AppRoutes from '../../route';
import {ColumnScreen} from './ColumnScreen';
import {DetailPrayerScreen} from './DetalPrayerScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppRoutes.DescScreen}
        component={DescScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AppRoutes.ColumnScreen}
        component={ColumnScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AppRoutes.DetalPrayerScreen}
        component={DetailPrayerScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
