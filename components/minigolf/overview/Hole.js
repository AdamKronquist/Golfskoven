import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Square from './Square';

const Hole = (props) => {
  return (
    <View style={props.usePar === true ? styles.small : styles.wide}>
      <Square text="Hul" />
      <Square text="1" />
      <Square text="2" />
      <Square text="3" />
      <Square text="4" />
      <Square text="5" />
      <Square text="6" />
      <Square text="7" />
      <Square text="8" />
      <Square text="9" />
      <Square text="10" />
      <Square text="11" />
      <Square text="12" />
      <Square text="13" />
      <Square text="14" />
      <Square text="15" />
      <Square text="16" />
      <Square text="17" />
      <Square text="18" />
      <Square text="Total" />
    </View>
  );
};

const styles = StyleSheet.create({
  wide: {
    width: 80,
  },
  small: {
    width: 40,
  },
});

export default Hole;
