import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Square from './Square';
import { useSelector } from 'react-redux';

const PlayerStrokes = (props) => {
  const strokes = useSelector((state) => state.minigolf.strokes);
  const player = props.player - 1;
  return (
    <View style={props.usePar === true ? styles.small : styles.wide}>
      <Square text="Slag" />
      <Square text={strokes[player][0]} />
      <Square text={strokes[player][1]} />
      <Square text={strokes[player][2]} />
      <Square text={strokes[player][3]} />
      <Square text={strokes[player][4]} />
      <Square text={strokes[player][5]} />
      <Square text={strokes[player][6]} />
      <Square text={strokes[player][7]} />
      <Square text={strokes[player][8]} />
      <Square text={strokes[player][9]} />
      <Square text={strokes[player][10]} />
      <Square text={strokes[player][11]} />
      <Square text={strokes[player][12]} />
      <Square text={strokes[player][13]} />
      <Square text={strokes[player][14]} />
      <Square text={strokes[player][15]} />
      <Square text={strokes[player][16]} />
      <Square text={strokes[player][17]} />
      <Square text={strokes[player][18]} />
    </View>
  );
};

const styles = StyleSheet.create({
  wide: {
    width: 80,
  },
  small: {
    width: 40,
  },
});

export default PlayerStrokes;
