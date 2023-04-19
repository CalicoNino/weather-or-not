import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    borderWidth: 0,
    // borderColor: "black",
    borderRadius: 10,
    width: "100%",
    height: 75,
    marginVertical: 0,
  },
  temperature: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    width: "33%",
  },
  day: { color: "white", fontSize: 15, width: "33%" },
  forecast: { color: "white", fontSize: 15, width: "33%" },
  icon: {
    margin: 10,
  },
});

type SevenDayForecastProps = {
  day: string;
  forecast: string;
  temperature: number;
  //   selected: boolean | undefined;
};

function SevenDayForecast({
  day,
  forecast,
  temperature,
}: SevenDayForecastProps) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.container}>
        <Text style={styles.day}>{day}</Text>
        <Text style={styles.forecast}>{forecast}</Text>
        {/* <Icon name="thunderstorm" color="white" size={30} style={styles.icon} /> */}
        <Text style={styles.temperature}>{`${temperature}°`}</Text>
      </View>
    </View>
  );
}

export default SevenDayForecast;
