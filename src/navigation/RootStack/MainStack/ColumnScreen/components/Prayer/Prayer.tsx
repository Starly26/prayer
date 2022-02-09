import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {PrayerLine} from '../../../../../../components/icons/PrayerLine';
import {UserIcon} from '../../../../../../components/icons/User';
import {useAppDispatch} from '../../../../../../hooks/useAppDispatch';
import {changePrayerAction} from '../../../../../../store/prayers/actions';
import {ChangePrayerType, PrayersType} from '../../../../../../types';
import AppRoutes from '../../../../../route';
import {MyModal} from '../../../DescScreen/components/MyModal';

type CardProps = {
  prayer: PrayersType;
};
type NavigationParamList = {
  [AppRoutes.DetalPrayerScreen]: {prayer: PrayersType};
};
type ProfileNavigation = NativeStackNavigationProp<
  NavigationParamList,
  AppRoutes.DetalPrayerScreen
>;

const Prayer: React.FC<CardProps> = ({prayer}) => {
  const navigation = useNavigation<ProfileNavigation>();
  const dispatch = useAppDispatch();

  const [checkBoxState, setCheckboxState] = useState(prayer.checked);
  const fixCheck = (isChecked: boolean) => {
    const item = {
      id: prayer.id,
      title: prayer.title,
      description: prayer.description,
      checked: isChecked,
    };
    dispatch(changePrayerAction(item));
  };
  const [isChangeModalVisiblile, setIsChangeModalVisible] = useState(false);
  const changePrayer = (value: ChangePrayerType) => {
    dispatch(changePrayerAction(value));
    setIsChangeModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <BouncyCheckbox
        isChecked={prayer.checked}
        size={22}
        iconStyle={{borderColor: '#514D47'}}
        fillColor="black"
        onPress={(isChecked: boolean) => {
          setCheckboxState(!checkBoxState);
          fixCheck(isChecked);
        }}
      />
      <TouchableOpacity
        style={styles.wrapperGroup}
        onLongPress={() => setIsChangeModalVisible(true)}
        onPress={() =>
          navigation.navigate(AppRoutes.DetalPrayerScreen, {
            prayer: prayer,
          })
        }>
        <View style={styles.textWrapper}>
          <Text
            style={
              (styles.text,
              checkBoxState && {textDecorationLine: 'line-through'})
            }>
            {prayer.title}
          </Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.rowContainer}>
            <UserIcon />
            <Text style={styles.countText}>{prayer.commentsIds?.length}</Text>
          </View>
          <View style={styles.rowContainer}>
            <PrayerLine />
            <Text style={styles.countText}>123</Text>
          </View>
        </View>
      </TouchableOpacity>
      <MyModal
        visible={isChangeModalVisiblile}
        onPress={() => setIsChangeModalVisible(false)}
        changePrayerSubmit={changePrayer}
        id={prayer.id}
        defaultValueName={prayer.title}
        defaultValueDescription={prayer.description}
        btnName="Create"
        checked={checkBoxState}
      />
    </View>
  );
};

export default Prayer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 19,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
  },
  line: {
    borderLeftColor: '#AC5253',
    borderLeftWidth: 2,
    paddingRight: 15,
  },
  textWrapper: {
    alignItems: 'center',
    paddingLeft: 10,
    justifyContent: 'flex-start',
    maxWidth: '60%',
  },
  text: {
    fontSize: 17,
    lineHeight: 20,
  },
  countText: {fontSize: 12, marginLeft: 5, alignSelf: 'center'},
  image: {
    width: '100%',
  },
  wrapper: {
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperGroup: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
