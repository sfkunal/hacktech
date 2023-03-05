import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./styles";

type Props = {
  onClose: () => void;
}

const divider = require('../assets/divider.png');
const capacity_noti = require('../assets/capacity_noti.png')
const dishes_noti = require('../assets/dishes_noti.png')
const dishwasher_noti = require('../assets/dishwasher_noti.png')
const dishesrdy_noti = require('../assets/dishesrdy_noti.png')
const notify = require('../assets/notify.png')

const CleanScreen = ({ onClose }: Props) => {
  return (
    
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: 70,
        }}>
        <Header />
        <View style={styles.separator} />
        <View style={{ flexDirection: 'column', paddingTop: 15, justifyContent: "space-evenly", paddingBottom: 25 }}>
          <View style={{ flexDirection: 'row', paddingTop: 15, justifyContent: "space-between", paddingBottom: 25, }}>
            <Text style={{fontWeight: "bold", color: "#FFFFFF", fontSize:15.5}}>Send notification to:</Text>
            <View style={{width: 40}} />

            <Image source={divider} />
            <View style={{width: 10}} />
            <View style={{ flexDirection: 'column', justifyContent: "space-evenly", paddingRight:40 }}>
              <Text style={{paddingBottom: 8, paddingLeft: 15, fontWeight: "bold", color: "#FFFFFF", fontSize:15.5}}>Connor</Text>
              <Text style={{paddingBottom: 8, paddingLeft: 15, fontWeight: "bold", color: "#FFFFFF", fontSize:15.5}}>Jonah</Text>
              <Text style={{paddingBottom: 8, paddingLeft: 15, fontWeight: "bold", color: "#FFFFFF", fontSize:15.5}}>Kunal</Text>
              <View style={{backgroundColor: "#FFFFFF", borderRadius: 12, width: 108}}>
                <Text style={{paddingVertical: 8, fontWeight: "bold", color: "#272727", fontSize:15.5, alignSelf: "center"}}>Everyone*</Text>
              </View>
            </View>
          </View>
          <View style={{height: 5}} />
          <Text style={{fontWeight: "bold", color: "#FFFFFF", fontSize:15.5}}>Time Sensitive</Text>
          <View style={{ flexDirection: 'column', paddingTop: 15, justifyContent: "space-evenly", paddingBottom: 25 }}>
            <TouchableOpacity style={{alignSelf: "center", borderRadius: 12}}>
              <Image source={capacity_noti} />
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf: "center", borderRadius: 12}}>
              <Image source={dishes_noti} />
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf: "center", borderRadius: 12}}>
              <Image source={dishwasher_noti} />
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf: "center", borderRadius: 12}}>
              <Image source={dishesrdy_noti} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
              <Image source={notify} />
            </TouchableOpacity>
        </View>
      </ScrollView>
        
      

      <Footer />
    </View>
  );
};

export default CleanScreen
