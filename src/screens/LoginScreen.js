import React, { useState } from 'react';
import { View, Image, StyleSheet, StatusBar, Text, ScrollView } from 'react-native';
import { useAuth } from '../Context/AuthContext';
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Pressable, Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { TextInput, DefaultTheme } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const { login } = useAuth();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    setEmailError(false);
    setPasswordError(false);
    setIsInvalid(false);

    if (email && password && validateEmail(email) & password.length >= 5) {
      
        const user = {email,password}
        login(user)
        setEmail("");
        setPassword("");
      

      Keyboard.dismiss();
      return;
    }

    if (!email || !validateEmail(email)) {
      setEmailError(true);
    }
    if (!password || password.length < 5) {
      setPasswordError(true);
    }
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



          <Header />

          <Text style={styles.tagline}>Welcome to Car Rental</Text>

          <View style={styles.form}>
          {isInvalid && (
          <Text style={{ color: "red", textAlign: "center" }}>
            Invalid email or password
          </Text>
          )}
            <TextInput
              style={styles.input}
              mode="outlined"
              label="E-mail"
              value={email}
              onChangeText={setEmail}
              outlineColor= {emailError ? "red" : "rgba(50, 50, 50, 0.15)"}
              activeOutlineColor={emailError ? "red" : "#17B3A6"}
              theme={theme}
            />
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              outlineColor= {passwordError ? "red" : "rgba(50, 50, 50, 0.15)"}
              activeOutlineColor={passwordError ? "red" : "#17B3A6"}
              theme={theme}
            />
            <Pressable
              android_ripple={{ color: "#218644" }}
              style={styles.button}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </View>
          <View style={styles.loginWith}>
            <Text style={styles.loginWithText}>
              Login With
            </Text>
            <View style={styles.appLogos}>
              <Image
                source={require('../../assets/google.png')} 
                style={styles.image}
              />
              <Image
                source={require('../../assets/facebook.png')} 
                style={styles.image}
              />
              <Image
                source={require('../../assets/twitter.png')} 
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.signupForgot}>
              <Text style={styles.signupForgotText}>
                Don't Have any account
              </Text>
              <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
                Sign Up
              </Text>
            </View>
            <View style={styles.signupForgot}>
              <Text style={styles.signupForgotText}>
                Forgot Password?
              </Text>
              <Text style={styles.link} onPress={() => navigation.navigate('ForgotPass')}>
                Click Here
              </Text>
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
    paddingTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',

  },
  container: {
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  loginWith: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  },
  loginWithText: {
    fontSize: 15,
    color: '#7C7C8A',
  },
  appLogos: {
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
