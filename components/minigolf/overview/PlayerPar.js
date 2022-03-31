import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Square from './Square';
import { useSelector } from 'react-redux';
import { defaultPar } from '../../../data/par';

const PlayerPar = (props) => {
  const strokes = useSelector((state) => state.minigolf.strokes);
  const player = props.player - 1;
  const display = props.usePar;

  if (display) {
    return (
      <View style={styles.container}>
        <Square text="Par" />
        <Square
          style={
            strokes[player][0] - defaultPar[0] < 0
              ? styles.underPar
              : strokes[player][0] - defaultPar[0] > 0
              ? styles.overPar
              : styles.equalPar
          }
          text={strokes[player][0] - defaultPar[0]}
        />
        <Square
          style={
            strokes[player][1] - defaultPar[1] < 0
              ? styles.underPar
              : strokes[player][1] - defaultPar[1] > 0
              ? styles.overPar
              : styles.equalPar
          }
          text={strokes[player][1] - defaultPar[1]}
        />
        <Square
          style={
            strokes[player][2] - defaultPar[2] < 0
              ? styles.underPar
              : strokes[player][2] - defaultPar[2] > 0
              ? styles.overPar
              : styles.equalPar
          }
          text={strokes[player][2] - defaultPar[2]}
        />
        <Square
          style={
            strokes[player][3] - defaultPar[3] < 0
              ? styles.underPar
              : strokes[player][3] - defaultPar[3] > 0
              ? styles.overPar
              : styles.equalPar
          }
          text={strokes[player][3] - defaultPar[3]}
        />
        <Square
          style={
            strokes[player][4] - defaultPar[4] < 0
              ? styles.underPar
              : strokes[player][4] - defaultPar[4] > 0
              ? styles.overPar
              : styles.equalPar
          }
          text={strokes[player][4] - defaultPar[4]}
        />
        <Square
          style={
            strokes[player][5] - defaultPar[5] < 0
              ? styles.underPar
              : strokes[player][5] - defaultPar[5] > 0
              ? styles.overPar
              : styles.equalPar
          }
          text={strokes[player][5] - defaultPar[5]}
        />
        <Square
          style={
            strokes[player][6] - defaultPar[6] < 0
              ? styles.underPar
              : strokes[player][6] - defaultPar[6] > 0
              ? styles.overPar
              : styles.equalPar
          }
          text={strokes[player][6] - defaultPar[6]}
        />
        <Square
          style={
            strokes[player][7] - defaultPar[7] < 0
              ? styles.underPar
              : strokes[player][7] - defaultPar[7] > 0
              ? styles.overPar
              : styles.equalPar
          }
          text={strokes[player][7] - defaultPar[7]}
        />
        <Square
          style={
            strokes[player][8] - defaultPar[8] < 0
              ? styles.underPar
              : strokes[player][8] - defaultPar[8] > 0
              ? styles.overPar
              : styles.equalPar
          }
          text={strokes[player][8] - defaultPar[8]}
        />
        <Square
          style={
            strokes[player][9] - defaultPar[9] < 0
              ? styles.underPar
              : strokes[player][9] - defaultPar[9] > 0
              ? styles.overPar
              : styles.equalPar
          }
          text={strokes[player][9] - defaultPar[9]}
        />
        <Square
          style={
            strokes[player][10] - defaultPar[10] < 0
              ? styles.underPar
              : strokes[player][10] - defaultPar[10] > 0
              ? styles.overPar
              : styles.equalPar
          }
          text={strokes[player][10] - defaultPar[10]}
        />
        <Square
          style={
            strokes[player][11] - defaultPar[11] < 0
              ? styles.underPar
              : strokes[player][11] - defaultPar[11] > 0
              ? styles.overPar
              : styles.equalPar
          }
          text={strokes[player][11] - defaultPar[11]}
        />
        <Square
          style={
            strokes[player][12] - defaultPar[12] < 0
              ? styles.underPar
              : strokes[player][12] - defaultPar[12] > 0
              ? styles.overPar
              : styles.equalPar
          }
          text={strokes[player][12] - defaultPar[12]}
        />
        <Square
          style={
            strokes[player][13] - defaultPar[13] < 0
              ? styles.underPar
              : strokes[player][13] - defaultPar[13] > 0
              ? styles.overPar
              : styles.equalPar
          }
          text={strokes[player][13] - defaultPar[13]}
        />
        <Square
          style={
            strokes[player][14] - defaultPar[14] < 0
              ? styles.underPar
              : strokes[player][14] - defaultPar[14] > 0
              ? styles.overPar
              : styles.equalPar
          }
          text={strokes[player][14] - defaultPar[14]}
        />
        <Square
          style={
            strokes[player][15] - defaultPar[15] < 0
              ? styles.underPar
              : strokes[player][15] - defaultPar[15] > 0
              ? styles.overPar
              : styles.equalPar
          }
          text={strokes[player][15] - defaultPar[15]}
        />
        <Square
          style={
            strokes[player][16] - defaultPar[16] < 0
              ? styles.underPar
              : strokes[player][16] - defaultPar[16] > 0
              ? styles.overPar
              : styles.equalPar
          }
          text={strokes[player][16] - defaultPar[16]}
        />
        <Square
          style={
            strokes[player][17] - defaultPar[17] < 0
              ? styles.underPar
              : strokes[player][17] - defaultPar[17] > 0
              ? styles.overPar
              : styles.equalPar
          }
          text={strokes[player][17] - defaultPar[17]}
        />
        <Square
          style={
            strokes[player][18] - defaultPar[18] < 0
              ? styles.underPar
              : strokes[player][18] - defaultPar[18] > 0
              ? styles.overPar
              : styles.equalPar
          }
          text={strokes[player][18] - defaultPar[18]}
        />
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    width: 40,
  },
  overPar: {
    color: 'red',
  },
  underPar: {
    color: 'green',
  },
  equalPar: {
    color: 'black',
  },
});

export default PlayerPar;
