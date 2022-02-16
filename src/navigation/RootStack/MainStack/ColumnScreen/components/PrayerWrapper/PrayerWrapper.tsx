import React, {useState} from 'react';
import {Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SwipeRow} from 'react-native-swipe-list-view';
import {useAppDispatch} from '../../../../../../hooks/useAppDispatch';
import {deletePrayerAction} from '../../../../../../store/prayers/actions';
import {PrayersType} from '../../../../../../types';
import {Prayer} from './components/Prayer';

type PrayerWrapperType = {
  prayer: PrayersType;
};

const PrayerWrapper: React.FC<PrayerWrapperType> = ({prayer}) => {
  const dispatch = useAppDispatch();
  const [moveLeft, setMoveLeft] = useState(true);

  const deletePrayer = (id: number) => {
    dispatch(deletePrayerAction(id));
    setMoveLeft(false);
    setMoveLeft(true);
  };

  return (
    <View>
      <SwipeRow rightOpenValue={moveLeft ? -100 : 0}>
        <View style={styles.hidden}>
          <TouchableOpacity>
            <View style={styles.btnContainer}>
              <Button
                color="#FFF"
                title="Delete"
                onPress={() => deletePrayer(prayer.id)}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Prayer prayer={prayer} />
      </SwipeRow>
    </View>
  );
};

export default PrayerWrapper;

const styles = StyleSheet.create({
  hidden: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AC5253',
    height: '100%',
    width: '100%',
  },
});
