import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../constants/colors';
import FontFamily from '../constants/fontFamily';
import { navigate } from '../data/enums';

import AboutGolfskovenScreen from '../screens/AboutGolfskovenScreen';
import ChooseGameScreen from '../screens/ChooseGameScreen';
import MainMenuScreen from '../screens/MainMenuScreen';
import RulesScreen from '../screens/RulesScreen';
import PetanquePlayScreen from '../screens/PetanquePlayScreen';
import MinigolfSetupScreen from '../screens/MinigolfSetupScreen';
import MinigolfPlayScreen from '../screens/MinigolfPlayScreen';
import OverviewScreen from '../screens/OverviewScreen';
import ResultScreen from '../screens/ResultScreen';
import BackgroundImage from '../components/BackgroundImage';
import fontFamily from '../constants/fontFamily';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 250, height: 57, marginTop: 10, marginLeft: -10 }}
      source={require('../assets/images/logo.png')}
    />
  );
}

function Navigator() {
  return (
    <BackgroundImage>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: Colors.green,
            headerShadowVisible: false,
            headerTransparent: true,
            headerTitleStyle: { fontFamily: FontFamily.head, fontSize: 30 },
          }}
        >
          <Stack.Screen
            name={navigate.Main}
            component={MainMenuScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={navigate.About}
            component={AboutGolfskovenScreen}
            options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
          <Stack.Screen
            name={navigate.ChooseGame}
            component={ChooseGameScreen}
            options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
          <Stack.Screen
            name={navigate.Rules}
            component={RulesScreen}
            options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
          <Stack.Screen
            name={navigate.Petanque}
            component={PetanquePlayScreen}
            options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
          <Stack.Screen
            name={navigate.MinigolfSetup}
            component={MinigolfSetupScreen}
            options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
          <Stack.Screen
            name={navigate.Minigolf}
            component={MinigolfPlayScreen}
          />
          <Stack.Screen name={navigate.Overview} component={OverviewScreen} />
          <Stack.Screen name={navigate.Result} component={ResultScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BackgroundImage>
  );
}

export default Navigator;
