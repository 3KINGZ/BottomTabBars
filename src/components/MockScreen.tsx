import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const MockScreen = ({ screenName }: { screenName: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenName}>{screenName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  screenName: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
