import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: "15%",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 20,
    marginTop: 25,
  },
});

function Drag() {
  return <View style={styles.divider} />;
}

export default Drag;
