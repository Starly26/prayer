import React from 'react';
import {Field, Form} from 'react-final-form';
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Arrow} from '../../../../../../components/icons/Arrow';
import {Input} from '../../../../../../components/ui/Input';
import {ChangePrayerType, ColumnTypeCreate} from '../../../../../../types';

type MyModalProps = {
  visible: boolean;
  onPress: () => void;
  onSubmit?: (values: ColumnTypeCreate) => void;
  changeSubmit?: (values: ColumnTypeCreate, id: number) => void;
  btnName: string;
  defaultValueName?: string;
  defaultValueDescription?: string;
  id?: number;
  checked?: boolean;
  changePrayerSubmit?: (values: ChangePrayerType) => void;
};

const MyModal: React.FC<MyModalProps> = ({
  visible,
  onPress,
  onSubmit,
  changeSubmit,
  btnName,
  defaultValueName,
  defaultValueDescription,
  id,
  checked,
  changePrayerSubmit,
}) => {
  const createSubmit = (values: ColumnTypeCreate) => {
    if (onSubmit) {
      onSubmit(values);
    }
    if (changeSubmit) {
      changeSubmit(values, id!);
    }
    if (changePrayerSubmit) {
      const prayer = {
        title: values.title,
        description: values.description,
        id: id!,
        checked: checked!,
      };
      changePrayerSubmit(prayer);
    }
  };

  return (
    <Modal visible={visible}>
      <SafeAreaView>
        <TouchableOpacity onPress={onPress} style={styles.image}>
          <Arrow />
        </TouchableOpacity>
        <Form
          onSubmit={createSubmit}
          validate={values => {
            const errors = {} as ColumnTypeCreate;
            if (!values.title) {
              errors.title = 'Required';
            }
            if (!values.description) {
              errors.description = 'Required';
            }
            return errors;
          }}
          render={({form, submitting}) => (
            <>
              <View>
                <Text style={styles.modalText}>Name</Text>
                <Field name="title" defaultValue={defaultValueName}>
                  {({input, meta}) => (
                    <View>
                      <Input
                        onChangeText={input.onChange}
                        value={input.value}
                      />
                      {meta.error && meta.touched && (
                        <Text style={styles.error}>{meta.error}</Text>
                      )}
                    </View>
                  )}
                </Field>
              </View>
              <View>
                <Text style={styles.modalText}>Description</Text>
                <Field
                  name="description"
                  defaultValue={defaultValueDescription}>
                  {({input, meta}) => (
                    <View>
                      <Input
                        onChangeText={input.onChange}
                        value={input.value}
                      />
                      {meta.error && meta.touched && (
                        <Text style={styles.error}>{meta.error}</Text>
                      )}
                    </View>
                  )}
                </Field>
              </View>
              <View>
                <Button
                  title={btnName}
                  onPress={form.submit}
                  disabled={submitting}
                />
              </View>
            </>
          )}
        />
      </SafeAreaView>
    </Modal>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  modalText: {
    fontSize: 17,
    lineHeight: 20,
    alignSelf: 'flex-start',
    marginVertical: 20,
    marginLeft: 40,
  },
  image: {
    marginLeft: 15,
  },
  error: {
    marginLeft: 22,
    color: 'red',
    marginTop: 5,
  },
});
