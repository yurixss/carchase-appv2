import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Announce from './pages/Announce';
import { Dimensions, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { CarDetails } from './pages/CarDetails';
import { Configs } from './pages/Configs';
import Login from './pages/Login';
import { screenWidth } from './utils';
import { Register } from './pages/Register';

//tipando para n dar error 'parâmetro do tipo 'never'.ts'
export type RootStackParamList = {
  CarDetails: {
    carId: number;
  };
  Home: string;
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabNavigator(): JSX.Element {
  //aserção de tipo, garante que a position absolut seja reconhecido como tipo correto
  const iconStyle = {
    position: 'absolute' as 'absolute',
    paddingTop: 30,
  };

  //state para definir a opacidade da bottomTab
  const [tabBarOpacity, setTabBarOpacity] = useState(0.5);

  //se a tabBarOpacity for igual a 1.0 após 6 segundos retorna para 0.5
  useEffect(() => {
    if (tabBarOpacity === 1.0) {
      const timeoutId = setTimeout(() => {
        setTabBarOpacity(0.5);
      }, 6000);

      return () => clearTimeout(timeoutId);
    }
  }, [tabBarOpacity]);

  const handleIconPress = () => {
    setTabBarOpacity(1.0);
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: 'absolute',
          height: screenWidth / 7,
          width: screenWidth / 1.5,
          backgroundColor: 'white',
          opacity: tabBarOpacity,
          borderTopWidth: 0,
          marginBottom: 15,
          marginLeft: 70,
          borderRadius: 40,
        },
      }}
    >
      <Tab.Screen
        name="Announce"
        component={Announce}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            return (
              <View style={iconStyle}>
                {focused ? (
                  <Ionicons
                    name="add-circle"
                    size={size}
                    color={'green'}
                    onTouchStart={handleIconPress}
                  />
                ) : (
                  <Ionicons
                    name="add-circle-outline"
                    size={size}
                    color={color}
                    onTouchStart={handleIconPress}
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            return (
              <View style={iconStyle}>
                {focused ? (
                  <Ionicons name="car" size={size} color={'green'} onTouchStart={handleIconPress} />
                ) : (
                  <Ionicons
                    name="car-outline"
                    size={size}
                    color={color}
                    onTouchStart={handleIconPress}
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Configs"
        component={Configs}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            return (
              <View style={iconStyle}>
                {focused ? (
                  <Ionicons
                    name="settings"
                    size={size}
                    color={'green'}
                    onTouchStart={handleIconPress}
                  />
                ) : (
                  <Ionicons
                    name="settings-outline"
                    size={size}
                    color={color}
                    onTouchStart={handleIconPress}
                  />
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
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="HomeTabs" component={BottomTabNavigator} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
    </Stack.Navigator>
  );
}
