import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import Colors from '../constants/colors';
import FontSize from '../constants/fontSize';
import FontFamily from '../constants/fontFamily';

const MinigolfPlayerPar = (props) => {
  if (props.player <= props.totPlayers) {
    return (
      <View style={styles.container}>
        <View>
          {props.strokes > 0 ? (
            <Text
              style={
                props.strokes < props.par
                  ? styles.textUnderPar
                  : props.strokes > props.par
                  ? styles.textOverPar
                  : styles.textEqualPar
              }
            >
              {props.strokes - props.par}
            </Text>
          ) : (
            <Text style={styles.textEqualPar}> </Text>
          )}
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.green,
  },
  textEqualPar: {
    color: Colors.green,
    backgroundColor: 'transparent',
    fontSize: FontSize.main,
    fontFamily: FontFamily.main,
    textAlign: 'center',
  },
  textUnderPar: {
    color: Colors.green,
    backgroundColor: 'rgba(0,255,0, 0.4)',
    fontSize: FontSize.main,
    fontFamily: FontFamily.main,
    textAlign: 'center',
  },
  textOverPar: {
    color: Colors.green,
    backgroundColor: 'rgba(255,0,0, 0.4)',
    fontSize: FontSize.main,
    fontFamily: FontFamily.main,
    textAlign: 'center',
  },
});

export default MinigolfPlayerPar;
