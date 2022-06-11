/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Myheading = ({text1, text2}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLarge}>{text1}</Text>
      <Text style={styles.textSmall}>{text2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textLarge: {
    marginTop: 165,
    fontFamily: 'Lato-Bold',
    fontStyle: 'normal',
    fontSize: 18,
    marginBottom: 15,
    fontWeight: '800',
    letterSpacing: 1,
    lineHeight: 22,
    color: '#222222',
  },
  textSmall: {
    fontFamily: 'Roboto-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#515151',
  },
});

export default Myheading;