import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import Account from "../screens/Authenticated/Account";
import MyAds from "../screens/Authenticated/MyAds";
import Chat from "../screens/Authenticated/Chat";
import CreateAd from "../screens/Authenticated/CreateAd";
import HomeStack from "../screens/Authenticated/HomeScreen";
const TabBar = () => {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: "#17B3A6",
				tabBarStyle: {
					paddingBottom: 10,
					paddingTop: 10,
					height: 70,
					paddingLeft: 10,
					paddingRight: 10,
					elevation: 2,
					backgroundColor: "white",
				},
			}}>
			<Tab.Screen
				name="Home"
				component={HomeStack}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color, size }) => <AntDesign name="home" color={color} size={size} />,
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="MyAds"
				component={MyAds}
				options={{
					tabBarLabel: "My Ads",
					tabBarIcon: ({ color, size }) => <AntDesign name="tags" color={color} size={size} />,
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="CreateAd"
				component={CreateAd}
				options={{
					tabBarLabel: "Create Ad",
					tabBarIcon: ({ color, size }) => <AntDesign name="pluscircleo" color={color} size={size} />,
					tabBarItemStyle: {
						//top: -20,
						backgroundColor: "white",
						borderRadius: 50,
					},
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="Chat"
				component={Chat}
				options={{
					tabBarLabel: "Chat",
					tabBarIcon: ({ color, size }) => <AntDesign name="message1" color={color} size={size} />,
					headerShown: false,
				}}
			/>

			<Tab.Screen
				name="Account"
				component={Account}
				options={{
					tabBarLabel: "Account",
					tabBarIcon: ({ color, size }) => <AntDesign name="user" color={color} size={size} />,
					headerShown: false,
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabBar;
