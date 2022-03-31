import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MinigolfPlayerTotal from './MinigolfPlayerTotal';
import Colors from '../constants/colors';

const MinigolfDisplayTot = (props) => {
  const playerOneTotal = (
    <MinigolfPlayerTotal
      player={1}
      display={props.display}
      totPlayers={props.players}
      strokes={props.displayPlayerOneTotal}
    />
  );
  const playerTwoTotal = (
    <MinigolfPlayerTotal
      player={2}
      display={props.display}
      totPlayers={props.players}
      strokes={props.displayPlayerTwoTotal}
    />
  );
  const playerThreeTotal = (
    <MinigolfPlayerTotal
      player={3}
      display={props.display}
      totPlayers={props.players}
      strokes={props.displayPlayerThreeTotal}
    />
  );
  const playerFourTotal = (
    <MinigolfPlayerTotal
      player={4}
      display={props.display}
      totPlayers={props.players}
      strokes={props.displayPlayerFourTotal}
    />
  );
  const playerFiveTotal = (
    <MinigolfPlayerTotal
      player={5}
      display={props.display}
      totPlayers={props.players}
      strokes={props.displayPlayerFiveTotal}
    />
  );
  const playerSixTotal = (
    <MinigolfPlayerTotal
      player={6}
      display={props.display}
      totPlayers={props.players}
      strokes={props.displayPlayerSixTotal}
    />
  );

  if (props.display) {
    return (
      <View style={styles.playerStrokesContainer}>
        <View style={styles.headContainer}>
          <Text style={styles.headTextCenter}>Tot</Text>
        </View>
        {playerOneTotal}
        {playerTwoTotal}
        {playerThreeTotal}
        {playerFourTotal}
        {playerFiveTotal}
        {playerSixTotal}
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  playerStrokesContainer: {
    width: 50,
    borderRightWidth: 2,
    borderRightColor: Colors.green,
  },
  headContainer: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.green,
  },
  headTextCenter: {
    fontSize: 20,
    color: Colors.green,
    fontFamily: 'Pluto-Medium',
    textAlign: 'center',
  },
});

export default MinigolfDisplayTot;
