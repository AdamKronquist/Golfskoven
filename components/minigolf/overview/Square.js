import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Square = (props) => {
  return (
    <View style={styles.style}>
      <Text style={{ ...props.style }}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  style: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    // width: 40,
    alignItems: 'center',
  },
});

export default Square;
