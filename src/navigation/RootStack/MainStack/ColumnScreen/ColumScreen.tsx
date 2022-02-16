import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MyPrayersScreen} from './components/MyPrayersScreen';
import {SubscribedScreen} from './components/SubscribedScreen';
import {Arrow} from '../../../../components/icons/Arrow';
import {Setting} from '../../../../components/icons/Setting';
import {useAppSelector} from '../../../../hooks/useAppSelect';
import {selectColumnById} from '../../../../store/column/selectors';
import AppRoutes from '../../../route';
import {useAppDispatch} from '../../../../hooks/useAppDispatch';
import {putPrayersAction} from '../../../../store/prayers/actions';
import {Loader} from '../../../../components/ui/Loader';

const Tab = createMaterialTopTabNavigator();
type CardListNavigationStack = {
  [AppRoutes.DescScreen]: {id: number};
};
type ProfileNavigation = NativeStackNavigationProp<
  CardListNavigationStack,
  AppRoutes.DescScreen
>;
type Props = {
  navigation: ProfileNavigation;
  route: RouteProp<CardListNavigationStack, AppRoutes.DescScreen>;
};

const ColumnScreen: React.FC<Props> = ({navigation, route: {params}}) => {
  const column = useAppSelector(state => selectColumnById(state, params.id));
  const prayers = useAppSelector(state => state.prayer.prayers);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(putPrayersAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isLoading = useAppSelector(state => state.prayer.isLoading);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <SafeAreaView style={styles.background}>
        <View style={styles.container}>
          <TouchableHighlight onPress={() => navigation.goBack()}>
            <Arrow />
          </TouchableHighlight>
          <View style={styles.wrapper}>
            <Text style={styles.text}>{column?.title}</Text>
          </View>
          <TouchableHighlight>
            <Setting />
          </TouchableHighlight>
        </View>
      </SafeAreaView>
      <Tab.Navigator screenOptions={{swipeEnabled: false}}>
        <Tab.Screen
          name={AppRoutes.MyPrayers}
          children={() => <MyPrayersScreen {...{columnId: column!.id}} />}
        />
        <Tab.Screen
          name={`${AppRoutes.Subscribed} ${prayers.length}`}
          children={() => <SubscribedScreen {...{columnId: column!.id}} />}
        />
      </Tab.Navigator>
    </>
  );
};

export default ColumnScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
  },
  text: {
    color: '#514D47',
    fontSize: 17,
    lineHeight: 20,
    alignSelf: 'center',
  },
  wrapper: {
    width: '80%',
  },
  background: {
    backgroundColor: '#FFFFFF',
  },
});
