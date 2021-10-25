import React from "react";
import { View, StyleSheet } from "react-native";

import { ButtonCaret } from "../components";
import { routes } from "../navigation/routes";

export const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ButtonCaret
        label="Tab1"
        onPress={() => navigation.navigate(routes.TabNavigator1)}
      />
      <ButtonCaret
        label="Tab2"
        onPress={() => navigation.navigate(routes.TabNavigator1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
