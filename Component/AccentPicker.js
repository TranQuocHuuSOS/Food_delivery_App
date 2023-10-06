import React from "react";
import {
  StyleSheet,
  Text,
  View,
  
  Dimensions,
} from "react-native";
import { HEIGHT } from "../misc/consts";
const { width: windowWidth } = Dimensions.get("window");
const gap = 10;

function AccentPicker({ onPick }) {
  return (
    <>
      <Text style={styles.label}>Choose accent</Text>
      <View style={styles.container}>
        <Text>HAHAHA</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: gap,
    flex: 1,
    height: HEIGHT / 2,
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    backgroundColor:"black"
  },
  
});

export default AccentPicker;
