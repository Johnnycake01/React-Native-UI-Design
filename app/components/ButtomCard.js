import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons, FontAwesome5, FontAwesome } from "@expo/vector-icons";

import colors from "../config/colors";

function ButtomCard(props) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="home-outline"
        size={22}
        style={{ color: colors.bgWhite }}
      />
      <FontAwesome5 name="tasks" size={22} style={{ color: colors.bgWhite }} />
      <Ionicons
        name="add-circle"
        size={50}
        style={{ color: colors.bgLightBlue, marginBottom: 30 }}
      />
      <FontAwesome
        name="calendar"
        size={22}
        style={{ color: colors.bgWhite }}
      />
      <Ionicons name="person" size={22} style={{ color: colors.bgWhite }} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    left: 10,
    flexDirection: "row",
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default ButtomCard;
