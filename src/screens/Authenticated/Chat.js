import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = () => {
  const messages = []; // Assuming this will hold the message objects in future

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {messages.length === 0 ? (
          <View style={styles.emptyChatContainer}>
            <Text style={styles.emptyChatText}>You don't have any messages yet. Start a conversation!</Text>
          </View>
        ) : (
          <View>
            {messages.map((message, index) => (
              <Text key={index} style={styles.messageText}>
                {message}
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
  emptyChatContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyChatText: {
    fontSize: 18,
    textAlign: "center",
    color: "#555",
  },
  messageText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Chat;
