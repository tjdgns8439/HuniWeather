import React from "react";
import {View, Text, StyleSheet,ScrollView, Dimensions } from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get("window")

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
      <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView
        pagingEnabled //스크롤이 쫀득하게 움직이게 함.
        horizontal    //수평으로
         //화면의 가로길이 가져옴
        contentContainerStyle={styles.weather}> 
        
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>sunny</Text>
        </View>
      </ScrollView>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName:{
      fontSize: 35,
  },
  weather: {
    backgroundColor: "blue"
  },
  day:{
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    
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