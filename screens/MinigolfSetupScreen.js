import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import PlayerButton from '../components/PlayerButton';
import BackgroundImage from '../components/BackgroundImage';
import Colors from '../constants/colors';
import FontFamily from '../constants/fontFamily';
import DefaultStyles from '../constants/defaultStyles';
import Fontsize from '../constants/fontSize';
import { useNavigation } from '@react-navigation/native';
import { navigate } from '../data/enums';
import { useDispatch } from 'react-redux';
import { newGame } from '../store/actions/minigolf';
import ScreenTitle from '../components/ScreenTitle';

const MinigolfSetupScreen = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  const [showTotal, setShowTotal] = useState(false);
  const [showPar, setShowPar] = useState(false);
  const [showCounter, setShowCounter] = useState(false);

  const NewGame = () => {
    dispatch(
      newGame({
        players: numberOfPlayers,
        showTotal: showTotal,
        showPar: showPar,
        showStrokeCounter: showCounter,
      })
    );
    navigation.navigate(navigate.Minigolf);
  };
  return (
    <BackgroundImage>
      <SafeAreaView style={DefaultStyles.safeAreaStyle}>
        <ScreenTitle>Antal spillere:</ScreenTitle>
        <View style={styles.screen}>
          <View style={styles.rowContainerNumber}>
            <PlayerButton
              number={1}
              ChangePlayers={() => setNumberOfPlayers(1)}
              numberOfPlayers={numberOfPlayers}
            />
            <PlayerButton
              number={2}
              ChangePlayers={() => setNumberOfPlayers(2)}
              numberOfPlayers={numberOfPlayers}
            />
            <PlayerButton
              number={3}
              ChangePlayers={() => setNumberOfPlayers(3)}
              numberOfPlayers={numberOfPlayers}
            />
          </View>
          <View style={styles.rowContainerNumber}>
            <PlayerButton
              number={4}
              ChangePlayers={() => setNumberOfPlayers(4)}
              numberOfPlayers={numberOfPlayers}
            />
            <PlayerButton
              number={5}
              ChangePlayers={() => setNumberOfPlayers(5)}
              numberOfPlayers={numberOfPlayers}
            />
            <PlayerButton
              number={6}
              ChangePlayers={() => setNumberOfPlayers(6)}
              numberOfPlayers={numberOfPlayers}
            />
          </View>
          <View style={styles.rowContainerSwitch}>
            <Text style={styles.text}>Vis total:</Text>
            <Switch
              value={showTotal}
              onValueChange={(newValue) => setShowTotal(newValue)}
              trackColor={{ true: Colors.green }}
              thumbColor="white"
            />
          </View>
          <View style={styles.rowContainerSwitch}>
            <Text style={styles.text}>Vis par:</Text>
            <Switch
              value={showPar}
              onValueChange={(newValue) => setShowPar(newValue)}
              trackColor={{ true: Colors.green }}
              thumbColor="white"
            />
          </View>
          <View style={styles.rowContainerSwitch}>
            <Text style={styles.text}>Slagtæller:</Text>
            <Switch
              value={showCounter}
              onValueChange={(newValue) => setShowCounter(newValue)}
              trackColor={{ true: Colors.green }}
              thumbColor="white"
            />
          </View>
        </View>
        <View style={styles.resetContainer}>
          <TouchableOpacity onPress={NewGame}>
            <Text style={styles.resetText}>Start</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  rowContainerNumber: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rowContainerSwitch: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 0,
  },
  text: {
    color: Colors.green,
    fontFamily: FontFamily.main,
    fontSize: Fontsize.main,
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

export default MinigolfSetupScreen;
