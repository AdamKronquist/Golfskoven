import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddScore from './AddScore';
import Colors from '../constants/colors';

const ScoreContainer = (props) => {
  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text}>Antal slag</Text>
      </View>
      <View style={styles.row}>
        <AddScore number={0} onPress={props.onPressNr0} />
        {/* <AddScore number={0} press={() => AddPlayerScore(playerSelected, 0)} /> */}
        <AddScore number={1} onPress={props.onPressNr1} />
        <AddScore number={2} onPress={props.onPressNr2} />
        <AddScore number={3} onPress={props.onPressNr3} />
        <AddScore number={4} onPress={props.onPressNr4} />
        <AddScore number={5} onPress={props.onPressNr5} />
        <AddScore number={6} onPress={props.onPressNr6} />
        <AddScore number={7} onPress={props.onPressNr7} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: Colors.green,
    fontSize: 20,
    fontFamily: 'Pluto-Medium',
  },
});

export default ScoreContainer;
