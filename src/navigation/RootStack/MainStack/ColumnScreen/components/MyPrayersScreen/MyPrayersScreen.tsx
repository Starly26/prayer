import React, {useMemo, useState} from 'react';
import {Field, Form} from 'react-final-form';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SwipeRow} from 'react-native-swipe-list-view';
import {Input} from '../../../../../../components/ui/Input';
import {useAppDispatch} from '../../../../../../hooks/useAppDispatch';
import {useAppSelector} from '../../../../../../hooks/useAppSelect';
import {
  createPrayerAction,
  deletePrayerAction,
} from '../../../../../../store/prayers/actions';
import {PrayerCreate} from '../../../../../../types';
import {Prayer} from '../Prayer';

type PrayerScreenProps = {
  columnId: number;
};

const MyPrayersScreen: React.FC<PrayerScreenProps> = ({columnId}) => {
  const dispatch = useAppDispatch();
  const onSubmit = (values: PrayerCreate) => {
    const newPrayer = {
      columnId: columnId,
      title: values.title,
      checked: false,
      description: 'string',
    };
    dispatch(createPrayerAction(newPrayer));
  };

  const prayers = useAppSelector(state => state.prayer.prayers);
  const [moveLeft, setMoveLeft] = useState(true);
  const [isShowChecked, setIsShowCheked] = useState(false);

  const prayerArray = useMemo(() => {
    return prayers.filter(prayer => prayer.columnId === columnId);
  }, [prayers, columnId]);

  const prayerCheck = prayerArray.filter(prayer => prayer.checked === true);
  const prayersNotCheck = prayerArray.filter(
    prayer => prayer.checked === false,
  );

  return (
    <View style={styles.background}>
      <Form
        onSubmit={onSubmit}
        validate={values => {
          const errors = {} as PrayerCreate;
          if (!values.title) {
            errors.title = 'Required';
          }
          return errors;
        }}
        render={({form}) => (
          <View style={styles.container}>
            <Field name="title">
              {({input, meta}) => (
                <View>
                  <Input
                    onChangeText={input.onChange}
                    placeholder="Add a prayer..."
                    placeholderTextColor="#9C9C9C"
                    plus={true}
                    plussPress={form.submit}
                  />
                  {meta.error && meta.touched && (
                    <Text style={styles.error}>{meta.error}</Text>
                  )}
                </View>
              )}
            </Field>
          </View>
        )}
      />
      {prayersNotCheck.map(prayer => (
        <View key={prayer.id}>
          <SwipeRow rightOpenValue={moveLeft ? -100 : 0}>
            <View style={styles.hidden}>
              <TouchableOpacity>
                <View style={styles.btnContainer}>
                  <Button
                    color="#FFF"
                    title="Delete"
                    onPress={() => {
                      dispatch(deletePrayerAction(prayer.id));
                      setMoveLeft(false);
                      setMoveLeft(true);
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <Prayer prayer={prayer} />
          </SwipeRow>
        </View>
      ))}
      <TouchableOpacity
        style={styles.touchButton}
        onPress={() => setIsShowCheked(!isShowChecked)}>
        {isShowChecked ? (
          <Text style={styles.btnText}>HIDE ANSWERED PRAYERS</Text>
        ) : (
          <Text style={styles.btnText}>SHOW ANSWERED PRAYERS</Text>
        )}
      </TouchableOpacity>
      {isShowChecked ? (
        prayerCheck.map(prayer => (
          <View key={prayer.id}>
            <SwipeRow rightOpenValue={moveLeft ? -100 : 0}>
              <View style={styles.hidden}>
                <TouchableOpacity>
                  <View style={styles.btnContainer}>
                    <Button
                      color="#FFF"
                      title="Delete"
                      onPress={() => {
                        dispatch(deletePrayerAction(prayer.id));
                        setMoveLeft(false);
                        setMoveLeft(true);
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <Prayer prayer={prayer} />
            </SwipeRow>
          </View>
        ))
      ) : (
        <></>
      )}
    </View>
  );
};

export default MyPrayersScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 30,
  },
  background: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
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
  touchButton: {
    width: 209,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#BFB393',
    marginVertical: 21,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {fontSize: 12, color: '#FFF'},
  error: {
    marginLeft: 22,
    color: 'red',
    marginTop: 5,
  },
});
