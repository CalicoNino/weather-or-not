import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import BlueLayoutMinimized from "../components/BlueLayoutMinimized";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c0c1c",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  subtitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  icon: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

function SevenDayScreen() {
  return (
    <View style={styles.container}>
      <BlueLayoutMinimized
        isUpdating={false}
        wind={13}
        humidity={24}
        precipitation={87}
      />

      <StatusBar style="auto" />
    </View>
  );
}

export default SevenDayScreen;
