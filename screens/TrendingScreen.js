import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TrendingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Trending Screen</Text>
    </View>
  );
};

export default TrendingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e5ea',
  },
});
