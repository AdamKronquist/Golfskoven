import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Player from '../components/minigolf/result/Player';
import { defaultPar } from '../data/par';
import BackgroundImage from '../components/BackgroundImage';
import Logo from '../components/Logo';
import Colors from '../constants/colors';
import { navigate } from '../data/enums';

const ResultScreen = ({ navigation }) => {
  const strokes = useSelector((state) => state.minigolf.strokes);
  const standings = [];

  for (let i = 0; i < strokes.length; i++) {
    standings.push({ position: 0, name: 'Adam ' + i, strokes: strokes[i][18] });
  }

  console.log(standings);
  standings.sort(function (a, b) {
    return a.strokes - b.strokes;
  });

  let pos = 1;
  for (let i = 0; i < standings.length; i++) {
    if (standings[i].strokes > 0) {
      standings[i].position = pos;
      pos++;
    }
  }
  console.log(standings);

  return (
    <BackgroundImage>
      <View style={{ marginTop: 50 }}>
        <Logo />
      </View>
      <View style={styles.screen}>
        <Player
          pos={standings[0].position}
          playerName={standings[0].name}
          totStrokes={standings[0].strokes}
          totPar={standings[0].strokes - defaultPar[18]}
        />
        <Player
          pos={standings[1].position}
          playerName={standings[1].name}
          totStrokes={standings[1].strokes}
          totPar={standings[1].strokes - defaultPar[18]}
        />
        <Player
          pos={standings[2].position}
          playerName={standings[2].name}
          totStrokes={standings[2].strokes}
          totPar={standings[2].strokes - defaultPar[18]}
        />
        <Player
          pos={standings[3].position}
          playerName={standings[3].name}
          totStrokes={standings[3].strokes}
          totPar={standings[3].strokes - defaultPar[18]}
        />
        <Player
          pos={standings[4].position}
          playerName={standings[4].name}
          totStrokes={standings[4].strokes}
          totPar={standings[4].strokes - defaultPar[18]}
        />
        <Player
          pos={standings[5].position}
          playerName={standings[5].name}
          totStrokes={standings[5].strokes}
          totPar={standings[5].strokes - defaultPar[18]}
        />
      </View>
      <View style={styles.resetContainer}>
        <TouchableOpacity onPress={() => navigation.navigate(navigate.Main)}>
          <Text style={styles.resetText}>Menu</Text>
        </TouchableOpacity>
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  resetText: {
    fontFamily: 'Pluto-Medium',
    color: Colors.green,
    fontSize: 30,
  },
});

export default ResultScreen;
