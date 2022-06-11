/* eslint-disable prettier/prettier */
import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const PhoneInput = ({placeholder, value, setValue}) => {
  return (
    <View style={styles.phoneNumber}>
      <TextInput value="+91" editable={false} style={styles.countryCode} />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: 227.03,
    height: 45,
    color: 'black',
    borderWidth: 0.5,
    borderRadius: 20,
    borderStyle: 'solid',
    paddingHorizontal: 21.03,
    paddingTop: 14,
  },
  phoneNumber: {
    width: 316,
    marginTop: 25,
    height: 47,
    marginBottom: 20,
    flexDirection: 'row',
  },
  countryCode: {
    width: 78.74,
    height: 45,
    marginRight: 10.23,
    borderWidth: 0.5,
    paddingHorizontal: 21,
    borderRadius: 20,
    borderStyle: 'solid',
  },
});

export default PhoneInput;