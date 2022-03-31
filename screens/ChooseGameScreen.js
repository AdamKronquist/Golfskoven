import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackgroundImage from '../components/BackgroundImage';
import DefaultStyles from '../constants/defaultStyles';
import { navigate } from '../data/enums';

const ChooseGameScreen = (props) => {
  const navigation = useNavigation();
  return (
    <BackgroundImage>
      <View style={styles.screen}>
        <TouchableOpacity
          style={styles.touchContainer}
          onPress={() => navigation.navigate(navigate.MinigolfSetup)}
        >
          <Text style={DefaultStyles.menuText}>Minigolf</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchContainer}
          onPress={() => navigation.navigate(navigate.Petanque)}
        >
          <Text style={DefaultStyles.menuText}>Petanque</Text>
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
  touchContainer: {
    marginVertical: 20,
  },
});

export default ChooseGameScreen;
