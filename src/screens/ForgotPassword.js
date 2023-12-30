import React, { useState } from "react";
import { View, Text, Pressable, Keyboard, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { TextInput, DefaultTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";
import { useUsers } from "../Context/UserContext";
import { API_URL } from "@env";
const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const navigation = useNavigation();
	const [errorMsg, setErrorMsg] = useState("");
	const theme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			background: "rgb(248, 248, 248)",
		},
	};

	const handleSendCode = () => {
		axios
			.post(`http://${API_URL}:3000/forgot-password`, {
				email: email,
			})
			.then((res) => {
				setErrorMsg("");
				console.log(res);
				navigation.navigate("OTP", { state: { email: email } });
			})
			.catch((err) => {
				console.log(err);
				console.log(err.response.data.message);
				setErrorMsg(err.response.data.message);
			});
	};

	const handlePressOutside = () => {
		Keyboard.dismiss();
	};

	return (
		<TouchableWithoutFeedback onPress={handlePressOutside}>
			<View style={styles.container}>
				<View style={styles.innerContainer}>
					<Text style={styles.heading}>Forgot{"\n"}Password?</Text>
					<Text style={styles.description}>
						Don't worry! It happens. Please enter your email, we will send the OTP on this email.
					</Text>
					<Text style={{ color: "red", marginBottom: 10 }}>{errorMsg}</Text>
					<TextInput
						mode="outlined"
						label="Enter your email"
						value={email}
						onChangeText={setEmail}
						outlineColor="rgba(50, 50, 50, 0.15)"
						activeOutlineColor="#1185BA"
						theme={theme}
						keyboardType="email-address"
					/>
					<Pressable android_ripple={{ color: "#519fc2" }} onPress={handleSendCode} style={styles.buttonContainer}>
						<Text style={styles.button}> Send OTP</Text>
					</Pressable>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		paddingHorizontal: 30,
	},
	innerContainer: {
		flex: 1,
		marginTop: 170,
	},
	heading: {
		fontSize: 40,
		fontWeight: "bold",
		marginBottom: 24,
		color: "#17B3A6",
	},
	description: {
		color: "rgb(91,88,88)",
		fontSize: 16,
		marginBottom: 24,
	},
	buttonContainer: {
		marginTop: 24,
		paddingVertical: 12,
		borderRadius: 10,
		backgroundColor: "#17B3A6",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 2,
	},
	button: {
		color: "white",
		fontSize: 16,
		textAlign: "center",
	},
});

export default ForgotPassword;
