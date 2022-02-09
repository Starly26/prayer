import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch} from '../../../../../../hooks/useAppDispatch';
import {changeColumnAction} from '../../../../../../store/column/actions';
import {ColumnType, ColumnTypeCreate} from '../../../../../../types';
import {MyModal} from '../MyModal';

type ColumnProps = {
  column: ColumnType;
  onPress: () => void;
};

const ColumnItem: React.FC<ColumnProps> = ({column, onPress}) => {
  const [isChangeModalVisible, setIsChangeModalVisible] = useState(false);
  const dispatch = useAppDispatch();

  const onChangeColumn = (values: ColumnTypeCreate) => {
    const item = {
      id: column.id,
      title: values.title,
      description: values.description,
    };
    dispatch(changeColumnAction(item));
    setIsChangeModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        onLongPress={() => setIsChangeModalVisible(true)}
        activeOpacity={1}>
        <View style={styles.container}>
          <Text>{column.title}</Text>
        </View>
      </TouchableOpacity>
      <MyModal
        visible={isChangeModalVisible}
        onPress={() => setIsChangeModalVisible(false)}
        changeSubmit={onChangeColumn}
        id={column.id}
        btnName="Change"
        defaultValueName={column.title}
        defaultValueDescription={column.description}
      />
    </>
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
    backgroundColor: '#FFFFFF',
  },
});
