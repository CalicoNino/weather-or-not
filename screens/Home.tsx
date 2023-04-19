import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
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
    fontSize: 10,
  },
  icon: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
});

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BlueLayoutOpen
        temperature={34}
        description="Thunderstorm"
        date="Monday, 17 May"
        wind={13}
        humidity={24}
        precipitation={87}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "87%",
          paddingTop: 15,
          marginVertical: 15,
        }}
      >
        <Text style={styles.title}>Today</Text>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => navigation.navigate("SevenDays")}
        >
          <Text style={styles.subtitle}>7 Days</Text>
          <Icon
            name="chevron-forward-outline"
            color="white"
            size={15}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        style={{
          width: "100%",
          marginVertical: 20,
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

export default HomeScreen;
