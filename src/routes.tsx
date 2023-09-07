import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import Home from './pages/Home';
import Search from './pages/Search';
import Announce from './pages/Announce';
import { Dimensions, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { CarDetails } from './pages/CarDetails';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabNavigator(): JSX.Element {
  const iconStyle = {
    position: 'absolute',
    paddingTop: 30,
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: 'absolute',
          height: Dimensions.get('window').width / 7,
          width: Dimensions.get('window').width / 1.5,
          backgroundColor: 'black',
          borderTopWidth: 0,
          marginBottom: 20,
          marginLeft: 70,
          borderRadius: 50,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            return (
              <View style={iconStyle}>
                {focused ? (
                  <Ionicons name="car" size={size} color={'white'} />
                ) : (
                  <Ionicons name="car-outline" size={size} color={color} />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Announce"
        component={Announce}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            return (
              <View style={iconStyle}>
                {focused ? (
                  <Ionicons name="add-circle" size={size} color={'white'} />
                ) : (
                  <Ionicons name="add-circle-outline" size={size} color={color} />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            return (
              <View style={iconStyle}>
                {focused ? (
                  <Ionicons name="settings" size={size} color={'white'} />
                ) : (
                  <Ionicons name="settings-outline" size={size} color={color} />
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export function Routes(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={BottomTabNavigator} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
    </Stack.Navigator>
  );
}
