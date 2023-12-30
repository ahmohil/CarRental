import OTPTextInput from "react-native-otp-textinput";
import React, { useState, useRef, useEffect } from "react";
import { View, Text, Pressable, Keyboard, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { API_URL } from "@env";

const OTPScreen = () => {
	const navigation = useNavigation();
	const [otp, setOTP] = useState("");
	const [timer, setTimer] = useState(60);
	const route = useRoute();
	const [errorMsg, setErrorMsg] = useState("");
	const [resetToken, setResetToken] = useState("");
	const { email } = route?.params?.state || {};
	const [timerActive, setTimerActive] = useState(true);
	const otpInput = useRef(null);
	const handlePressOutside = () => {
		Keyboard.dismiss();
	};

	const handleSubmit = () => {
		axios
			.post(`http://${API_URL}:3000/verify-otp?type=resetpassword`, {
				email: email,
				otp: otp,
			})
			.then((res) => {
				setResetToken(res.data.token);
				navigation.navigate("ResetPass", { state: { resetToken: resetToken } });
			})
			.catch((err) => {
				console.log(err);
				setErrorMsg(err.response.data.message);
			});
	};

	useEffect(() => {
		let interval;

		if (timerActive && timer > 0) {
			interval = setInterval(() => {
				setTimer((prevTimer) => prevTimer - 1);
			}, 1000);
		}

		return () => clearInterval(interval);
	}, [timerActive, timer]);

	const handleResend = () => {
		setTimer(60);
		setTimerActive(true);
	};

	const handleOtpChange = (otp) => {
		setOTP(otp);
	};

	const formatTime = (value) => (value < 10 ? `0${value}` : `${value}`);

	return (
		<TouchableWithoutFeedback onPress={handlePressOutside}>
			<View style={styles.container}>
				<View style={styles.innerContainer}>
					<Text style={styles.heading}>OTP{"\n"}Verification</Text>
					<Text style={styles.description}>
						Enter the OTP sent to {"\n"}
						<Text style={{ fontWeight: "bold" }}>ahmohil78@gmail.com</Text>
					</Text>
					<Text style={{ color: "red", marginBottom: 10 }}>{errorMsg}</Text>
					<OTPTextInput
						handleTextChange={handleOtpChange}
						ref={otpInput}
						containerStyle={{
							paddingHorizontal: 20,
							alignSelf: "center",
						}}
						tintColor={"#17B3A6"}
						textInputStyle={styles.input}
						inputCount={4}
						keyboardType="numeric"
					/>

					{timer > 0 ? (
						<Text style={{ ...styles.resend, fontWeight: "bold" }}>
							{formatTime(Math.floor(timer / 60))}:{formatTime(Math.floor(timer % 60))}
						</Text>
					) : (
						<Pressable onPress={handleResend}>
							<Text
								style={{
									...styles.resend,
									color: "#1185BA",
									textDecorationLine: "underline",
								}}>
								Re-send
							</Text>
						</Pressable>
					)}

					<Pressable android_ripple={{ color: "#519fc2" }} onPress={handleSubmit} style={styles.buttonContainer}>
						<Text style={styles.button}> Verify</Text>
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
	input: {
		width: 50,
		height: 50,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "rgb(0,0,0,0.1)",
		fontSize: 20,
		marginHorizontal: 10,
		marginBottom: 24,
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
		lineHeight: 24,
	},
	buttonContainer: {
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
	resend: {
		textAlign: "center",
		marginBottom: 24,
	},
});

export default OTPScreen;
