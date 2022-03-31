import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import ScoreBoard from '../components/ScoreBoard';
import ImageHole from '../components/ImageHole';
import ImageCourse from '../components/ImageCourse';
import ScoreContainer from '../components/ScoreContainer';
import StrokeCounterContainer from '../components/minigolf/StrokeCounterContainer';
import BackgroundImage from '../components/BackgroundImage';
import Colors from '../constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeHole,
  nextPlayer,
  changeStrokes,
} from '../store/actions/minigolf';
import { defaultPar } from '../data/par';
import { navigate } from '../data/enums';

const MinigolfPlayScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const gameOptions = useSelector((state) => state.minigolf.options);
  const whatHole = useSelector((state) => state.minigolf.whatHole);
  const playerTurn = useSelector((state) => state.minigolf.playerTurn);
  const strokeCounter = useSelector((state) => state.minigolf.strokeCounter);
  const strokes = useSelector((state) => state.minigolf.strokes);
  const [tempStrokes, setTempStrokes] = useState(0);
  const [reRender, setReRender] = useState(0);

  //NYTT!!!!!!!!
  const NextHole = () => {
    if (whatHole < 18) {
      dispatch(changeHole(whatHole + 1));
    } else {
      Alert.alert('Har du spelat färdigt och vill se resultatet?', '', [
        {
          text: 'Ja',
          style: 'cancel',
          onPress: () => navigation.navigate(navigate.Overview),
        },
        { text: 'Nej', style: 'destructive' },
      ]);
    }
  };

  const PreviousHole = () => {
    if (whatHole > 1) {
      dispatch(changeHole(whatHole - 1));
    }
  };

  const NextPlayer = () => {
    if (playerTurn < gameOptions.players) {
      dispatch(nextPlayer(playerTurn + 1));
    }
  };

  const SetPlayer = (player) => {
    dispatch(nextPlayer(player));
  };

  const ChangeStrokes = (player, hole, strokes) => {
    dispatch(changeStrokes(player - 1, hole - 1, strokes));
    NextPlayer();
    setTempStrokes(0);
    setReRender(reRender + 1);
  };

  const DisplayPlayerStrokes = (player) => {
    return strokes[player - 1][whatHole - 1];
  };
  //////////////

  const RaiseTempStrokes = () => {
    if (tempStrokes < 7) {
      setTempStrokes(tempStrokes + 1);
    }
  };

  const [playerOneName, setPlayerOneName] = useState('Spiller 1');
  const [playerTwoName, setPlayerTwoName] = useState('Spiller 2');
  const [playerThreeName, setPlayerThreeName] = useState('Spiller 3');
  const [playerFourName, setPlayerFourName] = useState('Spiller 4');
  const [playerFiveName, setPlayerFiveName] = useState('Spiller 5');
  const [playerSixName, setPlayerSixName] = useState('Spiller 6');

  return (
    <BackgroundImage>
      <View style={styles.backgroundContainer}>
        <ImageCourse hole={whatHole}>
          <ImageHole hole={whatHole} />
          <View style={{ flex: 1 }}></View>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.displayContainer}>
              <ScoreBoard
                players={gameOptions.players}
                playerSelected={playerTurn}
                displayTot={gameOptions.showTotal}
                displayPar={gameOptions.showPar}
                playerOneName={playerOneName}
                onChangePlayerOneName={setPlayerOneName}
                playerTwoName={playerTwoName}
                onChangePlayerTwoName={setPlayerTwoName}
                playerThreeName={playerThreeName}
                onChangePlayerThreeName={setPlayerThreeName}
                playerFourName={playerFourName}
                onChangePlayerFourName={setPlayerFourName}
                playerFiveName={playerFiveName}
                onChangePlayerFiveName={setPlayerFiveName}
                playerSixName={playerSixName}
                onChangePlayerSixName={setPlayerSixName}
                onPressPlayerOne={() => SetPlayer(1)}
                onPressPlayerTwo={() => SetPlayer(2)}
                onPressPlayerThree={() => SetPlayer(3)}
                onPressPlayerFour={() => SetPlayer(4)}
                onPressPlayerFive={() => SetPlayer(5)}
                onPressPlayerSix={() => SetPlayer(6)}
                displayPlayerOneStrokes={DisplayPlayerStrokes(1)}
                displayPlayerTwoStrokes={DisplayPlayerStrokes(2)}
                displayPlayerThreeStrokes={DisplayPlayerStrokes(3)}
                displayPlayerFourStrokes={DisplayPlayerStrokes(4)}
                displayPlayerFiveStrokes={DisplayPlayerStrokes(5)}
                displayPlayerSixStrokes={DisplayPlayerStrokes(6)}
                displayCoursePar={defaultPar[whatHole - 1]}
                displayPlayerOneTotal={strokes[0][18]}
                displayPlayerTwoTotal={strokes[1][18]}
                displayPlayerThreeTotal={strokes[2][18]}
                displayPlayerFourTotal={strokes[3][18]}
                displayPlayerFiveTotal={strokes[4][18]}
                displayPlayerSixTotal={strokes[5][18]}
              />
              <StrokeCounterContainer
                display={gameOptions.showStrokeCounter}
                strokes={tempStrokes}
                onPress={RaiseTempStrokes}
                onLongPress={() => setTempStrokes(0)}
                addStrokes={() =>
                  ChangeStrokes(playerTurn, whatHole, tempStrokes)
                }
              />
              <ScoreContainer
                onPressNr0={() => ChangeStrokes(playerTurn, whatHole, 0)}
                onPressNr1={() => ChangeStrokes(playerTurn, whatHole, 1)}
                onPressNr2={() => ChangeStrokes(playerTurn, whatHole, 2)}
                onPressNr3={() => ChangeStrokes(playerTurn, whatHole, 3)}
                onPressNr4={() => ChangeStrokes(playerTurn, whatHole, 4)}
                onPressNr5={() => ChangeStrokes(playerTurn, whatHole, 5)}
                onPressNr6={() => ChangeStrokes(playerTurn, whatHole, 6)}
                onPressNr7={() => ChangeStrokes(playerTurn, whatHole, 7)}
              />
            </View>
          </View>
        </ImageCourse>
      </View>
      <View style={styles.resetContainer}>
        <TouchableOpacity onPress={PreviousHole}>
          {whatHole > 1 ? <Text style={styles.resetText}>Forrige</Text> : null}
        </TouchableOpacity>
        <TouchableOpacity onPress={NextHole}>
          {whatHole < 18 ? (
            <Text style={styles.resetText}>Næste</Text>
          ) : (
            <Text style={styles.resetText}>Oversigt</Text>
          )}
        </TouchableOpacity>
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    // width: '90%',
    height: 100,
  },
  backgroundContainer: {
    marginTop: 75,
    flex: 1,
  },
  resetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  resetText: {
    fontFamily: 'Pluto-Medium',
    color: Colors.green,
    fontSize: 30,
  },
  displayContainer: {
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginBottom: 30,
  },
});

export default MinigolfPlayScreen;
