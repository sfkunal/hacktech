import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./styles";

type Props = {
  onClose: () => void;
}
const submitImage = require('../assets/load2.png');
const accPhoto = require('../assets/account_photo.png');
const washer = require('../assets/washer.png');

const SettingsScreen = ({ onClose }: Props) => {
  const [plates, onChangePlates] = React.useState('');
  const [bowls, onChangeBowls] = React.useState('');
  const [forks, onChangeForks] = React.useState('');
  const [knives, onChangeKnives] = React.useState('');
  const [spoons, onChangeSpoons] = React.useState('');
  const [pans, onChangePans] = React.useState('');
  const [pots, onChangePots] = React.useState('');
  const [containers, onChangeContainers] = React.useState('');

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
						<View style={{backgroundColor: "#464646", flexDirection: 'row', justifyContent: "flex-start", alignItems: "center", paddingVertical: 20, paddingHorizontal: 10, borderRadius: 10 }}>
							<Image source={accPhoto} style={{paddingRight: 20}}/>
							<View style={{flexDirection: "column", paddingLeft: 20}}>
								<Text style={{fontSize: 22, color: "#FFFFFF"}}>John Green</Text>
								<Text style={{fontSize: 13, color: "#FFFFFF"}}>7827 NE 58th Street</Text>
							</View>
						</View>
						<View style={{height: 20 }} />
						<View style={{backgroundColor: "#464646", flexDirection: 'row', justifyContent: "flex-start", alignItems: "center", paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10 }}>
							<Image source={washer} style={{paddingRight: 20}}/>
							<View style={{flexDirection: "column", paddingLeft: 10}}>
								<Text style={{fontSize: 14, color: "#787878"}}>Dishwasher Model:</Text>
								<Text style={{fontSize: 14, color: "#FFFFFF"}}>Whirlpool WDT730HAMZ</Text>
								<View style={{height: 10 }} />
								<Text style={{fontSize: 14, color: "#787878"}}>Water Consumption:</Text>
								<Text style={{fontSize: 14, color: "#FFFFFF"}}>3 Gal/Cycle</Text>
								<View style={{height: 10 }} />
								<Text style={{fontSize: 14, color: "#787878"}}>Efficiency:</Text>
								<Text style={{fontSize: 14, color: "#76D780"}}>High</Text>
							</View>
						</View>
						<View style={{height: 20 }} />
						<Text style={{fontSize: 12, color: "#FFFFFF", paddingBottom: 10}}>Enter the number of each item that will fit in your {'\n'}dishwasher at its maximum capacity.</Text>


            <View style={{backgroundColor: "#1C1C1E",flexDirection: 'column', justifyContent: "space-evenly", borderRadius: 10 }}>
              <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center", padding: 4 }}>
                <Text style={{paddingLeft: 10, color: "#FFFFFF", fontSize: 15.5}}>Plates</Text>
                <View style={{backgroundColor: "#353538", paddingTop: 5, borderRadius:8}}>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangePlates}
                    value={plates}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={{borderBottomWidth: 1, borderBottomColor: "#404044", width: "80%", alignSelf: "center"}} />
              <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center", padding: 4 }}>
                <Text style={{paddingLeft: 10, color: "#FFFFFF", fontSize: 15.5}}>Bowls</Text>
                <View style={{backgroundColor: "#353538", paddingTop: 5, borderRadius:8}}>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeBowls}
                    value={bowls}
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>
            <View style={{height: 20 }} />
            <View style={{backgroundColor: "#1C1C1E",flexDirection: 'column', justifyContent: "space-evenly", borderRadius: 10 }}>
              <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center", padding: 4 }}>
                <Text style={{paddingLeft: 10, color: "#FFFFFF", fontSize: 15.5}}>Forks</Text>
                <View style={{backgroundColor: "#353538", paddingTop: 5, borderRadius:8}}>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeForks}
                    value={forks}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={{borderBottomWidth: 1, borderBottomColor: "#404044", width: "80%", alignSelf: "center"}} />
              <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center", padding: 4 }}>
                <Text style={{paddingLeft: 10, color: "#FFFFFF", fontSize: 15.5}}>Knives</Text>
                <View style={{backgroundColor: "#353538", paddingTop: 5, borderRadius:8}}>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeKnives}
                    value={knives}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={{borderBottomWidth: 1, borderBottomColor: "#404044", width: "80%", alignSelf: "center"}} />
              <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center", padding: 4 }}>
                <Text style={{paddingLeft: 10, color: "#FFFFFF", fontSize: 15.5}}>Spoons</Text>
                <View style={{backgroundColor: "#353538", paddingTop: 5, borderRadius:8}}>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeSpoons}
                    value={spoons}
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>
            <View style={{height: 20 }} />
            <View style={{backgroundColor: "#1C1C1E",flexDirection: 'column', justifyContent: "space-evenly", borderRadius: 10 }}>
              <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center", padding: 4 }}>
                <Text style={{paddingLeft: 10, color: "#FFFFFF", fontSize: 15.5}}>Pots</Text>
                <View style={{backgroundColor: "#353538", paddingTop: 5, borderRadius:8}}>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangePots}
                    value={pots}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={{borderBottomWidth: 1, borderBottomColor: "#404044", width: "80%", alignSelf: "center"}} />
              <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center", padding: 4 }}>
                <Text style={{paddingLeft: 10, color: "#FFFFFF", fontSize: 15.5}}>Pans</Text>
                <View style={{backgroundColor: "#353538", paddingTop: 5, borderRadius:8}}>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangePans}
                    value={pans}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={{borderBottomWidth: 1, borderBottomColor: "#404044", width: "80%", alignSelf: "center"}} />
              <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center", padding: 4 }}>
                <Text style={{paddingLeft: 10, color: "#FFFFFF", fontSize: 15.5}}>Prep Containers</Text>
                <View style={{backgroundColor: "#353538", paddingTop: 5, borderRadius:8}}>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeContainers}
                    value={containers}
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>
            <View style={{height: 20 }} />
            <TouchableOpacity style={{alignSelf: "center", borderRadius: 8}}>
              <Image source={submitImage} />
            </TouchableOpacity>
          </View>
          
        </ScrollView>
      <Footer />
    </View>
  );
};

export default SettingsScreen
