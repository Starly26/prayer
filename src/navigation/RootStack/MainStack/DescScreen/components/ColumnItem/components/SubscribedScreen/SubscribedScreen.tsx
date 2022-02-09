import React from 'react';
import {Field, Form} from 'react-final-form';
import {Alert, StyleSheet, View} from 'react-native';
import {Input} from '../../../../../../../../components/ui/Input';

const Subscribed: React.FC = () => {
  const onSubmit = () => {
    Alert.alert('touch');
  };
  return (
    <View>
      <Form
        onSubmit={onSubmit}
        render={() => (
          <View style={styles.container}>
            <Field name="addPrayer">
              {({input}) => (
                <Input
                  onChangeText={input.onChange}
                  placeholder="Add a prayer..."
                  placeholderTextColor="#9C9C9C"
                  plus={true}
                  // plussPress={addPrayer}
                />
              )}
            </Field>
          </View>
        )}
      />
    </View>
  );
};

export default Subscribed;
const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 30,
  },
});
