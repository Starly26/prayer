import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Field, Form} from 'react-final-form';
import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {createColumn} from '../../api/api';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelect';
import AppRoutes from '../../navigation/route';
import {logout} from '../../store/auth/userSlice';
import {ColumnTypeCreate} from '../../types';
import {Arrow} from '../icons/Arrow';
import {Plus} from '../icons/Plus';
import {Input} from '../ui/Input';
import {ColumnItem} from './components/ColumnItem';

type NavigationStack = {
  ColumnScreen: {id: number};
};
type ProfileNavigation = NativeStackNavigationProp<
  NavigationStack,
  AppRoutes.ColumnScreen
>;
type Props = {
  navigation: ProfileNavigation;
  route: RouteProp<NavigationStack, AppRoutes.ColumnScreen>;
};

const Desc: React.FC<Props> = ({navigation}) => {
  const dispath = useAppDispatch();
  const columns = useAppSelector(state => state.column.columns);
  const onSubmit = (values: ColumnTypeCreate) => {
    createColumn(values);
    console.log('create', values);
    setIsModalVisible(false);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <View style={styles.header}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Text style={styles.text}>My Desk</Text>
          </View>
          <TouchableHighlight onPress={() => setIsModalVisible(true)}>
            <Plus />
          </TouchableHighlight>
        </View>
      </View>
      <Modal visible={isModalVisible}>
        <Form
          onSubmit={onSubmit}
          render={({form}) => (
            <SafeAreaView>
              <View>
                <TouchableHighlight onPress={() => setIsModalVisible(false)}>
                  <Arrow />
                </TouchableHighlight>
                <Text style={styles.text}>Name</Text>
                <Field name="title">
                  {({input}) => (
                    <Input onChangeText={input.onChange} value={input.value} />
                  )}
                </Field>
              </View>
              <View>
                <Text style={styles.text}>Description</Text>
                <Field name="description">
                  {({input}) => (
                    <Input onChangeText={input.onChange} value={input.value} />
                  )}
                </Field>
              </View>
              <View>
                <Button title="Create" onPress={form.submit} />
              </View>
            </SafeAreaView>
          )}
        />
      </Modal>
      <View style={styles.columnContainer}>
        {columns.map(column => (
          <ColumnItem
            column={column}
            key={column.id}
            onPress={() =>
              navigation.navigate(AppRoutes.ColumnScreen, {id: column.id})
            }
          />
        ))}
      </View>
      <Button title="Logout" onPress={() => dispath(logout())} />
    </>
  );
};

export default Desc;

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
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
});
