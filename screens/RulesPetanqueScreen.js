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
                  Der spilles i to hold: Single 1 mod 1 eller Double 2 mod 2,
                  hvor hver spiller har 3 kugler. Triple er 3 mod 3 med 2 kugler
                  hver.
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
                  Petanque går ud på at kaste kugler så tæt på grisen som
                  muligt.
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
                  I placerer den store ring i gruset, og herfra foregår alle
                  kast med begge fødder indenfor ringen.
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
                  Første spiller kaster grisen. Derefter kaster samme spiller
                  sin første kugle så tæt på grisen som muligt. Nu kaster
                  modstanderen en kugle og prøver at få sin kugle tættere på
                  grisen, eller skyde modstanderens kugle længere væk.
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
                  Det hold som ligger længst fra grisen, fortsætter med at kaste
                  til de får en kugle nærmest. Herefter kommer det andet hold
                  til.
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
                  Når et hold ikke har flere kugler tilbage, kaster det andet
                  hold resten af sine kugler.
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
                  Når alle kugler er kastet, tælles der point. Kun ét hold får
                  point i hver runde. Det hold der ligger tættest på grisen får
                  1 point for alle kugler der ligger ættest på grisen.
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
                  Vinderen er det hold der først samler 13 points, og har så
                  retten til at kaste "grisen" til et nyt spil.
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
