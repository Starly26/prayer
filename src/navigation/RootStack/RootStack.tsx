import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelect';
import LocalStorageService from '../../services/LocalStorageService';
import {logout} from '../../store/auth/userSlice';
import AppRoutes from '../route';
import AuthorizationStack from './AuthorizationStack/AuthorizationStack';
import MainStack from './MainStack/MainStack';

const Stack = createNativeStackNavigator();

const RootStack: React.FC = () => {
  const isAuthorization = useAppSelector(state => state.user.authorization);
  const dispath = useAppDispatch();

  useEffect(() => {
    LocalStorageService.getToken().then(token => {
      if (!token) {
        dispath(logout());
      }
    });
  });

  return (
    <Stack.Navigator>
      {isAuthorization ? (
        <Stack.Screen
          name={AppRoutes.MainStack}
          component={MainStack}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name={AppRoutes.AuthorizationStack}
          component={AuthorizationStack}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default RootStack;
