import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ColumnType} from '../../../types';

type ColumnProps = {
  column: ColumnType;
};

const Colunm: React.FC<ColumnProps> = ({column}) => {
  return (
    <TouchableOpacity onPress={() => Alert.alert('Pressed!')}>
      <View style={styles.container}>
        <Text>{column.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Colunm;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    fontSize: 17,
    lineHeight: 20,
    paddingVertical: 20,
    paddingLeft: 15,
    marginTop: 10,
  },
});
