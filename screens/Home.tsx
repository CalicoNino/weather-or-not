import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import BlueLayoutOpen from "../components/BlueLayoutOpen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c0c1c",
    alignItems: "center",
    flexDirection: "column",
  },
  blue: {
    borderBottomRightRadius: 90,
    borderBottomLeftRadius: 90,
    width: "100%",
    height: "70%",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#ffffff",
    marginBottom: 5,
    shadowColor: "#ffffff",
    shadowOpacity: 80,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  text: {
    color: "#ffffff",
    borderWidth: 1,
    borderColor: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: 10,
  },
  cloud: {
    width: "40%",
    height: "30%",
    backgroundColor: "red",
    margin: 10,
  },
  temperature: {
    color: "#ffffff",
    fontSize: 100,
    fontWeight: "bold",
  },
  description: {
    color: "#ffffff",
    fontSize: 20,
  },
  date: {
    color: "#ffffff",
    fontSize: 15,
  },
});

function HomeScreen() {
  return (
    <View style={styles.container}>
      <BlueLayoutOpen
        isUpdating={false}
        temperature={34}
        description="Thunderstorm"
        date="Monday, 17 May"
        wind={13}
        humidity={24}
        precipitation={87}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default HomeScreen;
