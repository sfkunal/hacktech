import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Modal } from "react-native";
import styles from "./styles";
import { CleanScreen, DishwasherScreen, UsageScreen } from './screens';


const cleanIcon = require("../assets/CLEAN.png");
const dishwasherIcon = require("../assets/CAPACITY.png");
const usageIcon = require("../assets/USAGE.png");

const Footer = () => {

  const [cleanModalVisible, setCleanModalVisible] = useState(false);
  const [dishwasherModalVisible, setDishwasherModalVisible] = useState(false);
  const [usageModalVisible, setUsageModalVisible] = useState(false);
  
  return (
    <View style={styles.footer}>
        <TouchableOpacity onPress={() => { setCleanModalVisible(true); setDishwasherModalVisible(false); setUsageModalVisible(false); }} style={styles.iconContainer}>
          <Image source={cleanIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setCleanModalVisible(false); setDishwasherModalVisible(true); setUsageModalVisible(false); }} style={styles.iconContainer}>
          <Image source={dishwasherIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setCleanModalVisible(false); setDishwasherModalVisible(false); setUsageModalVisible(true); }} style={styles.iconContainer}>
          <Image source={usageIcon} style={styles.icon} />
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
    </View>
  );
};

export default Footer;
