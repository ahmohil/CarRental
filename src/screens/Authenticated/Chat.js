import React from "react";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () =>{
    return(
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Chat</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

export default Chat;