import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlayerStrokes from './PlayerStrokes';
import PlayerPar from './PlayerPar';
import Square from './Square';

const Player = (props) => {
  if (props.player <= props.numOfPlayers) {
    return (
      <View>
        <View style={styles.nameContainer}>
          <Square text={props.name} />
        </View>
        <View style={styles.container}>
          <PlayerStrokes player={props.player} usePar={props.usePar} />
          <PlayerPar player={props.player} usePar={props.usePar} />
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  nameContainer: {
    width: 80,
  },
  container: {
    flexDirection: 'row',
  },
});

export default Player;
