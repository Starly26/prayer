import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {DescScreen} from './DescScreen';

import AppRoutes from '../../route';
import {ColumnScreen} from './ColumnScreen';
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import {putColumnsAction} from '../../../store/column/actions';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(putColumnsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    </Stack.Navigator>
  );
};

export default MainStack;
