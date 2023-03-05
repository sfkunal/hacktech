import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./styles";

type Props = {
  onClose: () => void;
}

const CleanScreen = ({ onClose }: Props) => {
  return (
    
    <View style={styles.container}>
        <Header />
        <View style={styles.separator} />
      <Text>Clean Screen</Text>

      <Footer />
    </View>
  );
};

export default CleanScreen
