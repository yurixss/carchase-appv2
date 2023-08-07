import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export type CarCardProps = {
  id: number;
  name: string;
  color: string;
  price: string;
  km: number; 
  image: string;
}

const CarCard: React.FC<CarCardProps> = ({ image, name, price }) => {
  const defaultImage = "/Users/yurixss/carchase-appv2/assets/favicon.png";

  return (
    <View style={styles.container}>

    <Image source={{ uri: image || defaultImage }} style={styles.image} />

      <View style={styles.detailsContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>

        <Text style={styles.price}>{price}</Text>
    
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "97%",
    backgroundColor: "#3e6b48",
    height: 200,
    maxHeight: 350,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 60,
  },
  image: {
    width: "50%",
    height: "50%",
    alignSelf: "center",
  },
  detailsContainer: {
    flex: 1,
    marginTop: -50,
    marginLeft: 20,
    maxWidth: 200,
  },
  nameContainer: {
    backgroundColor: "white",
    borderRadius: 20,
  },
  name: {
    color: "black",
    fontSize: 15,
    alignSelf: "center",
    padding: 10,
  },
  price: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  km: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  }
});

export default CarCard;
