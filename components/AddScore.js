import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';

import Colors from '../constants/colors';
import FontSize from '../constants/fontSize';
import FontFamily from '../constants/fontFamily';

const AddScore = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.green,
    fontSize: FontSize.main,
    fontFamily: FontFamily.main,
  },
  container: {
    width: 35,
    alignItems: 'center',
  },
});

export default AddScore;
