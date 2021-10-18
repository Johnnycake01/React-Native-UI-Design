import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import colors from "./app/config/colors";
import Card from "./app/components/Card";
import ButtomCard from "./app/components/ButtomCard";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circularContainer}>
        <Ionicons name="person" size={24} color="black" />
      </View>
      <FontAwesome name="search" size={24} style={styles.searchContainer} />
      <View style={styles.textContainer}>
        <View style={styles.helloAjayContainer}>
          <Text style={styles.helloProps}>Hello </Text>
          <Text style={styles.ajayProps}>Ajay!</Text>
        </View>
        <Text style={styles.text3}>lets be productive today</Text>
        <Card
          txtime="8:00"
          txAction="Call"
          txActionName="John Hammond"
          txJobType="Family"
          dynamicColor={colors.bgLightBlue}
        />
        <Card
          txtime="9:00"
          txAction="Join"
          txActionName="Meeting"
          txJobType="work"
          dynamicColor={colors.bgLightOrange}
        />
        <Card
          txtime="11:00"
          txAction="Meeting"
          txActionName="With Team"
          txJobType="work"
          dynamicColor={colors.bgLightOrange}
        />
      </View>
      <ButtomCard />
    </View>
  );
}

const styles = StyleSheet.create({
  ajayProps: {
    color: colors.txYellow,
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    paddingTop: StatusBar.currentHeight,
    padding: 15,
  },
  circularContainer: {
    position: "absolute",
    top: 30,
    left: 20,
    borderRadius: 25,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bgWhite,
  },
  helloProps: {
    color: colors.txWhite,
    fontSize: 20,
    fontWeight: "bold",
  },
  helloAjayContainer: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "center",
  },
  searchContainer: {
    position: "absolute",
    top: 30,
    right: 20,
    color: colors.bgWhite,
  },
  textContainer: {
    top: 30,
  },
  text3: {
    color: colors.txWhite,
    fontSize: 15,
    textAlign: "center",
  },
});
