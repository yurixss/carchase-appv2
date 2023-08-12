import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import TextApp from "../../TextApp";

export type CarCardProps = {
  id: number;
  name: string;
  color: string;
  price: string;
  km: number; 
  image: string;
  onPress: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ image, name, price, onPress }) => {
  const defaultImage = require("/Users/yurixss/carchase-appv2/assets/aventador.jpeg");
  
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>

      <Image 
        source={image ? { uri: image } : defaultImage} 
        style={styles.image} 
        onError={(e) => console.log(e.nativeEvent.error)} 
      />

      <View style={styles.detailsContainer}>
        <View style={styles.nameContainer}>
          <TextApp style={styles.name}>{name}</TextApp>
        </View>

        <View style={styles.priceContainer}>
          <TextApp style={styles.price}>{price}</TextApp>
        </View>
    
      </View>
    </View>
    </TouchableOpacity>
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
    width: 90,
    marginTop: 10,
  },
  price: {
    color: "#657a38",
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
  km: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  }
});

export default CarCard;