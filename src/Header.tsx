import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const logo = require('../assets/logo.png');
const profilePicture = require('../assets/profile.png');

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={logo} style={styles.logo} resizeMode='contain' />
      <Image source={profilePicture} style={styles.profilePicture} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 55,
    paddingBottom: 10,
  },
  logo: {
    width: 200,
    height: 50,
  },
  profilePicture: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
});

export default Header;
