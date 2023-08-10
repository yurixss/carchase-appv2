import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { api } from '../../services/api';
import { Car } from '../../types';

interface CarDetailsProps {
    route: {
      params: {
        carId: string;
      };
    };
  }
  
const CarDetails: React.FC<CarDetailsProps> = ({ route }) => {
  const { carId } = route.params;
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    axios
      api.get(`show/${carId}`)
      .then((response) => {
        setCar(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [carId]);

  if (!car) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{car.name}</Text>
      <Image source={{ uri: car.image }} style={styles.image} />
      <Text style={styles.details}>KM: {car.km}</Text>
      <Text style={styles.details}>Price: ${car.price}</Text>
      <Text style={styles.details}>Color: {car.color}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default CarDetails;
