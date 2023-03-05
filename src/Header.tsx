import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import styles from "./styles";

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

export default Header;
