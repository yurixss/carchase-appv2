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
import SimpleSearch from "../SimpleSearch";


export default function Header(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <TouchableOpacity style={styles.buttonUser}>
          <Feather name="user" size={24} color="#657a38" />
        </TouchableOpacity>

        <SimpleSearch onSearch={() => {}} />

        <TouchableOpacity style={styles.buttonUser}>
          <Feather name="shopping-bag" size={24} color="#657a38" />
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
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
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 44 / 2,
  },
});
