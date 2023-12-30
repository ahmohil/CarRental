import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import RenderItem from "../../components/RenderItem";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../components/TopBar";
import CarDetails from "./CarDetails";
import Search from "./Search";

const Stack = createStackNavigator();

const HomeScreen = () => {
	const [ads, setAds] = useState([]);
	const [filteredAds, setFilteredAds] = useState([]);

	const getAds = require("../../../assets/mocked_data.json");

	useEffect(() => {
		setAds(getAds);
		setFilteredAds(getAds);
	}, []);

	const navigation = useNavigation();

	return (
		<SafeAreaView>
			<TopBar />
			<View>
				<FlatList
					data={filteredAds}
					renderItem={({ item }) => {
						return <RenderItem item={item} navigation={navigation} />;
					}}
					keyExtractor={(item) => item.id}
					numColumns={2}
				/>
			</View>
		</SafeAreaView>
	);
};

const HomeStack = () => {
	return (
		<Stack.Navigator initialRouteName="HomeScreen">
			<Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
			<Stack.Screen
				name="CarDetails"
				component={CarDetails}
				options={{
					headerTintColor: "#17B3A6",
					headerBackTitleVisible: false,
					headerTitleStyle: {
						fontSize: 25, // Set the desired font size
						fontWeight: "bold",
					},
				}}
			/>
			<Stack.Screen
				name="Search"
				component={Search}
				options={{
					headerTintColor: "#17B3A6",
					headerBackTitleVisible: false,
					headerTitleStyle: {
						fontSize: 25, // Set the desired font size
						fontWeight: "bold",
					},
				}}
			/>
		</Stack.Navigator>
	);
};

export default HomeStack;
