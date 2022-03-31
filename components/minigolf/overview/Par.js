import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Square from './Square';
import { defaultPar } from '../../../data/par';

const Par = (props) => {
  const display = props.usePar;

  if (display) {
    return (
      <View style={styles.container}>
        <Square text="Par" />
        <Square text={defaultPar[0]} />
        <Square text={defaultPar[1]} />
        <Square text={defaultPar[2]} />
        <Square text={defaultPar[3]} />
        <Square text={defaultPar[4]} />
        <Square text={defaultPar[5]} />
        <Square text={defaultPar[6]} />
        <Square text={defaultPar[7]} />
        <Square text={defaultPar[8]} />
        <Square text={defaultPar[9]} />
        <Square text={defaultPar[10]} />
        <Square text={defaultPar[11]} />
        <Square text={defaultPar[12]} />
        <Square text={defaultPar[13]} />
        <Square text={defaultPar[14]} />
        <Square text={defaultPar[15]} />
        <Square text={defaultPar[16]} />
        <Square text={defaultPar[17]} />
        <Square text={defaultPar[18]} />
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    width: 40,
  },
});

export default Par;
