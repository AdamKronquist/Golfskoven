import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../constants/colors';

import RulesMinigolfScreen from '../screens/RulesMinigolfScreen';
import RulesPetanqueScreen from '../screens/RulesPetanqueScreen';

const Tab = createBottomTabNavigator();

function RulesNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.green,
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          elevation: 0,
          borderTopColor: Colors.green,
        },
      }}
    >
      <Tab.Screen
        name="Minigolf"
        component={RulesMinigolfScreen}
        label
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'md-golf' : 'md-golf-outline'}
                size={24}
                color={focused ? Colors.green : 'grey'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Petanque"
        component={RulesPetanqueScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'md-basketball' : 'md-basketball-outline'}
                size={24}
                color={focused ? Colors.green : 'grey'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default RulesNavigator;
