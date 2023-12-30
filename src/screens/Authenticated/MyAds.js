import React from "react";
import { Text, View, ScrollView, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const MyAds = () => {
	const ads = []; // Assuming this is where you get your ads
	const navigation = useNavigation();

	const handleCreate = () => {
		console.log("Create and ad");
		navigation.navigate("CreateAd");
	};
	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView contentContainerStyle={styles.container}>
				{ads.length === 0 ? (
					<View style={styles.emptyAdsContainer}>
						<Text style={styles.emptyAdsText}>You don't have any ads yet. Create a new ad now!</Text>
						<Pressable android_ripple={{ color: "#218644" }} style={styles.button} onPress={handleCreate}>
							<Text style={styles.buttonText}>Create</Text>
						</Pressable>
					</View>
				) : (
					<View>
						{ads.map((ad, index) => (
							<Text key={index} style={styles.adText}>
								{ad}
							</Text>
						))}
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
	container: {
		flexGrow: 1,
		padding: 16,
	},
	emptyAdsContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	emptyAdsText: {
		fontSize: 18,
		textAlign: "center",
		color: "#555",
	},
	adText: {
		fontSize: 16,
		marginBottom: 8,
	},
	button: {
		marginVertical: 20,
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
		//opacity: pressed ? 0.8 : 1,
		alignItems: "center",
		borderRadius: 4,
		width: "30%",
		marginTop: 30,
		height: 40,
	},
	buttonText: {
		fontSize: 15,
		color: "white",
	},
});

export default MyAds;
