import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
  details: {
    alignItems: "center",
    flexDirection: "row",
  },
  detail: {
    height: 80,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  value: {
    color: "#ffffff",
    fontSize: 15,
    overflow: "visible",
    textAlign: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 10,
    overflow: "visible",
    textAlign: "center",
  },
  icon: {
    margin: 10,
  },
});

type WeatherDetailsProps = {
  wind: number;
  humidity: number;
  precipitation: number;
};

function WeatherDetails({
  wind,
  humidity,
  precipitation,
}: WeatherDetailsProps) {
  return (
    <View style={styles.details}>
      <View style={styles.detail}>
        <Icon name="cloud" color="white" size={30} style={styles.icon} />
        <Text style={styles.value}>{`${wind} km/h`}</Text>
        <Text style={styles.text}>Wind</Text>
      </View>
      <View style={styles.detail}>
        <Icon name="water" color="white" size={30} style={styles.icon} />
        <Text style={styles.value}>{`${humidity}%`}</Text>
        <Text style={styles.text}>Humidity</Text>
      </View>
      <View style={styles.detail}>
        <Icon name="rainy" color="white" size={30} style={styles.icon} />
        <Text style={styles.value}>{`${precipitation}%`}</Text>
        <Text style={styles.text}>Chance of rain</Text>
      </View>
    </View>
  );
}

export default WeatherDetails;
