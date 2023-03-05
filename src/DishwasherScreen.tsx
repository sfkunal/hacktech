import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./styles";
import NumericInput from 'react-native-numeric-input'
import React from "react";

type Props = {
  onClose: () => void;
}

const submitImage = require('../assets/load.png');

const DishwasherScreen = ({ onClose }: Props) => {
  const [text, onChangeText] = React.useState('Useless Text');
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
            <Text style={{fontSize: 25, color: "#FFFFFF", paddingBottom: 5, fontWeight: 'bold'}}>Load Dishes</Text>
            <Text style={{fontSize: 12, color: "#ACACAC", paddingBottom: 10}}>Enter the number of each item that will fit in your {'\n'}dishwasher in a typical cycle.</Text>
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

export default DishwasherScreen
