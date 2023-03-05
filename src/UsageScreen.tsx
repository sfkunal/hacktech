import { View, Text, StyleSheet } from "react-native";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./styles";

type Props = {
  onClose: () => void;
}

const UsageScreen = ({ onClose }: Props) => {
  return (
    <View style={{ backgroundColor: "#272727", flex: 1 }}>
        <Header />
        <View style={styles.separator} />
      <Text>Usage Screen</Text>

      <Footer />
    </View>
  );
};

export default UsageScreen
