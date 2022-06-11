/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Myheading from '../Components/MyHeading';
import PhoneInput from '../Components/PhoneInput';
import CustomButton from '../Components/CustomButton';
import SocialIcons from '../Components/SocialIcons';

const LoginScreen = () => {
  const [phoneNum, setPhoneNum] = useState('');
  const onSignInPressed = () => {
    console.warn('Sign In');
  };

  return (
    <View style={styles.root}>
      <Myheading
        text1="Welcome Back"
        text2="Enter your Phone number to sign in"
      />
      <View style={styles.phoneCont}>
        <PhoneInput
          placeholder="Phone Number"
          value={phoneNum}
          setValue={setPhoneNum}
        />
      </View>
      <View style={styles.loginCont}>
        <CustomButton text="LOGIN" onPress={onSignInPressed} />
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <View>
          <Text style={styles.lineText}>OR</Text>
        </View>
        <View style={styles.line} />
      </View>
      <SocialIcons />
      <View style={styles.bottomText}>
        <Text style={[styles.toRegister]}>Don't have an account yet? </Text>
        <Text style={styles.login}>Register</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  phoneCont: {
    marginTop: 45,
  },
  loginCont: {
    marginTop: 25,
    marginBottom: 50,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    width: 121,
  },
  lineText: {
    textAlign: 'center',
    color: 'black',
    marginLeft: 21,
    marginRight: 21,
    width: 21,
  },
  box: {
    color: 'black',
    borderColor: 'black',
    borderWidth: 0.5,
    borderStyle: 'solid',
    tintColors: 'black',
  },
  checkb: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbText: {
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: '400',
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 14.06,
    textAlign: 'center',
  },
  toRegister: {
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: '400',
    lineHeight: 16.41,
    fontSize: 14,
    marginTop: 54,
  },
  bottomText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbLink: {
    color: 'black',
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 14.06,
    textAlign: 'center',
  },
  login: {
    marginTop: 54,
    lineHeight: 16.41,
    color: 'black',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '700',
  },
});

export default LoginScreen;