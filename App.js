import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet,ScrollView, Dimensions } from 'react-native';
import * as Location from 'expo-location';


const {width: SCREEN_WIDTH} = Dimensions.get("window")

const API_KEY = "84384e4e24dcb7b58bb9d568197625b4";

export default function App() {
  const [city, setCity] = useState("Loding...")
  const [days, setDays] = useState([])
  const [ok, setOk] = useState(true);
  const getWeather = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if(!granted){
      setOk(false);
    }
    const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync({accuracy: 5})
    const location = await Location.reverseGeocodeAsync({latitude,longitude}, {useGoogleMaps: false})
    setCity(location[0].country)
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}')
    const json = await response.json();
  }

  useEffect(()=>{ 
   getWeather();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.city}>
      <Text style={styles.cityName}>{city}</Text>
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