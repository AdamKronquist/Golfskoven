import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

const BackgroundImage = (props) => {
  return (
    <ImageBackground
      source={require('../assets/images/background.jpg')}
      style={styles.bgImage}
    >
      {props.children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
});

export default BackgroundImage;
