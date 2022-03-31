import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontSize from '../constants/fontSize';
import Colors from '../constants/colors';
import FontFamily from '../constants/fontFamily';

const PageTitle = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FontFamily.menu,
    fontSize: FontSize.menu,
    color: Colors.green,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default PageTitle;
