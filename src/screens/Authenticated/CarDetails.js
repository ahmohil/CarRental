import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet, Image, Pressable, Modal, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CarDetails = ({ route }) => {
	const item = route.params.item;

	const [isModalVisible, setModalVisible] = useState(false);

	const handleContact = () => {
		setModalVisible(true);
	};

	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<SafeAreaView>
			<ScrollView style={styles.container}>
				{/* ... Your existing code ... */}

				<View>
					<Pressable android_ripple={{ color: "#218644" }} style={styles.button} onPress={handleContact}>
						<Text style={styles.buttonText}>Contact Renter</Text>
					</Pressable>
				</View>

				{/* Modal */}
				<Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={closeModal}>
					<View style={styles.modalContainer}>
						<View style={styles.modalContent}>
							<View style={styles.imageContainer}>
								<Image source={require("../../../assets/car.png")} style={styles.image} resizeMode="contain" />
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
							<TouchableOpacity onPress={closeModal}>
								<Text>Close Modal</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	// ... Your existing styles ...

	button: {
		// ... Your existing styles ...
	},

	// Modal styles
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContent: {
		backgroundColor: "white",
		padding: 20,
		borderRadius: 10,
		elevation: 5,
	},
});

export default CarDetails;
