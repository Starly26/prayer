import React from 'react';
import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {Plus} from '../../icons/Plus';

type InputProps = {
  placeholder?: string;
  plus?: boolean;
  // onSubmit: () => void;
};

const Input: React.FC<InputProps> = props => {
  return (
    <View style={styles.container}>
      {props.plus ? (
        <TouchableHighlight onPress={() => Alert.alert('Pressed!')}>
          <Plus />
        </TouchableHighlight>
      ) : (
        <></>
      )}

      <TextInput
        style={styles.input}
        {...props}
        placeholder={props.placeholder}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {fontSize: 17, padding: 15},
  container: {
    flexDirection: 'row',
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
  },
});
