import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {PrayerLine} from '../../../../../icons/PrayerLine';
import {UserIcon} from '../../../../../icons/User';

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <BouncyCheckbox
        size={22}
        iconStyle={{borderColor: '#514D47'}}
        fillColor="black"
        // onPress={(isChecked: boolean) => {}}>
      />
      <View style={styles.wrapperGroup}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Prayer text</Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.rowContainer}>
            <UserIcon />
            <Text>3</Text>
          </View>
          <View style={styles.rowContainer}>
            <PrayerLine />
            <Text>123</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'flex-start',
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
  },
  text: {
    fontSize: 17,
    lineHeight: 20,
  },
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
  },
});
