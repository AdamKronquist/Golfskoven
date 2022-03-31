import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const ImageCourse = (props) => {
  const GetCourseImage = () => {
    switch (props.hole) {
      case 1:
        return require('../assets/images/courses/1.png');
      case 2:
        return require('../assets/images/courses/2.png');
      case 3:
        return require('../assets/images/courses/3.png');
      case 4:
        return require('../assets/images/courses/4.png');
      case 5:
        return require('../assets/images/courses/5.png');
      case 6:
        return require('../assets/images/courses/6.png');
      case 7:
        return require('../assets/images/courses/7.png');
      case 8:
        return require('../assets/images/courses/8.png');
      case 9:
        return require('../assets/images/courses/9.png');
      case 10:
        return require('../assets/images/courses/10.png');
      case 11:
        return require('../assets/images/courses/11.png');
      case 12:
        return require('../assets/images/courses/12.png');
      case 13:
        return require('../assets/images/courses/13.png');
      case 14:
        return require('../assets/images/courses/14.png');
      case 15:
        return require('../assets/images/courses/15.png');
      case 16:
        return require('../assets/images/courses/16.png');
      case 17:
        return require('../assets/images/courses/17.png');
      case 18:
        return require('../assets/images/courses/18.png');
    }
  };

  return (
    <ImageBackground source={GetCourseImage(props.hole)} style={styles.image}>
      {props.children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '103%',
  },
});

export default ImageCourse;
