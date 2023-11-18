import React, { useState } from 'react';
import { View, Image, StyleSheet, StatusBar, Text } from 'react-native';

import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable } from 'react-native';
import { TextInput, DefaultTheme } from "react-native-paper";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pressed, setPresed] = useState('');
  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login button pressed');
    // You may want to navigate to the next screen upon successful login.
  };

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "rgb(243, 243, 243)"
    },
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>


        <Header />

        <Text style={styles.tagline}>Welcome to Car Rental</Text>

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
          <Pressable
            android_ripple={{ color: "#218644" }}
            style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
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
        <View style={styles.footer}>
          <View style={styles.signupForgot}>
            <Text style = {styles.signupForgotText}>
              Don't Have any account
            </Text>
            <Text style={styles.link} onPress={() => console.log('Navigate to signup')}>
              Sign Up
            </Text>
          </View>
          <View style={styles.signupForgot}>
            <Text style = {styles.signupForgotText}>
              Forgot Password?
            </Text>
            <Text style={styles.link} onPress={() => console.log('Navigate to forgot password')}>
              Click Here
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,

  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
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
    paddingTop: '20%',
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
  link: {
    color: 'black',
    textDecorationLine: 'underline',
    marginLeft: 5,
    fontSize: 17,
  },

  signupForgot: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  signupForgotText: { 
    fontSize: 15, 
    color: '#7C7C8A', 
    marginRight: 5,
  },
  footer: {
    flex: 1,
    marginVertical: 20,
    flexDirection: 'column',
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
