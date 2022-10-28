import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function ColorBox({ boxText, boxColor }) {
  const boxBg = {
    backgroundColor: boxColor,
  };
  return (
    <View style={[styles.box, boxBg]}>
      <Text style={styles.boxText}>
        {boxText}: {boxColor}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  boxText: {
    fontWeight: 'bold',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'green',
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ColorBox;
