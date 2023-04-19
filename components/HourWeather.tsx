import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 30,
    width: 70,
    height: 110,
    marginHorizontal: 5,
  },
  selectedContainer: {
    flexDirection: "column",
    backgroundColor: "#4c9ce4",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 30,
    width: 75,
    height: 115,
    marginHorizontal: 5,
  },
  temperature: { color: "white", fontSize: 15, fontWeight: "bold" },
  hour: { color: "white", fontSize: 10 },
  icon: {
    margin: 10,
  },
});

type HourWeatherProps = {
  temperature: number;
  time: string;
  selected: boolean | undefined;
};

function HourWeather({ temperature, time, selected }: HourWeatherProps) {
  return (
    <View style={selected ? styles.selectedContainer : styles.container}>
      <Text style={styles.temperature}>{`${temperature}°`}</Text>
      <Icon name="thunderstorm" color="white" size={30} style={styles.icon} />
      <Text style={styles.hour}>{time}</Text>
    </View>
  );
}

export default HourWeather;
