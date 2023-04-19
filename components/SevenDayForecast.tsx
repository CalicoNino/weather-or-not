import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    height: "11%",
  },
  info: {
    height: "100%",
    width: "25%",
    justifyContent: "center",
    alignContent: "center",
  },
  forecast: {
    color: "white",
    fontSize: 15,
  },
  icon: {
    margin: 5,
  },
  text: { color: "white", fontSize: 15, textAlign: "center" },
  description: {
    flexDirection: "row",
    height: "100%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
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
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.text}>{day}</Text>
      </View>
      <View style={styles.description}>
        <View
          style={{
            height: "100%",
            width: "20%",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Icon
            name="thunderstorm"
            color="white"
            size={20}
            style={styles.icon}
          />
        </View>
        <View
          style={{
            height: "100%",
            width: "35%",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text style={styles.forecast}>{forecast}</Text>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={{ fontWeight: "bold", ...styles.text }}>
          {`${temperature}°`}
        </Text>
      </View>
    </View>
  );
}

export default SevenDayForecast;
