import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View, Modal, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./styles";
import { CleanScreen, DishwasherScreen, UsageScreen, SettingsScreen } from './screens';
import { Path, Svg } from "react-native-svg";

const cleanIcon = require("../assets/CLEAN.png");
const dishwasherIcon = require("../assets/CAPACITY.png");
const usageIcon = require("../assets/USAGE.png");
const settingsIcon = require("../assets/gear.png")

const App = () => {

  const [cleanModalVisible, setCleanModalVisible] = useState(false);
  const [dishwasherModalVisible, setDishwasherModalVisible] = useState(true);
  const [usageModalVisible, setUsageModalVisible] = useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);

  return (
    <NavigationContainer>
      <View style={styles.container}>
      <Header />
        <View style={styles.separator} />
      </View>


      <View style={styles.footer}>
        <View style={{ flexDirection: 'column'}}>
          <TouchableOpacity onPress={() => { setCleanModalVisible(true); setDishwasherModalVisible(false); setUsageModalVisible(false); setSettingsModalVisible(false);}} style={styles.iconContainer}>
            <Image source={cleanIcon} style={styles.icon} />
          </TouchableOpacity>
          <Text style={{fontSize: 10, color: "#FFFFFF"}}>Clean</Text>
        </View>

        <View style={{ flexDirection: 'column'}}>
          <TouchableOpacity onPress={() => { setCleanModalVisible(false); setDishwasherModalVisible(true); setUsageModalVisible(false); setSettingsModalVisible(false);}} style={styles.iconContainer}>
            <Image source={dishwasherIcon} style={styles.icon} />
          </TouchableOpacity>
          <Text style={{fontSize: 10, color: "#FFFFFF"}}>Dishwasher</Text>
        </View>
        
        <TouchableOpacity onPress={() => { setCleanModalVisible(false); setDishwasherModalVisible(false); setUsageModalVisible(true); setSettingsModalVisible(false);}} style={styles.iconContainer}>
          <Image source={usageIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setCleanModalVisible(false); setDishwasherModalVisible(false); setUsageModalVisible(false); setSettingsModalVisible(true);}} style={styles.iconContainer}>
          <Image source={settingsIcon} style={styles.icon} />
        </TouchableOpacity>

        <Modal animationType="none" visible={cleanModalVisible}>
          <CleanScreen onClose={() => setCleanModalVisible(false)} />
        </Modal>
        <Modal animationType="none" visible={dishwasherModalVisible}>
          <DishwasherScreen onClose={() => setDishwasherModalVisible(false)} />
        </Modal>
        <Modal animationType="none" visible={usageModalVisible}>
          <UsageScreen onClose={() => setUsageModalVisible(false)} />
        </Modal>
        <Modal animationType="none" visible={settingsModalVisible}>
          <SettingsScreen onClose={() => setSettingsModalVisible(false)} />
        </Modal>
      </View>
    </NavigationContainer>
  );
};



export default App;
