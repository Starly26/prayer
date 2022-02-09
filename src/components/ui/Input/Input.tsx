import React from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableHighlight,
  View,
} from 'react-native';
import {Plus} from '../../icons/Plus';

type InputProps = {
  plus?: boolean;
  plussPress?: () => void;
} & TextInputProps;

const Input: React.FC<InputProps> = props => {
  return (
    <View style={styles.container}>
      {props.plus ? (
        <TouchableHighlight onPress={props.plussPress}>
          <Plus />
        </TouchableHighlight>
      ) : (
        <></>
      )}

      <TextInput
        style={styles.input}
        {...props}
        placeholder={props.placeholder}
        autoCapitalize="none"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {fontSize: 17, padding: 15, width: '100%'},
  container: {
    flexDirection: 'row',
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    backgroundColor: 'white',
  },
});
