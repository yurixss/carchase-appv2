import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Announce from "./pages/Announce";
import { Dimensions } from "react-native";

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
          height: Dimensions.get('window').width / 5, 
          width: Dimensions.get('window').width / 1.5,  
          backgroundColor: "#121212",
          borderTopWidth: 0,
          marginBottom: 20,
          marginLeft: 70,
          borderRadius: 50,
          padding: 20,
          alignSelf: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            if (focused) {
              return <Ionicons name="grid" size={size} color={"white"} />;
            } else {
              return <Ionicons name="grid-outline" size={size} color={color} />;
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
              return <Ionicons name="flame" size={size} color={"white"} />;
            } else {
              return <Ionicons name="flame-outline" size={size} color={color} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Teste"
        component={Announce}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            if (focused) {
              return <Ionicons name="hammer" size={size} color={"white"} />;
            } else {
              return <Ionicons name="hammer-outline" size={size} color={color} />;
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
              return <Ionicons name="cog" size={size} color={"white"} />;
            } else {
              return (
                <Ionicons name="cog-outline" size={size} color={color} />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}
