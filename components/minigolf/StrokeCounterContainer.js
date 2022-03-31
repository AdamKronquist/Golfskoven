import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Colors from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';

const StrokeCounterContainer = (props) => {
  if (props.display) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Slagtæller:</Text>
        <TouchableOpacity
          onPress={props.onPress}
          onLongPress={props.onLongPress}
        >
          <View style={styles.smallContainer}>
            <ImageBackground
              source={require('../../assets/images/golfball.png')}
              style={styles.bgImage}
            >
              <Text style={styles.counterText}>{props.strokes}</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.addStrokes}>
          <View style={styles.smallContainer}>
            <Ionicons
              name="ios-person-add-sharp"
              size={24}
              color={Colors.green}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginBottom: 10,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterText: {
    color: Colors.green,
    fontSize: 25,
    fontFamily: 'Pluto-Medium',
    textAlign: 'center',
  },
  text: {
    color: Colors.green,
    fontSize: 20,
    fontFamily: 'Pluto-Medium',
  },
  bgImage: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  smallContainer: {
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StrokeCounterContainer;
