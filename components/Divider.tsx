import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: "80%",
    borderWidth: 0.2,
    borderColor: "#ffffff",
    margin: 20,
  },
});

function Divider() {
  return <View style={styles.divider} />;
}

export default Divider;
