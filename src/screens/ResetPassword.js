import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Keyboard,
  Image,
  StyleSheet,
} from "react-native";
import { TextInput, DefaultTheme } from "react-native-paper";
//import { useUsers } from '../Context/UserContext';

const ResetPassword = ({ navigation, route }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null)
  //const { users, setUsers } = useUsers();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "rgb(243, 243, 243)",
    },
  };

  const handleSubmit = () => {
    setError(null);
    Keyboard.dismiss();
    if(password.length < 5) {
      setError("Password should be atleast 5 characters")
      return;
    }
    if(password !== confirmPassword) {
      setError("Password and confirm password should be same")
      return;
    }

    // setUsers(users.map((user) => {
    //   if(user.email === route.params?.email) {
    //     return {
    //       ...user,
    //       password: password
    //     }
    //   }
    //   else {
    //     return user;
    //   }
    // }))

    navigation.navigate("Login");
    setPassword("");
    setConfirmPassword("");
  };

  return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/reset-password.png")}
        />
        <Text style={styles.heading}>Set Your Password</Text>
        <Text style={styles.description}>
          In order to keep your account safe you need to create a strong
          password
        </Text>
        { error && <Text style={{ color: "red", textAlign: "center", marginBottom: 16 }}>{error}</Text> }
        <View style={styles.form}>
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
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            outlineColor="rgba(50, 50, 50, 0.15)"
            activeOutlineColor="#17B3A6"
            theme={theme}
          />

          <Pressable
            android_ripple={{ color: "#519fc2" }}
            onPress={handleSubmit}
            style={styles.button}>
            <Text style={styles.buttonText}> Submit</Text>
          </Pressable>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    marginBottom: "20%"
  },
  form: {
    marginHorizontal: 30,
  },
  input: {
    marginVertical: 8,
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
  heading: {
    color: "#17B3A6",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    marginHorizontal: 32,
    marginBottom: 24
  },
  description: {
    color: "rgba(0,0,0,0.4)",
    lineHeight: 24,
    fontSize: 16,
    marginHorizontal: 32,
    marginBottom: 16
  },
  image: {
    alignSelf: "center",
    marginBottom: 24
  },
});

export default ResetPassword;
