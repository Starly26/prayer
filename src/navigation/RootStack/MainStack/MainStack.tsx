import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Desc} from '../../../components/Desc';
import AppRoutes from '../../route';
import ColumnScreen from '../ColumnScreen/ColumScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppRoutes.Desc}
        component={Desc}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AppRoutes.ColumnScreen}
        component={ColumnScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
