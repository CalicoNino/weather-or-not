import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  text: { color: "white", fontWeight: "bold", fontSize: 25 },
});

function SevenDaysTitle() {
  return (
    <View style={styles.container}>
      <Icon
        name="calendar-outline"
        color="white"
        size={20}
        style={styles.icon}
      />
      <Text style={styles.text}>7 Days</Text>
    </View>
  );
}

export default SevenDaysTitle;
