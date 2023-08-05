import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export type CarCardProps = {
  id: number;
  name: string;
  color: string;
  price: number;
  km: number;  
}

const CarCard: React.FC<CarCardProps> = ({ id, name, color, price, km }) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>

        <Text style={styles.color}>{color}</Text>

        <Text style={styles.price}>{price}</Text>

        <Text style={styles.km}>{km}</Text>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flexDirection: "column",
    width: "90%",
    height: 300,
    maxHeight: 350,
    marginTop: 20,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 12,
  },
  image: {
    width: "100%",
    height: "50%",
    borderRadius: 12,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    maxWidth: 200,
    color: "white",
    fontSize: 24,
    alignSelf: "baseline",
  },
  color: {
    color: "white",
    fontSize: 14,
    marginBottom: 4,
  },
  price: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  km: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  buyButton: {
    backgroundColor: "#3e6b48",
    maxWidth: 200,
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  buyButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default CarCard;
