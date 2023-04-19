import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import Divider from "./Divider";
import WeatherDetails from "./WeatherDetails";

const styles = StyleSheet.create({
  container: {
    borderBottomRightRadius: 90,
    borderBottomLeftRadius: 90,
    width: "100%",
    height: "65%",
  },
  blue: {
    borderBottomRightRadius: 90,
    borderBottomLeftRadius: 90,
    width: "100%",
    height: "100%",
    alignItems: "center",
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
    marginTop: 10,
    marginBottom: 10,
  },
  temperature: {
    color: "#ffffff",
    fontSize: 80,
    fontWeight: "bold",
  },
  description: {
    color: "#ffffff",
    fontSize: 25,
  },
  date: {
    color: "#ffffff",
    fontSize: 15,
  },
});

type BlueLayoutProps = {
  temperature: number;
  description: string;
  date: string;
  wind: number;
  humidity: number;
  precipitation: number;
};

function BlueLayoutOpen({
  temperature,
  description,
  date,
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
        <Icon
          name="cloudy-night"
          color="white"
          size={160}
          style={styles.icon}
        />
        <Text style={styles.temperature}>{`${temperature}°`}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.date}>{date}</Text>
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

export default BlueLayoutOpen;
