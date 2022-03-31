import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Logo = (props) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  image: {
    width: '90%',
    height: 100,
  },
});

export default Logo;
