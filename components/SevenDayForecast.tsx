import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignItems: "center",
    marginHorizontal: 5,
    alignContent: "center",
    height: 75,
  },
  temperature: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  day: { color: "white", fontSize: 15 },
  forecast: { color: "white", fontSize: 15 },
  icon: {
    margin: 5,
  },
  description: {
    textAlignVertical: "center",
    flexDirection: "row",
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
    <View style={styles.row}>
      <View style={styles.container}>
        <Text style={styles.day}>{day}</Text>
        <View style={styles.description}>
          <Icon
            name="thunderstorm"
            color="white"
            size={20}
            style={styles.icon}
          />
          <Text style={styles.forecast}>{forecast}</Text>
        </View>
        <Text style={styles.temperature}>{`${temperature}°`}</Text>
      </View>
    </View>
  );
}

export default SevenDayForecast;
