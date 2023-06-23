import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Announce from "./pages/Announce";

const Tab = createBottomTabNavigator();

export function Routes(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#121212",

        tabBarStyle: {
          position: "absolute",
          backgroundColor: "black",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            if (focused) {
              return <Ionicons name="star" size={size} color={"white"} />;
            } else {
              return <Ionicons name="star-outline" size={size} color={color} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Announce"
        component={Announce}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={"white"} />;
            } else {
              return <Ionicons name="home-outline" size={size} color={color} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            if (focused) {
              return <Ionicons name="search" size={size} color={"white"} />;
            } else {
              return (
                <Ionicons name="search-outline" size={size} color={color} />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}
