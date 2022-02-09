import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MyPrayers} from '../DescScreen/components/ColumnItem/components/MyPrayersScreen';
import {Subscribed} from '../DescScreen/components/ColumnItem/components/SubscribedScreen';
import {Arrow} from '../../../../components/icons/Arrow';
import {Setting} from '../../../../components/icons/Setting';
import {useAppSelector} from '../../../../hooks/useAppSelect';
import {selectColumnById} from '../../../../store/column/selectors';
import AppRoutes from '../../../route';

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
  return (
    <>
      <SafeAreaView>
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
      <Tab.Navigator>
        <Tab.Screen name="MY PRAYERS" component={MyPrayers} />
        <Tab.Screen name="SUBSCRIBED" component={Subscribed} />
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
});
