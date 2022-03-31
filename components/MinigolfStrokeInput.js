import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import Colors from '../constants/colors';
import FontSize from '../constants/fontSize';
import FontFamily from '../constants/fontFamily';

const MinigolfStrokeInput = (props) => {
  if (props.player <= props.totPlayers) {
    return (
      <View
        style={
          props.playerSelected === props.player
            ? styles.containerSelected
            : styles.containerUnselected
        }
      >
        <TouchableWithoutFeedback onPress={props.onPress}>
          <Text style={styles.text}>{props.strokes}</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  containerSelected: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.green,
    backgroundColor: 'rgba(100,100,100,0.5)',
  },
  containerUnselected: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.green,
  },
  text: {
    color: Colors.green,
    fontSize: FontSize.main,
    fontFamily: FontFamily.main,
    textAlign: 'center',
  },
});

export default MinigolfStrokeInput;
