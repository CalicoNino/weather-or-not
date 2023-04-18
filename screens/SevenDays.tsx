import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BlueLayoutOpen from "../components/BlueLayoutOpen";
import HourWeather from "../components/HourWeather";
import { hours } from "../__mocks__";

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
      <BlueLayoutOpen
        isUpdating={false}
        temperature={50}
        description="Sunny"
        date="Thursday, May 4th"
        wind={13}
        humidity={24}
        precipitation={87}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "75%",
          marginVertical: 15,
        }}
      >
        <Text style={styles.title}>Today</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.subtitle}>7 Days</Text>
          <Icon
            name="chevron-forward-outline"
            color="white"
            size={15}
            style={styles.icon}
          />
        </View>
      </View>

      <ScrollView
        horizontal
        style={{
          width: "100%",
          marginVertical: 15,
          overflow: "visible",
        }}
      >
        {hours.map(({ temperature, time, selected }) => (
          <HourWeather
            key={time}
            temperature={temperature}
            time={time}
            selected={selected}
          />
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

export default SevenDayScreen;
