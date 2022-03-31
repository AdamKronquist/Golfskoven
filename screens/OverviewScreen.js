import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HolePar from '../components/minigolf/overview/HolePar';
import Player from '../components/minigolf/overview/Player';
import { useSelector } from 'react-redux';
import Colors from '../constants/colors';
import { navigate } from '../data/enums';
import BackgroundImage from '../components/BackgroundImage';

const OverviewScreen = ({ navigation }) => {
  const usePar = useSelector((state) => state.minigolf.options.showPar);
  const numOfPlayers = useSelector((state) => state.minigolf.options.players);

  return (
    <BackgroundImage>
      <View style={styles.screen}>
        <View style={styles.result}>
          <View style={styles.container}>
            <HolePar usePar={usePar} />
            <Player
              name="Spiller 1"
              player={1}
              usePar={usePar}
              numOfPlayers={numOfPlayers}
            />
            <Player
              name="Spiller 2"
              player={2}
              usePar={usePar}
              numOfPlayers={numOfPlayers}
            />
            <Player
              name="Spiller 3"
              player={3}
              usePar={usePar}
              numOfPlayers={numOfPlayers}
            />
            <Player
              name="Spiller 4"
              player={4}
              usePar={usePar}
              numOfPlayers={numOfPlayers}
            />
            <Player
              name="Spiller 5"
              player={5}
              usePar={usePar}
              numOfPlayers={numOfPlayers}
            />
            <Player
              name="Spiller 6"
              player={6}
              usePar={usePar}
              numOfPlayers={numOfPlayers}
            />
          </View>
        </View>
        <View style={styles.resetContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigate.Result)}
          >
            <Text style={styles.resetText}>Resultat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  result: {
    marginTop: 75,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
  },
  scrollContainer: {
    paddingLeft: 20,
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

export default OverviewScreen;
