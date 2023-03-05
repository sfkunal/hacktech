import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./styles";

type Props = {
  onClose: () => void;
}

const DishwasherScreen = ({ onClose }: Props) => {
  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.separator} />
      <View style={{padding: 15}}>
        <Text>Dishwasher Screen</Text>
      </View>
      <Footer />
    </View>
  );
};

export default DishwasherScreen
