import React from "react";
import {View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
      <Text style={styles.cityName}>Seoul</Text>
    </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>sunny</Text>
        </View>
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName:{
      fontSize: 35,
  },
  weather: {
    flex:3,

  },
  day:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "teal",
  },
  temp:{
    marginTop: 20,
    fontSize: 98,
  },
  description:{
    marginTop: -10,
    fontSize: 35,
  },
})