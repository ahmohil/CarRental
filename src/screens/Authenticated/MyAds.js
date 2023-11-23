import React from "react";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MyAds = () =>{
    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>My Ads</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

export default MyAds;