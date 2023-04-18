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

type TitleProps = {
  location: string;
};

function Title({ location }: TitleProps) {
  return (
    <View style={styles.container}>
      <Icon name="location" color="white" size={20} style={styles.icon} />
      <Text style={styles.text}>{location}</Text>
    </View>
  );
}

export default Title;
