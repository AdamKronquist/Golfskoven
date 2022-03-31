import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const ImageHole = (props) => {
  const GetHoleImage = () => {
    switch (props.hole) {
      case 1:
        return require('../assets/images/holes/1.png');
      case 2:
        return require('../assets/images/holes/2.png');
      case 3:
        return require('../assets/images/holes/3.png');
      case 4:
        return require('../assets/images/holes/4.png');
      case 5:
        return require('../assets/images/holes/5.png');
      case 6:
        return require('../assets/images/holes/6.png');
      case 7:
        return require('../assets/images/holes/7.png');
      case 8:
        return require('../assets/images/holes/8.png');
      case 9:
        return require('../assets/images/holes/9.png');
      case 10:
        return require('../assets/images/holes/10.png');
      case 11:
        return require('../assets/images/holes/11.png');
      case 12:
        return require('../assets/images/holes/12.png');
      case 13:
        return require('../assets/images/holes/13.png');
      case 14:
        return require('../assets/images/holes/14.png');
      case 15:
        return require('../assets/images/holes/15.png');
      case 16:
        return require('../assets/images/holes/16.png');
      case 17:
        return require('../assets/images/holes/17.png');
      case 18:
        return require('../assets/images/holes/18.png');
    }
  };

  return (
    <View style={styles.imageContainer}>
      <Image source={GetHoleImage(props.hole)} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 10,
    marginLeft: 20,
  },
});

export default ImageHole;
