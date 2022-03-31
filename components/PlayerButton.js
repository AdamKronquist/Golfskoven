import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Colors from '../constants/colors';
import FontFamily from '../constants/fontFamily';

const PlayerButton = (props) => {
  const [name, setName] = useState(0);
  return (
    <TouchableWithoutFeedback onPress={props.ChangePlayers}>
      <View
        style={
          props.number === props.numberOfPlayers
            ? styles.backgroundSelected
            : styles.background
        }
      >
        <Text style={styles.text}>{props.number}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  background: {
    elevation: 5,
    backgroundColor: 'rgb(150,150,150)',
    width: 80,
    height: 80,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.3,
  },
  backgroundSelected: {
    backgroundColor: 'rgb(150,150,150)',
    width: 80,
    height: 80,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
  },
  text: {
    fontFamily: FontFamily.main,
    fontSize: 40,
    color: Colors.green,
  },
});

export default PlayerButton;
