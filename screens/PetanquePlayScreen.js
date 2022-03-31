import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import Colors from '../constants/colors';
// import { useNavigation } from '@react-navigation/native';
import BackgroundImage from '../components/BackgroundImage';
import PlayerPetanque from '../components/PlayerPetanque';
import DefaultStyles from '../constants/defaultStyles';
import ScreenTitle from '../components/ScreenTitle';
import { navigate } from '../data/enums';
import { useDispatch, useSelector } from 'react-redux';
import { addScore, removeScore, resetScore } from '../store/actions/petanque';

const PetanquePlayScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  const score = useSelector((state) => state.petanque.score);
  const [reRender, setReRender] = useState(0);
  const [playerOneName, setPlayerOneName] = useState('Spelare 1');
  const [playerTwoName, setPlayerTwoName] = useState('Spelare 2');

  const AddScore = (player) => {
    if (score[player - 1] < 13) {
      dispatch(addScore(player - 1));
      setReRender(reRender + 1);
      if (score[player - 1] === 13) {
        WinMessage(playerOneName);
      }
    }
  };

  const RemoveScore = (player) => {
    if (score[player - 1] > 0) {
      dispatch(removeScore(player - 1));
      setReRender(reRender + 1);
    }
  };

  const ResetScore = () => {
    dispatch(resetScore());
    setReRender(reRender + 1);
  };

  const WinMessage = (playerName) => {
    Alert.alert(playerName + ' har vunnit!', '', [
      { text: 'Avsluta', onPress: () => navigation.navigate('Main') },
      { text: 'Spela igen', onPress: ResetScore },
    ]);
  };

  const ResetMessage = () => {
    Alert.alert(
      'Nollställa poäng',
      'Är du säker på att du vill nollställa poängen?',
      [{ text: 'Ja', onPress: ResetScore }, { text: 'Nej' }]
    );
  };

  return (
    <BackgroundImage>
      <SafeAreaView style={DefaultStyles.safeAreaStyle}>
        <ScreenTitle>{navigate.Petanque}</ScreenTitle>
        <View style={styles.screen}>
          <PlayerPetanque
            playerName={playerOneName}
            changePlayerName={setPlayerOneName}
            points={score[0]}
            addPoints={() => AddScore(1)}
            removePoints={() => RemoveScore(1)}
          />
          <PlayerPetanque
            playerName={playerTwoName}
            changePlayerName={setPlayerTwoName}
            points={score[1]}
            addPoints={() => AddScore(2)}
            removePoints={() => RemoveScore(2)}
          />
        </View>
        <View style={styles.resetContainer}>
          <TouchableOpacity onPress={ResetMessage}>
            <Text style={styles.resetText}>Nollställ</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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

export default PetanquePlayScreen;
