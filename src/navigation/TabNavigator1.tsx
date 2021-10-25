import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AnimatedTabBar, { TabsConfigsType } from "curved-bottom-navigation-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/AntDesign";
import { MockScreen } from "../components";

const tabs: TabsConfigsType = {
  Home: {
    icon: ({ progress }) => <Icon name="home" {...progress} size={20} />,
    renderTitle: ({ progress, title }) => <Text>Home</Text>,
  },
  AddContent: {
    icon: ({ progress }) => <Icon name="plus" {...progress} size={20} />,
    renderTitle: ({ progress, title }) => <Text>Add Content</Text>,
  },
  Inbox: {
    icon: ({ progress }) => <Icon name="inbox" {...progress} size={20} />,
    renderTitle: ({ progress, title }) => <Text>Inbox</Text>,
  },
};

const Tab = createBottomTabNavigator();

const HomeComp = () => <MockScreen screenName="Home" />;
const AddContentComp = () => <MockScreen screenName="Add Content" />;
const InboxComp = () => <MockScreen screenName="Inbox" />;

export const TabNavigator1 = () => {
  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props: any) => {
          console.log("A props", props);
          return <AnimatedTabBar tabs={tabs} {...props} dotColor="purple" />;
        }}>
        <Tab.Screen name="Home" component={HomeComp} />
        <Tab.Screen name="AddContent" component={AddContentComp} />
        <Tab.Screen name="Inbox" component={InboxComp} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};
