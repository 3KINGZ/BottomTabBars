import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { routes } from "./routes";
import { TabNavigator1 } from "./TabNavigator1";
import { HomeScreen } from "../Screens";

const Stack = createStackNavigator();

export const AppStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.Home} component={HomeScreen} />
      <Stack.Screen name={routes.TabNavigator1} component={TabNavigator1} />
      <Stack.Screen name={routes.TabNavigator2} component={HomeScreen} />
    </Stack.Navigator>
  );
};
