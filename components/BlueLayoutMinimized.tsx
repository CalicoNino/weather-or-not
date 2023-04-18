import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Divider from "./Divider";
import WeatherDetails from "./WeatherDetails";

const styles = StyleSheet.create({
  container: {
    borderBottomRightRadius: 90,
    borderBottomLeftRadius: 90,
    width: "100%",
    height: "40%",
  },
  blue: {
    borderBottomRightRadius: 90,
    borderBottomLeftRadius: 90,
    width: "100%",
    height: "100%",
    alignItems: "center",
    marginBottom: 5,
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
  icon: {
    marginTop: 30,
    marginBottom: 20,
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

type BlueLayoutProps = {
  isUpdating: boolean;
  wind: number;
  humidity: number;
  precipitation: number;
};

function BlueLayoutMinimized({
  isUpdating,
  wind,
  humidity,
  precipitation,
}: BlueLayoutProps) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "#60bcf4",
          "#50ace3",
          "#4c9ce4",
          "#4a85da",
          "#3264ec",
          "#3264ec",
        ]}
        style={styles.blue}
      >
        <Text style={styles.text}>
          {isUpdating ? "Updated" : "🟡 Updating"}
        </Text>
        <Divider />
        <WeatherDetails
          wind={wind}
          humidity={humidity}
          precipitation={precipitation}
        />
      </LinearGradient>
    </View>
  );
}

export default BlueLayoutMinimized;
