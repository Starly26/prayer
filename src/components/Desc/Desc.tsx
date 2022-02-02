import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {ColumnType} from '../../types';
import {Plus} from '../icons/Plus';
import {Column} from './components';

const Desc = () => {
  const [columns, setColumns] = useState<ColumnType[]>([
    {id: 1, name: 'TODO'},
    {id: 2, name: 'In Progress'},
    {id: 3, name: 'Completed'},
  ]);
  return (
    <>
      <SafeAreaView style={styles.header}>
        <View style={styles.container}>
          <Text style={styles.text}>My Desk</Text>
          <TouchableHighlight onPress={() => Alert.alert('Pressed!')}>
            <Plus />
          </TouchableHighlight>
        </View>
      </SafeAreaView>
      <View style={styles.columnContainer}>
        {columns.map(column => (
          <Column column={column} key={column.id} />
        ))}
      </View>
    </>
  );
};

export default Desc;

const styles = StyleSheet.create({
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
  text: {
    fontSize: 17,
    lineHeight: 20,
    paddingEnd: '40%',
  },
  columnContainer: {
    marginTop: 15,
    paddingHorizontal: 15,
  },
});
