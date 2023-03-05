import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./styles";

const graph = require('../assets/graph.png');
const picker = require('../assets/picker.png');
const hand = require('../assets/hand.png');
const percent = require('../assets/percent.png');
const play = require('../assets/play.png');
const kunal = require('../assets/kunal.png');
const connor = require('../assets/connor.png');
const jonah = require('../assets/jonah.png');

type Props = {
  onClose: () => void;
}

const UsageScreen = ({ onClose }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View style={styles.separator} />
          <View style={{ flexDirection: 'column', paddingTop: 15, justifyContent: "space-evenly" }}>
            <Text style={{fontSize: 25, color: "#FFFFFF", paddingBottom: 20}}>Usage Screen</Text>

            <View style={{ flexDirection: 'column', justifyContent: "space-evenly", alignItems: "center", paddingBottom: 20 }}>
              <Image source={picker} style={{borderRadius: 30, paddingBottom: 5}} />
              <Image source={graph} style={{paddingBottom: 10}} />
            </View>

            <Text style={{fontSize: 25, color: "#FFFFFF", paddingBottom: 10}}>Trends</Text>
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

            <Text style={{fontSize: 25, color: "#FFFFFF", paddingBottom: 10, paddingTop: 20}}>Household Highlights</Text>
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
