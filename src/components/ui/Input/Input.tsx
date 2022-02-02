import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const Input: React.FC = props => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {fontSize: 17, padding: 15},
  container: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
  },
});
