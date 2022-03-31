import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import Colors from '../constants/colors';
import FontSize from '../constants/fontSize';
import FontFamily from '../constants/fontFamily';

const MinigolfPlayerInput = (props) => {
  if (props.player <= props.totPlayers) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          value={props.playerName}
          onChangeText={props.onChangeName}
        />
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
  },
});

export default MinigolfPlayerInput;
