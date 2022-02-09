import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-svg';

const Loader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Loading ...</Text>
    </View>
  );
};

export default React.memo(Loader);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
