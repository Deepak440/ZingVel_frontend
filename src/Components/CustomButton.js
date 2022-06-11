/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import React from 'react';
import {Button} from '@rneui/base';

const CustomButton = ({onPress, text, type = 'PRIMARY'}) => {
  return (
    <Button
      title={text}
      loading={false}
      buttonStyle={styles[`button_${type}`]}
      titleStyle={styles[`text_${type}`]}
      containerStyle={styles.container}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    height: 47,
    width: 316,
    marginVertical: 10,
  },
  button_PRIMARY: {
    backgroundColor: '#FCA21A',
    borderRadius: 25,
  },
  button_TERTIARY: {
    backgroundColor: 'white',
    borderRadius: 25,
  },
  text_PRIMARY: {
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 17.58,
    textAlign: 'center',
  },
  text_TERTIARY: {
    fontWeight: 'normal',
    fontSize: 15,
    color: 'black',
  },
});

export default CustomButton;