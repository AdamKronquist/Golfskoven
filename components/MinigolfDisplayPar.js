import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MinigolfPlayerPar from './MinigolfPlayerPar';
import Colors from '../constants/colors';

const MinigolfDisplayPar = (props) => {
  const playerOnePar = (
    <MinigolfPlayerPar
      player={1}
      display={props.display}
      totPlayers={props.players}
      strokes={props.displayPlayerOneStrokes}
      par={props.displayCoursePar}
    />
  );
  const playerTwoPar = (
    <MinigolfPlayerPar
      player={2}
      display={props.display}
      totPlayers={props.players}
      strokes={props.displayPlayerTwoStrokes}
      par={props.displayCoursePar}
    />
  );
  const playerThreePar = (
    <MinigolfPlayerPar
      player={3}
      display={props.display}
      totPlayers={props.players}
      strokes={props.displayPlayerThreeStrokes}
      par={props.displayCoursePar}
    />
  );
  const playerFourPar = (
    <MinigolfPlayerPar
      player={4}
      display={props.display}
      totPlayers={props.players}
      strokes={props.displayPlayerFourStrokes}
      par={props.displayCoursePar}
    />
  );
  const playerFivePar = (
    <MinigolfPlayerPar
      player={5}
      display={props.display}
      totPlayers={props.players}
      strokes={props.displayPlayerFiveStrokes}
      par={props.displayCoursePar}
    />
  );
  const playerSixPar = (
    <MinigolfPlayerPar
      player={6}
      display={props.display}
      totPlayers={props.players}
      strokes={props.displayPlayerSixStrokes}
      par={props.displayCoursePar}
    />
  );

  if (props.display) {
    return (
      <View style={styles.playerStrokesContainer}>
        <View style={styles.headContainer}>
          <Text style={styles.headTextCenter}>Par</Text>
        </View>
        {playerOnePar}
        {playerTwoPar}
        {playerThreePar}
        {playerFourPar}
        {playerFivePar}
        {playerSixPar}
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

export default MinigolfDisplayPar;
