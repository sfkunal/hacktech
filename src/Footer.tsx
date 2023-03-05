import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Modal } from "react-native";
import styles from "./styles";
import { CleanScreen, DishwasherScreen, UsageScreen, SettingsScreen } from './screens';
import { Path, Svg } from "react-native-svg";

const cleanIcon = require("../assets/CLEAN.png");
const dishwasherIcon = require("../assets/CAPACITY.png");
const usageIcon = require("../assets/USAGE.png");
const settingsIcon = require("../assets/gear.png")

const Footer = () => {

  const [cleanModalVisible, setCleanModalVisible] = useState(false);
  const [dishwasherModalVisible, setDishwasherModalVisible] = useState(false);
  const [usageModalVisible, setUsageModalVisible] = useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => { setCleanModalVisible(true); setDishwasherModalVisible(false); setUsageModalVisible(false); setSettingsModalVisible(false);}} style={styles.iconContainer}>
        <Image source={cleanIcon} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { setCleanModalVisible(false); setDishwasherModalVisible(true); setUsageModalVisible(false); setSettingsModalVisible(false);}} style={styles.iconContainer}>
        <Image source={dishwasherIcon} style={styles.icon} />
      </TouchableOpacity>
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
  );
};

export default Footer;
