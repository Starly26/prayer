import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Desc} from '../../../components/Desc';
import AppRoutes from '../../route';
import CardListStack from '../CardListStack/CardListStack';

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
        name={AppRoutes.CardListStack}
        component={CardListStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
