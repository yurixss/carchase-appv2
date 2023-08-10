import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import { api } from '../../services/api';
import { Car } from '../../types';
import { useNavigation } from '@react-navigation/native';
import TextApp from '../../components/TextApp';

interface CarDetailsProps {
    route: {
      params: {
        carId: string;
      };
    };
  }
  
const CarDetails: React.FC<CarDetailsProps> = ({ route }) => {

  const carId = route?.params?.carId;
  const [car, setCar] = useState<Car | null>(null);
  const navigation = useNavigation();

  async function getCar() {
    try {
      const response = await api.get(`cars/show/${carId}`)
      setCar(response.data);
    } 
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCar();
  }, []);
  
  if (!car) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: car?.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View>
          <TextApp style={styles.name}>{car?.name}</TextApp>
          <TextApp style={styles.details}>Price: ${car?.price}</TextApp>
        </View>
        <TextApp style={styles.details}>KM: {car?.km}</TextApp>
        <TextApp style={styles.details}>Color: {car?.color}</TextApp>
      </View>
        <Button title="Return" onPress={() => navigation.navigate('Home')} />
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
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 20,
  },
  details: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default CarDetails;
