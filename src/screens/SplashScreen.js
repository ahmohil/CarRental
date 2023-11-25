// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import LogoSVG from '../components/LogoSVG';
const SplashScreen = ({ navigation }) => {
  
  return (
    <LinearGradient colors={['#19779B', '#17B3A6']} style={styles.container}>
      <View style = {styles.headline}>
        <LogoSVG style= {styles.logo}/>
        <Text style={styles.text}>RentaCar</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headline: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  }
});

export default SplashScreen;
