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
    <View style={{ backgroundColor: "#272727", flex: 1 }}>
        <Header />
        <View style={styles.separator} />
      <Text>Dishwasher Screen</Text>

      <Footer />
    </View>
  );
};

export default DishwasherScreen
