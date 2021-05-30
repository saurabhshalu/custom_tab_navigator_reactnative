import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FavouriteScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Favourite Screen</Text>
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e5ea',
  },
});
