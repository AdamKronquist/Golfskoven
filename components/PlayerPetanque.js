import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import colors from '../constants/colors';
import Colors from '../constants/colors';

const PlayerPetanque = (props) => {
  return (
    <View style={styles.playerContainer}>
      <ScrollView>
        <TextInput
          value={props.playerName}
          onChangeText={props.changePlayerName}
          maxLength={10}
          selectTextOnFocus={true}
          style={styles.inputField}
          underlineColorAndroid="transparent"
        />
        <View style={styles.rowContainer}>
          <View style={styles.pointsContainer}>
            <Text style={styles.pointsText}>{props.points}</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={props.addPoints}>
              <Text style={styles.iconSize}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.removePoints}>
              <Text style={styles.iconSize}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  playerContainer: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputField: {
    width: '100%',
    fontFamily: 'Pluto-Medium',
    color: Colors.green,
    fontSize: 40,
    textAlign: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: -20,
  },
  pointsText: {
    fontSize: 100,
    color: Colors.green,
  },
  iconSize: {
    fontSize: 60,
    color: colors.green,
  },
  pointsContainer: {
    width: '50%',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default PlayerPetanque;
