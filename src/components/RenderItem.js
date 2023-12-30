import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet, Image, Pressable, Modal, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { AuthProvider } from "../Context/AuthContext";
const RenderItem = ({ item }) => {
	const navigation = useNavigation();
	const [isModalVisible, setModalVisible] = useState(false);

	const handleContact = () => {
		setModalVisible(true);
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	const handlePress = () => {
		setModalVisible(true);
	};

	return (
		<Pressable style={styles.container} onPress={handlePress}>
			<View style={styles.imageContainer}>
				<Image source={require("../../assets/car.jpg")} style={styles.image} resizeMode="contain" />
			</View>
			<View>
				<Text style={{ fontWeight: "bold", fontSize: 17 }}>{item.Make}</Text>
				<Text>{item.Model}</Text>
				<Text style={{ color: "rgba(0,0,0,0.60)" }}>{item.Location}</Text>
				<Text style={{ textAlign: "right" }}>Rent: {item.Rent}</Text>
			</View>
			<Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={closeModal}>
				<View style={styles.modalContainer}>
					<View style={styles.modalContent}>
						<TouchableOpacity onPress={closeModal} style={styles.closeIcon}>
							<Icon name="times" size={20} color="black" />
						</TouchableOpacity>
						<View style={styles.modalImageContainer}>
							<Image source={require("../../assets/car.jpg")} style={styles.modalImage} resizeMode="contain" />
						</View>
						<View style={styles.details}>
							<View style={styles.row}>
								<Text style={styles.heading}>Make : </Text>
								<Text>{item && item.Make}</Text>
							</View>
							<View style={styles.row}>
								<Text style={styles.heading}>Model : </Text>
								<Text>{item && item.Model}</Text>
							</View>
							<View style={styles.row}>
								<Text style={styles.heading}>Rent: </Text>
								<Text>{item && item.Rent} per day</Text>
							</View>
							<View style={styles.row}>
								<Text style={styles.heading}>Description: </Text>
								<Text>Hamadan Rent a Car.</Text>
							</View>
							<View>
								<Pressable android_ripple={{ color: "#218644" }} style={styles.button} onPress={handleContact}>
									<Text style={styles.buttonText}>Contact Renter</Text>
								</Pressable>
							</View>
						</View>
					</View>
				</View>
			</Modal>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		width: "46%",
		padding: "2%",
		margin: "2%",
		borderRadius: 5,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 2,
	},
	imageContainer: {
		height: 150,
		marginBottom: 10,
	},
	image: {
		flex: 1,
		width: "100%",
		height: "100%",
	},
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContent: {
		width: "100%",
		backgroundColor: "white",
		padding: 20,
		borderRadius: 10,
		elevation: 5,
	},
	modalImageContainer: {
		height: 250,
		marginBottom: 10,
	},
	modalImage: {
		flex: 1,
		width: "100%",
		height: "100%",
	},
	closeIcon: {
		alignSelf: "flex-end",
		paddingBottom: 20,
		paddingRight: 10,
	},
	row: {
		flexDirection: "row",
		padding: 10,
	},
	heading: {
		fontWeight: "bold",
		fontSize: 15,
	},
	button: {
		marginVertical: 20,
		paddingVertical: "3%",
		backgroundColor: "#17B3A6",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		//opacity: pressed ? 0.8 : 1,
		alignItems: "center",
		borderRadius: 4,
		width: "60%",
		alignSelf: "center",
	},
	buttonText: {
		fontSize: 20,
		color: "white",
	},
});

export default RenderItem;
