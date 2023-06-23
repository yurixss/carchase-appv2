import { View, Text, StyleSheet } from "react-native";

export default function Announce(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Anunciar Carro</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
