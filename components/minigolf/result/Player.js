import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DefaultStyles from '../../../constants/defaultStyles';

const Player = (props) => {
  if (props.totStrokes > 0) {
    return (
      <View style={styles.screen}>
        <Text style={DefaultStyles.mainText}>
          {props.pos}. {props.playerName}, {props.totStrokes} slag (par{' '}
          {props.totPar})
        </Text>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  screen: {},
});

export default Player;
