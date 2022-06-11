/* eslint-disable prettier/prettier */
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

const SocialIcons = () => {
  return (
    <View style={styles.box}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert('you clicked me');
          }}>
          <Image
            style={styles.container}
            source={require('../../assets/images/facebook.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.box1}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert('you clicked me');
          }}>
          <Image
            style={styles.container}
            source={require('../../assets/images/google.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.box2}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert('you clicked me');
          }}>
          <Image
            style={styles.container}
            source={require('../../assets/images/insta.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    height: 56,
    width: 56,
    borderRadius: 56,
  },
  box1: {
    marginLeft: 30,
  },
  box2: {
    marginLeft: 30,
  },
});

export default SocialIcons;