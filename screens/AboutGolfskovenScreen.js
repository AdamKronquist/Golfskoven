import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import Colors from '../constants/colors';
import FontSize from '../constants/fontSize';
import FontFamily from '../constants/fontFamily';
import DefaultStyles from '../constants/defaultStyles';
import ScreenTitle from '../components/ScreenTitle';
import { navigate } from '../data/enums';

const AboutGolfskovenScreen = (props) => {
  return (
    <BackgroundImage>
      <SafeAreaView style={DefaultStyles.safeAreaStyle}>
        <ScreenTitle>{navigate.About}</ScreenTitle>
        <ScrollView style={styles.scroll}>
          <View style={styles.container}>
            <Text style={styles.text}>
              Golfskoven er 3.500 m² indendørs natur, aktivitet og underholdning
              under samme tag. Hos os kan I styrke sammenholdet og udfordre
              hinanden i adventure golf, pool, og petanque. Når I bliver sultne,
              tørstige eller trænger til at hvile benene, er det blevet picnic
              tid. Caféhøjen er oasen hvor I får den velfortjente pause og her
              kan I købe lette anretninger og drikkevarer.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  scroll: {
    height: '80%',
  },
  container: {
    marginHorizontal: 10,
  },
  text: {
    fontFamily: FontFamily.menu,
    color: Colors.green,
    fontSize: FontSize.main,
    textAlign: 'center',
  },
});

export default AboutGolfskovenScreen;
