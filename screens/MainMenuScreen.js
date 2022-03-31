import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import BackgroundImage from '../components/BackgroundImage';
import Logo from '../components/Logo';
import DefaultStyles from '../constants/defaultStyles';
import { navigate } from '../data/enums';
import { resetStore, endMinigolf } from '../store/actions/minigolf';
import { useDispatch, useSelector } from 'react-redux';

const MainMenuScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const isPlayingMinigolf = useSelector((state) => state.minigolf.isPlaying);
  const [visible, setVisible] = useState(true);

  const Reset = () => {
    dispatch(resetStore());
  };

  const EndMinigolf = () => {
    dispatch(endMinigolf());
    console.log(isPlayingMinigolf);
    console.log('HEJ');
  };

  let experiment = (
    <TouchableOpacity
      style={styles.touchContainer}
      onPress={() => navigation.navigate(navigate.Minigolf)}
    >
      <Text style={DefaultStyles.menuText}>Fortsæt spil</Text>
    </TouchableOpacity>
  );

  if (!isPlayingMinigolf) {
    experiment = (
      <TouchableOpacity activeOpacity={1} style={styles.touchContainer}>
        <View style={styles.unselectedContainer}>
          <Text style={DefaultStyles.menuText}>Fortsæt spil</Text>
        </View>
      </TouchableOpacity>
    );
  }

  let omOs = 'os';
  // const navigation = useNavigation();
  return (
    <BackgroundImage>
      <Logo />
      <View style={styles.screen}>
        <StatusBar style="auto" />
        {/* <Button title="Avsluta spel" onPress={EndMinigolf} />
        <Button title="Reset store" onPress={Reset} /> */}
        <TouchableOpacity
          style={styles.touchContainer}
          onPress={() => navigation.navigate(navigate.ChooseGame)}
        >
          <Text style={DefaultStyles.menuText}>Nyt spil</Text>
        </TouchableOpacity>
        {experiment}
        <TouchableOpacity
          style={styles.touchContainer}
          onPress={() => navigation.navigate(navigate.Rules)}
        >
          <Text style={DefaultStyles.menuText}>Regler</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchContainer}
          onPress={() => navigation.navigate(navigate.About)}
          // onPress={() => navigation.navigate(`Om ${omOs}`)}
        >
          <Text style={DefaultStyles.menuText}>Om Golfskoven</Text>
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
  unselectedContainer: {
    opacity: 0.5,
  },
});

export default MainMenuScreen;
