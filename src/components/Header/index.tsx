import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Feather from 'react-native-vector-icons/Feather';


export default function Header(): JSX.Element {
  const StatusBarHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight + 1
    : 16;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>Home</Text>
        <TouchableOpacity style={styles.buttonUser}>
          <Feather name="user" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6e7d3",
    // paddingTop: StatusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 10,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: "#f6e7d3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 44 / 2,
  },
});
