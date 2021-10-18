import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

function Card({ txtime, txAction, txActionName, txJobType, dynamicColor }) {
  return (
    <View
      style={{
        position: "relative",
        marginTop: 50,
      }}
    >
      <View style={styles.verySmallBox} backgroundColor={dynamicColor}>
        <Text style={{ fontSize: 8, fontWeight: "bold", textAlign: "center" }}>
          {txJobType}
        </Text>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.innerCardContainer}>
          <View style={styles.timeText}>
            <Text style={styles.time}>{txtime}</Text>
            <Text style={styles.timeFormat}>PM</Text>
          </View>
          <Text style={styles.date}>September 23, 2021</Text>
          <View style={styles.clockInContainer}>
            <Text
              style={{
                color: colors.txWhite,
                textAlign: "center",
                paddingBottom: 5,
              }}
            >
              Clock In
            </Text>
          </View>
        </View>
        <View style={styles.whitePartOfCardView}>
          <Text style={styles.whitePartOfCardViewText}>{txAction}</Text>
          <Text style={styles.whitePartOfCardViewText}>{txActionName}</Text>
          <View style={styles.joinCallButton}>
            <Ionicons name="videocam-outline" size={24} color="black" />
            <Text>Join</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    height: 100,
    width: "100%",
    backgroundColor: colors.bgWhite,
    borderRadius: 7,
    elevation: 20,
    overflow: "hidden",
  },
  clockInContainer: {
    width: 70,
    height: 30,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: colors.bgDarkBlue,
    elevation: 20,
    justifyContent: "center",
  },
  innerCardContainer: {
    height: 100,
    width: "40%",
    left: -12,
    backgroundColor: colors.bgCardBlue,
    borderRadius: 7,
    elevation: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  date: {
    fontSize: 10,
    color: colors.txWhite,
    fontWeight: "bold",
    textAlign: "center",
  },
  joinCallButton: {
    width: 70,
    borderRadius: 5,
    borderWidth: 3,
    flexDirection: "row",
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 5,
    justifyContent: "space-around",
    alignItems: "center",
  },
  time: {
    fontSize: 18,
    margin: 5,
    color: colors.txWhite,
  },
  timeFormat: {
    fontSize: 14,
    color: colors.txWhite,
  },
  timeText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  },
  whitePartOfCardView: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    left: 20,
  },
  whitePartOfCardViewText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  verySmallBox: {
    right: -5,
    top: -9,
    width: 35,
    height: 15,
    borderRadius: 10,
    position: "absolute",
    elevation: 50,
  },
});
export default Card;
