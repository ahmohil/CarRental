import React, { useState } from 'react';
import { View, Image, StyleSheet, StatusBar, Text, ScrollView } from 'react-native';

import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, Keyboard,
  TouchableWithoutFeedback, } from 'react-native';
import { TextInput, DefaultTheme } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login button pressed');
    Keyboard.dismiss();
    navigation.navigate('TabBar');
  };

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const navigation = useNavigation();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "rgb(248, 248, 248)",
    },
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={handlePressOutside}>
      <ScrollView contentContainerStyle={styles.container}>


        <View style={styles.header}>
        <Header />

        </View>

        <Text style={styles.tagline}>Create your account</Text>

        <View style={styles.form}>

          <TextInput
            style={styles.input}
            mode="outlined"
            label="E-mail"
            value={email}
            onChangeText={setEmail}
            outlineColor="rgba(50, 50, 50, 0.15)"
            activeOutlineColor="#17B3A6"
            theme={theme}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            outlineColor="rgba(50, 50, 50, 0.15)"
            activeOutlineColor="#17B3A6"
            theme={theme}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Confirm Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            outlineColor="rgba(50, 50, 50, 0.15)"
            activeOutlineColor="#17B3A6"
            theme={theme}
          />
          <Pressable
            android_ripple={{ color: "#218644" }}
            style={styles.button}
            onPress={handleLogin}
            >
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
        </View>
        <View style = {styles.loginWith}>
          <Text style = {styles.loginWithText}>
            Login With
          </Text>
          <View style = {styles.appLogos}>
          <Image
        source={require('../../assets/google.png')} // Change 'yourImage.png' to the actual filename
        style={styles.image}
      />
      <Image
        source={require('../../assets/facebook.png')} // Change 'yourImage.png' to the actual filename
        style={styles.image}
      />
      <Image
        source={require('../../assets/twitter.png')} // Change 'yourImage.png' to the actual filename
        style={styles.image}
      />
          </View>
        </View>
      </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 0,
  },
  container: {
    alignItems: 'center',
    width: '100%',
    marginTop: 0,
  },
  form: {
    marginTop: "8%",
    marginHorizontal: 30,
    width: '80%',
  },
  input: {
    marginVertical: 10,
  },
  tagline: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    textAlign: 'left',
    paddingTop: '10%',
    width: '80%',
    color: '#19779B',
    fontSize: 20
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  divider: {
    marginVertical: 20,
  },

  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  button: {
    marginVertical: 20,
    paddingVertical: '4%',
    backgroundColor: '#17B3A6',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    //opacity: pressed ? 0.8 : 1,
    alignItems: 'center',
    borderRadius: 4,
  },
  loginWith:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  },
  loginWithText:{
    fontSize: 15,
    color: '#7C7C8A',
  },
  appLogos:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
  },

  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    margin: 10,
    borderWidth: 0.5, 
    borderColor: '#7C7C8A', 
    borderRadius: 5, 
  }
});

export default LoginScreen;
