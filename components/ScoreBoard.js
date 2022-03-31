import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import MinigolfPlayerInput from './MinigolfPlayerInput';
import MinigolfStrokeInput from './MinigolfStrokeInput';
import MinigolfPlayerTotal from './MinigolfPlayerTotal';
import MinigolfDisplayTot from './MinigolfDisplayTot';
import MinigolfDisplayPar from './MinigolfDisplayPar';

const ScoreBoard = (props) => {
  const playerOneInput = (
    <MinigolfPlayerInput
      player={1}
      totPlayers={props.players}
      playerName={props.playerOneName}
      onChangeName={props.onChangePlayerOneName}
    />
  );
  const playerTwoInput = (
    <MinigolfPlayerInput
      player={2}
      totPlayers={props.players}
      playerName={props.playerTwoName}
      onChangeName={props.onChangePlayerTwoName}
    />
  );
  const playerThreeInput = (
    <MinigolfPlayerInput
      player={3}
      totPlayers={props.players}
      playerName={props.playerThreeName}
      onChangeName={props.onChangePlayerThreeName}
    />
  );
  const playerFourInput = (
    <MinigolfPlayerInput
      player={4}
      totPlayers={props.players}
      playerName={props.playerFourName}
      onChangeName={props.onChangePlayerFourName}
    />
  );
  const playerFiveInput = (
    <MinigolfPlayerInput
      player={5}
      totPlayers={props.players}
      playerName={props.playerFiveName}
      onChangeName={props.onChangePlayerFiveName}
    />
  );
  const playerSixInput = (
    <MinigolfPlayerInput
      player={6}
      totPlayers={props.players}
      playerName={props.playerSixName}
      onChangeName={props.onChangePlayerSixName}
    />
  );
  const playerOneStroke = (
    <MinigolfStrokeInput
      player={1}
      totPlayers={props.players}
      playerSelected={props.playerSelected}
      strokes={props.displayPlayerOneStrokes}
      onPress={props.onPressPlayerOne}
    />
  );
  const playerTwoStroke = (
    <MinigolfStrokeInput
      player={2}
      totPlayers={props.players}
      playerSelected={props.playerSelected}
      strokes={props.displayPlayerTwoStrokes}
      onPress={props.onPressPlayerTwo}
    />
  );
  const playerThreeStroke = (
    <MinigolfStrokeInput
      player={3}
      totPlayers={props.players}
      playerSelected={props.playerSelected}
      strokes={props.displayPlayerThreeStrokes}
      onPress={props.onPressPlayerThree}
    />
  );
  const playerFourStroke = (
    <MinigolfStrokeInput
      player={4}
      totPlayers={props.players}
      playerSelected={props.playerSelected}
      strokes={props.displayPlayerFourStrokes}
      onPress={props.onPressPlayerFour}
    />
  );
  const playerFiveStroke = (
    <MinigolfStrokeInput
      player={5}
      totPlayers={props.players}
      playerSelected={props.playerSelected}
      strokes={props.displayPlayerFiveStrokes}
      onPress={props.onPressPlayerFive}
    />
  );
  const playerSixStroke = (
    <MinigolfStrokeInput
      player={6}
      totPlayers={props.players}
      playerSelected={props.playerSelected}
      strokes={props.displayPlayerSixStrokes}
      onPress={props.onPressPlayerSix}
    />
  );
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

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        {/* Kolumnen med spelarnamnen */}
        <View style={styles.playerNameContainer}>
          <View style={styles.headContainer}>
            <Text style={styles.headText}>Navn</Text>
          </View>
          {playerOneInput}
          {playerTwoInput}
          {playerThreeInput}
          {playerFourInput}
          {playerFiveInput}
          {playerSixInput}
        </View>
        {/* Kolumnen där antal slag visas */}
        <View style={styles.playerStrokesContainer}>
          <View style={styles.headContainer}>
            <Text style={styles.headTextCenter}>Slag</Text>
          </View>
          {playerOneStroke}
          {playerTwoStroke}
          {playerThreeStroke}
          {playerFourStroke}
          {playerFiveStroke}
          {playerSixStroke}
        </View>
        {/* Kolimnen där spelarens par visas */}
        <MinigolfDisplayPar
          displayCoursePar={props.displayCoursePar}
          players={props.players}
          display={props.displayPar}
          displayPlayerOneStrokes={props.displayPlayerOneStrokes}
          displayPlayerTwoStrokes={props.displayPlayerTwoStrokes}
          displayPlayerThreeStrokes={props.displayPlayerThreeStrokes}
          displayPlayerFourStrokes={props.displayPlayerFourStrokes}
          displayPlayerFiveStrokes={props.displayPlayerFiveStrokes}
          displayPlayerSixStrokes={props.displayPlayerSixStrokes}
        />
        {/* Kolumnen där totala slag visas */}
        <MinigolfDisplayTot
          displayPlayerOneTotal={props.displayPlayerOneTotal}
          displayPlayerTwoTotal={props.displayPlayerTwoTotal}
          displayPlayerThreeTotal={props.displayPlayerThreeTotal}
          displayPlayerFourTotal={props.displayPlayerFourTotal}
          displayPlayerFiveTotal={props.displayPlayerFiveTotal}
          displayPlayerSixTotal={props.displayPlayerSixTotal}
          players={props.players}
          display={props.displayTot}
        />
        {/* <View style={styles.playerStrokesContainer}>
          <View style={styles.headContainer}>
            <Text style={styles.headTextCenter}>Tot</Text>
          </View>
          {playerOneTotal}
          {playerTwoTotal}
          {playerThreeTotal}
          {playerFourTotal}
          {playerFiveTotal}
          {playerSixTotal}
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '90%',
    marginBottom: 10,
    // backgroundColor: 'rgba(150,150,150,0.5)',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  headContainer: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.green,
  },
  playerNameContainer: {
    // width: 150,
    borderRightWidth: 2,
    borderRightColor: Colors.green,
    flex: 1,
    // height: 'auto',
  },
  playerStrokesContainer: {
    width: 50,
    borderRightWidth: 2,
    borderRightColor: Colors.green,
  },
  headText: {
    fontSize: 20,
    color: Colors.green,
    fontFamily: 'Pluto-Medium',
  },
  headTextCenter: {
    fontSize: 20,
    color: Colors.green,
    fontFamily: 'Pluto-Medium',
    textAlign: 'center',
  },
});

export default ScoreBoard;
