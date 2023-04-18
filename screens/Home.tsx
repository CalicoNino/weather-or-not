import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c0c1c",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
  },
});

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chantgnrged</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;
