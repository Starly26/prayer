import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ColumnType} from '../../../../types';

type ColumnProps = {
  column: ColumnType;
  onPress: () => void;
};

const ColumnItem: React.FC<ColumnProps> = ({column, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text>{column.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ColumnItem;

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
