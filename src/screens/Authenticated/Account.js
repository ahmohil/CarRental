import React, { useEffect, useState, useRef } from "react";
import { Text, View, ScrollView, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput, DefaultTheme } from "react-native-paper";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { useAuth } from "../../Context/AuthContext";
import { useUsers } from "../../Context/UserContext";
import axios from "axios";
import { API_URL } from "@env";

const Account = () => {
	const navigation = useNavigation();
	const [isEditable, setIsEditable] = useState(false);

	const { logout, token } = useAuth();
	const { user, setUser } = useUsers();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [emailError, setEmailError] = useState(false);

	const handleLogout = () => {
		logout();
	};

	const handleEditDetails = () => {
		setIsEditable(true);
	};

	const theme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			background: "rgb(248, 248, 248)",
		},
	};

	const handleChange = () => {
		axios
			.post(`http://${API_URL}:3000/update-details`, {
				name,
				email,
				phone,
				address,
				token,
			})
			.then((res) => {
				if (res.status === 200) {
					console.log(res.data);
					setUser(res.data.user);
					setIsEditable(false);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handlePressOutside = () => {
		Keyboard.dismiss();
	};

	useEffect(() => {
		setName(user.name || "");
		setEmail(user.email || "");
		setAddress(user.address || "");
		setPhone(user.number || "");
		console.log(user);
	}, []);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<TouchableWithoutFeedback onPress={handlePressOutside}>
				<ScrollView>
					<View style={styles.container}>
						<Pressable
							onPress={handleLogout}
							style={{ flexDirection: "row", justifyContent: "flex-end", width: "100%", alignItems: "center" }}>
							<FontAwesome name="arrow-left" size={15} color="#17B3A6" style={{ marginRight: 5 }} />
							<Text style={{ fontSize: 20, color: "#17B3A6" }}>Logout</Text>
						</Pressable>
						<View>
							<Text
								style={{
									fontWeight: "bold",
									fontSize: 25,
									color: "#17B3A6",
									marginVertical: "5%",
									textAlign: "center",
								}}>
								Account Details
							</Text>
						</View>
						<Pressable
							onPress={handleEditDetails}
							style={{ flexDirection: "row", justifyContent: "flex-end", width: "100%" }}>
							<Text style={styles.link}>Edit Details</Text>
						</Pressable>
						<View style={styles.input}>
							<Text style={styles.title}>Email:</Text>
							<TextInput
								mode="outlined"
								value={email}
								onChangeText={setEmail}
								outlineColor={emailError ? "red" : "rgba(50, 50, 50, 0.15)"}
								activeOutlineColor={emailError ? "red" : "#17B3A6"}
								theme={theme}
								disabled
							/>
						</View>

						<View style={styles.input}>
							<Text style={styles.title}>Name:</Text>
							<TextInput
								mode="outlined"
								value={name}
								onChangeText={setName}
								outlineColor="rgba(50, 50, 50, 0.15)"
								activeOutlineColor="#17B3A6"
								theme={theme}
								disabled={!isEditable}
							/>
						</View>

						<View style={styles.input}>
							<Text style={styles.title}>Phone No.</Text>
							<TextInput
								mode="outlined"
								value={phone}
								onChangeText={setPhone}
								outlineColor="rgba(50, 50, 50, 0.15)"
								activeOutlineColor="#17B3A6"
								theme={theme}
								disabled={!isEditable}
							/>
						</View>
						<View style={styles.input}>
							<Text style={styles.title}>Address:</Text>
							<TextInput
								mode="outlined"
								value={address}
								onChangeText={setAddress}
								outlineColor="rgba(50, 50, 50, 0.15)"
								activeOutlineColor="#17B3A6"
								theme={theme}
								disabled={!isEditable}
							/>
						</View>
						<Pressable android_ripple={{ color: "#218644" }} style={styles.button} onPress={handleChange}>
							<Text style={styles.buttonText}>Save Changes</Text>
						</Pressable>
					</View>
					<View style={styles.footer}>
						<Text style={styles.versionText}>Version 1.0.0</Text>
						<Text style={styles.copyrightText}>© 2023 RentaCar. All rights reserved.</Text>
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: "4%",
		display: "flex",
		flexDirection: "column",
	},
	input: {
		marginBottom: "5%",
	},
	row: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	title: {
		fontWeight: "bold",
		marginRight: "5%",
		width: "20%",
		fontSize: 15,
		marginBottom: "2%",
	},
	link: {
		color: "grey",
		fontSize: 15,
		marginBottom: "5%",
	},
	footer: {
		padding: 16,
		alignItems: "center",
		marginTop: "80%",
	},
	versionText: {
		fontSize: 14,
		color: "#555",
	},
	copyrightText: {
		fontSize: 12,
		color: "#888",
		marginTop: 8,
	},
	button: {
		marginVertical: 10,
		paddingVertical: "2%",
		backgroundColor: "#17B3A6",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		alignItems: "center",
		borderRadius: 4,
		width: "40%",
		marginTop: 30,
		height: 40,
		alignSelf: "center",
	},
	buttonText: {
		fontSize: 15,
		color: "white",
	},
});

export default Account;
