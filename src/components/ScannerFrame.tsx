import React from 'react';
import { View, StyleSheet } from 'react-native';

const ScannerFrame = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.corner, styles.topLeft]} />

      <View style={[styles.corner, styles.topRight]} />

      <View style={[styles.corner, styles.bottomLeft]} />

      <View style={[styles.corner, styles.bottomRight]} />
    </View>
  );
};

export default ScannerFrame;

const SIZE = 260;        
const CORNER = 30;     
const BORDER = 4;       
const COLOR = '#fff';   

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    alignSelf: 'center',
  },

  corner: {
    position: 'absolute',
    width: CORNER,
    height: CORNER,
  },

  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: BORDER,
    borderLeftWidth: BORDER,
    borderColor: COLOR,
  },

  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: BORDER,
    borderRightWidth: BORDER,
    borderColor: COLOR,
  },

  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: BORDER,
    borderLeftWidth: BORDER,
    borderColor: COLOR,
  },

  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: BORDER,
    borderRightWidth: BORDER,
    borderColor: COLOR,
  },
});
