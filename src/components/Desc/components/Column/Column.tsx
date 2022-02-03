import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppRoutes from '../../../../navigation/route';
import {ColumnType} from '../../../../types';

type ColumnProps = {
  column: ColumnType;
};

const Colunm: React.FC<ColumnProps> = ({column}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate(AppRoutes.CardListStack)}>
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
