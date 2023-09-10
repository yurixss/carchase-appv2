import React, { useEffect, useState } from 'react';
import { View, Image, Button } from 'react-native';
import { api } from '../../services/api';
import { Car } from '../../types';
import { useNavigation } from '@react-navigation/native';
import TextApp from '../../components/pattern/TextApp';
import { styles } from './styles';
import Reanimated, { SlideInLeft, SlideInUp } from 'react-native-reanimated';

interface CarDetailsProps {
  route: {
    params: {
      carId: string;
    };
  };
}

export const CarDetails: React.FC<CarDetailsProps> = ({ route, image }) => {
  const carId = route?.params?.carId;
  const [car, setCar] = useState<Car | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  const defaultImage = require('/Users/yurixss/carchase-appv2/assets/aventador.jpeg');

  // função para buscar os dados do carro
  async function getCar() {
    setIsLoading(true);
    try {
      const response = await api.get(`cars/show/${carId}`);
      setCar(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCar();
  }, []);

  return (
    <View style={styles.container}>
      <Reanimated.Image
        key={image}
        entering={SlideInUp.duration(500)}
        source={image ? { uri: image } : defaultImage}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <View>
          <TextApp style={styles.name}>{car?.name}</TextApp>
          <TextApp style={styles.details}>Price: ${car?.price}</TextApp>
        </View>
        <TextApp style={styles.details}>KM: {car?.km}</TextApp>
        <TextApp style={styles.details}>Color: {car?.color}</TextApp>
      </View>
      <Button
        title="Return"
        onPress={() => navigation.navigate('HomeTabs', { screen: 'Home' })}
        color={'black'}
      />
    </View>
  );
};
