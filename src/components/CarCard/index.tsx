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

    <Image source={require("/Users/yurixss/carchase-appv2/assets/aventador.jpeg")} style={styles.image} />

      <View style={styles.detailsContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>

        <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}</Text>
        </View>
    
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "97%",
    height: 200,
    maxHeight: 350,
    marginTop: 20,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    alignSelf: "center",
  },
  detailsContainer: {
    position: "absolute",
    marginTop: 20,
    marginLeft: 20,
  },
  nameContainer: {
    backgroundColor: "white",
    borderRadius: 20,
  },
  name: {
    color: "#657a38",
    fontSize: 15,
    alignSelf: "center",
    padding: 10,
    fontWeight: "bold",
  },
  priceContainer: {
    backgroundColor: "white",
    borderRadius: 20,
  },
  price: {
    color: "#657a38",
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
