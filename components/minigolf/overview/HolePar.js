import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Hole from './Hole';
import Par from './Par';
import Square from './Square';

const HolePar = (props) => {
  return (
    <View>
      <View style={styles.nameContainer}>
        <Square text=" " />
      </View>
      <View style={styles.container}>
        <Hole usePar={props.usePar} />
        <Par usePar={props.usePar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameContainer: {
    width: 80,
  },
  container: {
    flexDirection: 'row',
  },
});

export default HolePar;
