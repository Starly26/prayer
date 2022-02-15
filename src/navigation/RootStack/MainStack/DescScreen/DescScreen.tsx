import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppDispatch} from '../../../../hooks/useAppDispatch';
import {useAppSelector} from '../../../../hooks/useAppSelect';
import AppRoutes from '../../../route';
import {logout} from '../../../../store/auth/userSlice';
import {ColumnTypeCreate} from '../../../../types';
import {Plus} from '../../../../components/icons/Plus';
import {ColumnItem} from './components/ColumnItem';
import {Loader} from '../../../../components/ui/Loader';
import {
  createColumnAction,
  deleteColumnAction,
  putColumnsAction,
} from '../../../../store/column/actions';
import {MyModal} from './components/MyModal';
import {SwipeRow} from 'react-native-swipe-list-view';

type NavigationStack = {
  [AppRoutes.ColumnScreen]: {id: number};
};
type ProfileNavigation = NativeStackNavigationProp<
  NavigationStack,
  AppRoutes.ColumnScreen
>;
type Props = {
  navigation: ProfileNavigation;
  route: RouteProp<NavigationStack, AppRoutes.ColumnScreen>;
};

const DescScreen: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    dispatch(putColumnsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [moveLeft, setMoveLeft] = useState(true);

  const dispatch = useAppDispatch();
  const columns = useAppSelector(state => state.column.columns);

  const createColumnSubmit = (values: ColumnTypeCreate) => {
    dispatch(createColumnAction(values));
    setIsCreateModalVisible(false);
  };
  const isLoading = useAppSelector(state => state.column.isLoading);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <SafeAreaView style={styles.background}>
          <View style={styles.header}>
            <View style={styles.container}>
              <View style={styles.wrapper}>
                <Text style={styles.text}>My Desk</Text>
              </View>
              <TouchableHighlight onPress={() => setIsCreateModalVisible(true)}>
                <Plus />
              </TouchableHighlight>
            </View>
          </View>
          <MyModal
            visible={isCreateModalVisible}
            onPress={() => setIsCreateModalVisible(false)}
            onSubmit={createColumnSubmit}
            btnName="Create"
          />
          <View style={styles.columnContainer}>
            {columns.map(column => (
              <View key={column.id}>
                <SwipeRow
                  rightOpenValue={moveLeft ? -100 : 0}
                  disableRightSwipe={true}>
                  <View style={styles.hidden}>
                    <TouchableOpacity>
                      <View>
                        <Button
                          title="Delete"
                          onPress={() => {
                            dispatch(deleteColumnAction(column.id));
                            setMoveLeft(false);
                            setMoveLeft(true);
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <ColumnItem
                    column={column}
                    key={column.id}
                    onPress={() =>
                      navigation.navigate(AppRoutes.ColumnScreen, {
                        id: column.id,
                      })
                    }
                  />
                </SwipeRow>
              </View>
            ))}
          </View>
          <Button title="Logout" onPress={() => dispatch(logout())} />
        </SafeAreaView>
      )}
    </>
  );
};

export default DescScreen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  header: {
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 22,
  },
  wrapper: {
    width: '90%',
  },
  text: {
    fontSize: 17,
    lineHeight: 20,
    alignSelf: 'center',
  },
  columnContainer: {
    marginTop: 15,
    paddingHorizontal: 15,
  },
  modalText: {
    fontSize: 17,
    lineHeight: 20,
    alignSelf: 'flex-start',
    marginVertical: 20,
    marginLeft: 40,
  },
  image: {
    marginLeft: 15,
  },
  hidden: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 30,
  },
});
