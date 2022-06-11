/* eslint-disable prettier/prettier */
import {TextInput, StyleSheet} from 'react-native';
import React from 'react';

const CustomInput = ({placeholder, value, setValue}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: 316,
    height: 47,
    color: 'black',
    borderWidth: 0.5,
    borderRadius: 20,
    borderStyle: 'solid',
    paddingHorizontal: 22,
    paddingTop: 14,
  },
});

export default CustomInput;