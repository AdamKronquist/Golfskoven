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

const MinigolfPlayerTotal = (props) => {
  if (props.player <= props.totPlayers) {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{props.strokes}</Text>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
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

export default MinigolfPlayerTotal;
