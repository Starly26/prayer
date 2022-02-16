import React from 'react';
import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SwipeRow} from 'react-native-swipe-list-view';
import {ColumnType} from '../../../../../../types';
import {ColumnItem} from '../ColumnItem';

type ColumnProps = {
  rightOpenValue: number;
  onPress: () => void;
  column: ColumnType;
  btnPress: () => void;
};

const Column: React.FC<ColumnProps> = ({
  rightOpenValue,
  onPress,
  column,
  btnPress,
}) => {
  return (
    <View>
      <SwipeRow rightOpenValue={rightOpenValue} disableRightSwipe={true}>
        <View style={styles.hidden}>
          <TouchableOpacity>
            <View>
              <Button title="Delete" onPress={btnPress} />
            </View>
          </TouchableOpacity>
        </View>
        <ColumnItem column={column} key={column.id} onPress={onPress} />
      </SwipeRow>
    </View>
  );
};

export default Column;

const styles = StyleSheet.create({
  hidden: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 30,
  },
});
