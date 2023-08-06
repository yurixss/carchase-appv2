import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export type CarCardProps = {
  id: number;
  name: string;
  color: string;
  price: number;
  km: number; 
  image?: string;
}

const CarCard: React.FC<CarCardProps> = ({ image, color, name, price, km }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: color }}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        </View>

        <Text style={styles.price}>{price}</Text>

        <Text style={styles.km}>{km}</Text>
    
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "98%",
    height: 200,
    maxHeight: 350,
    marginTop: 20,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 60,
  },
  image: {
    width: "100%",
    height: "50%",
    borderRadius: 12,
  },
  detailsContainer: {
    flex: 1,
  },
  nameContainer: {
    backgroundColor: "white",
    borderRadius: 20,
  },
  name: {
    color: "black",
    fontSize: 20,
    alignSelf: "center",
    padding: 10,
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
