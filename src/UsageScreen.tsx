import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./styles";

const weekly_graph = require('../assets/graph.png');
const monthly_graph = require('../assets/monthly_graph.png')

const hand = require('../assets/hand.png');
const percent = require('../assets/percent.png');
const play = require('../assets/play.png');
const kunal = require('../assets/kunal.png');
const connor = require('../assets/connor.png');
const jonah = require('../assets/jonah.png');

type Props = {
  onClose: () => void;
}

const ButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useState('Weekly');

  const handlePress = (button) => {
    setSelectedButton(button);
  };

  return (
    <View style={{ flexDirection: 'column', justifyContent: "space-evenly", alignItems: "center", paddingBottom: 20 }}>
      <View style={{flexDirection: 'row', borderRadius: 8, justifyContent: "space-evenly", alignContent:"center", backgroundColor: "#3A3A3D", width: "100%", height: 40}}>
        <TouchableOpacity onPress={() => handlePress('Weekly')} style={{borderRadius: 12,  backgroundColor: selectedButton === 'Weekly' ? 'grey' : 'transparent'}}>
          <Text style={{color: "#FFFFFF", fontSize: 13, fontWeight: "bold", padding: 10}}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Monthly')} style={{borderRadius: 12,  backgroundColor: selectedButton === 'Monthly' ? 'grey' : 'transparent'}}>
          <Text style={{color: "#FFFFFF", fontSize: 13, fontWeight: "bold", padding: 10}}>Monthly</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Yearly')} style={{borderRadius: 12,  backgroundColor: selectedButton === 'Yearly' ? 'grey' : 'transparent'}}>
          <Text style={{color: "#FFFFFF", fontSize: 13, fontWeight: "bold", padding: 10}}>Yearly</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: 10}} />
      <Image source={selectedButton === 'Weekly' ? weekly_graph : monthly_graph} style={{paddingBottom: 10}} />
    </View>
  );
};

const UsageScreen = ({ onClose }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: 70,
        }}>
        <Header />
        <View style={styles.separator} />
          <View style={{ flexDirection: 'column', paddingTop: 15, justifyContent: "space-evenly" }}>
            <Text style={{fontSize: 25, color: "#FFFFFF", paddingBottom: 20, fontWeight: 'bold'}}>Usage Screen</Text>
            <ButtonGroup />
            <Text style={{fontSize: 25, color: "#FFFFFF", paddingBottom: 10, fontWeight: 'bold'}}>Trends</Text>
            <View style={{backgroundColor: "#464646", borderRadius: 10, flexDirection: 'column', justifyContent: "space-evenly", padding: 15}}>
              <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", paddingHorizontal: 8}}>
                <Image source={play} style={{}} />
                <Text style={{color: "#FFFFFF", fontSize: 16, paddingLeft: 10}}>On average, your household runs the dishwasher 2x a week. </Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", paddingHorizontal: 8, paddingTop: 10}}>
                <Image source={percent} style={{}} />
                <Text style={{color: "#FFFFFF", fontSize: 16, paddingLeft: 10}}>On average, the dishwasher is 96% full per load. Keep up the good work! </Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", paddingHorizontal: 8, paddingTop: 10}}>
                <Image source={hand} style={{}} />
                <Text style={{color: "#FFFFFF", fontSize: 16, paddingLeft: 10}}>On average, the dishwasher is 96% full per load. Keep up the good work! </Text>
              </View>
            </View>

            <Text style={{fontSize: 25, color: "#FFFFFF", paddingBottom: 10, paddingTop: 20, fontWeight: 'bold'}}>Household Highlights</Text>
            <View style={{backgroundColor: "#464646", borderRadius: 10, flexDirection: 'column', justifyContent: "space-evenly", padding: 15}}>
              <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", paddingHorizontal: 8}}>
                <Image source={jonah} style={{}} />
                <Text style={{color: "#FFFFFF", fontSize: 16, paddingLeft: 10}}>On average, you start the dishwasher the most often.</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", paddingHorizontal: 8, paddingTop: 10}}>
                <Image source={connor} style={{}} />
                <Text style={{color: "#FFFFFF", fontSize: 16, paddingLeft: 10}}>Among all the members in the household, Connor is the most consistent in starting the dishwasher regularly.</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", paddingHorizontal: 8, paddingTop: 10, position: 'relative'}}>
                <Image source={kunal} style={{}} />
                <Text style={{color: "#FFFFFF", fontSize: 16, paddingLeft: 10}}>On average, the dishwasher is 96% full per load. Keep up the good work! </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      <Footer />
    </View>
  );
};

export default UsageScreen
