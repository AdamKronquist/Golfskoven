import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import DefaultStyles from '../constants/defaultStyles';
import ScreenTitle from '../components/ScreenTitle';
import { navigate } from '../data/enums';

const RulesMinigolfScreen = (props) => {
  return (
    <BackgroundImage>
      <SafeAreaView style={DefaultStyles.safeAreaStyleTab}>
        <ScreenTitle>{navigate.Rules}</ScreenTitle>
        <ScrollView style={DefaultStyles.scrollContainer}>
          <View style={DefaultStyles.ruleContainer}>
            <View style={DefaultStyles.rowContainer}>
              <View style={DefaultStyles.ruleNrContainer}>
                <Text style={DefaultStyles.mainText}>1.</Text>
              </View>
              <View style={DefaultStyles.ruleTextContainer}>
                <Text style={DefaultStyles.mainText}>
                  Banens par er 61 slag.
                </Text>
              </View>
            </View>
          </View>
          <View style={DefaultStyles.ruleContainer}>
            <View style={DefaultStyles.rowContainer}>
              <View style={DefaultStyles.ruleNrContainer}>
                <Text style={DefaultStyles.mainText}>2.</Text>
              </View>
              <View style={DefaultStyles.ruleTextContainer}>
                <Text style={DefaultStyles.mainText}>
                  De 18 huller spilles i rækkefølge.
                </Text>
              </View>
            </View>
          </View>
          <View style={DefaultStyles.ruleContainer}>
            <View style={DefaultStyles.rowContainer}>
              <View style={DefaultStyles.ruleNrContainer}>
                <Text style={DefaultStyles.mainText}>3.</Text>
              </View>
              <View style={DefaultStyles.ruleTextContainer}>
                <Text style={DefaultStyles.mainText}>
                  Første slag skal spilles et valgfrit sted i udslagsfeltet.
                </Text>
              </View>
            </View>
          </View>
          <View style={DefaultStyles.ruleContainer}>
            <View style={DefaultStyles.rowContainer}>
              <View style={DefaultStyles.ruleNrContainer}>
                <Text style={DefaultStyles.mainText}>4.</Text>
              </View>
              <View style={DefaultStyles.ruleTextContainer}>
                <Text style={DefaultStyles.mainText}>
                  Ét slag tæller ét point.
                </Text>
              </View>
            </View>
          </View>
          <View style={DefaultStyles.ruleContainer}>
            <View style={DefaultStyles.rowContainer}>
              <View style={DefaultStyles.ruleNrContainer}>
                <Text style={DefaultStyles.mainText}>5.</Text>
              </View>
              <View style={DefaultStyles.ruleTextContainer}>
                <Text style={DefaultStyles.mainText}>
                  En spiller har 6 forsøg til at få bolden i hul. Hvis det ikke
                  klares noteres spilleren for 7 slag.
                </Text>
              </View>
            </View>
          </View>
          <View style={DefaultStyles.ruleContainer}>
            <View style={DefaultStyles.rowContainer}>
              <View style={DefaultStyles.ruleNrContainer}>
                <Text style={DefaultStyles.mainText}>6.</Text>
              </View>
              <View style={DefaultStyles.ruleTextContainer}>
                <Text style={DefaultStyles.mainText}>
                  Springer bolden uden for banen, må den lægges et køllehoved
                  ind på banen hvor den sprang ud.
                </Text>
              </View>
            </View>
          </View>
          <View style={DefaultStyles.ruleContainer}>
            <View style={DefaultStyles.rowContainer}>
              <View style={DefaultStyles.ruleNrContainer}>
                <Text style={DefaultStyles.mainText}>7.</Text>
              </View>
              <View style={DefaultStyles.ruleTextContainer}>
                <Text style={DefaultStyles.mainText}>
                  Det giver 1 strafslag, hvis bolden forlader banen.
                </Text>
              </View>
            </View>
          </View>
          <View style={DefaultStyles.ruleContainer}>
            <View style={DefaultStyles.rowContainer}>
              <View style={DefaultStyles.ruleNrContainer}>
                <Text style={DefaultStyles.mainText}>8.</Text>
              </View>
              <View style={DefaultStyles.ruleTextContainer}>
                <Text style={DefaultStyles.mainText}>
                  Hver deltager spiller hullet færdig inden den næste starter.
                </Text>
              </View>
            </View>
          </View>
          <View style={DefaultStyles.ruleContainer}>
            <View style={DefaultStyles.rowContainer}>
              <View style={DefaultStyles.ruleNrContainer}>
                <Text style={DefaultStyles.mainText}>9.</Text>
              </View>
              <View style={DefaultStyles.ruleTextContainer}>
                <Text style={DefaultStyles.mainText}>
                  Laveste score på de 18 huller er vinder af runden.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </BackgroundImage>
  );
};

export default RulesMinigolfScreen;
