import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const Loader: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
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
