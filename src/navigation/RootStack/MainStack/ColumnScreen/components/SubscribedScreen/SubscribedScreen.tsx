import React, {useMemo, useState} from 'react';
import {Field, Form} from 'react-final-form';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Input} from '../../../../../../components/ui/Input';
import {useAppDispatch} from '../../../../../../hooks/useAppDispatch';
import {useAppSelector} from '../../../../../../hooks/useAppSelect';
import {createPrayerAction} from '../../../../../../store/prayers/actions';
import {PrayerCreate} from '../../../../../../types';
import {PrayerWrapper} from '../PrayerWrapper';

type SubscribedScreenProps = {
  columnId: number;
};

const SubscribedScreen: React.FC<SubscribedScreenProps> = ({columnId}) => {
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
        <PrayerWrapper key={prayer.id} prayer={prayer} />
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
          <PrayerWrapper key={prayer.id} prayer={prayer} />
        ))
      ) : (
        <></>
      )}
    </View>
  );
};
export default SubscribedScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 30,
  },
  background: {
    backgroundColor: '#FFFFFF',
    flex: 1,
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
