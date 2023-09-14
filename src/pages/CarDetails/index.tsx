import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Car } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { Button, Container, Details, DetailsContainer, Name } from './styles';
import Reanimated, { SlideInUp } from 'react-native-reanimated';

interface CarDetailsProps {
  route: {
    params: {
      carId: string;
    };
  };
  image: string;
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
    <Container>
      <Button
        title="Return"
        onPress={() => navigation.navigate('HomeTabs', { screen: 'Home' })}
        color={'black'}
      />

      <Reanimated.Image
        key={image}
        entering={SlideInUp.duration(500)}
        source={image ? { uri: image } : defaultImage}
        style={{
          width: '100%',
          height: 200,
          resizeMode: 'cover',
          borderRadius: 20,
        }}
      />

      <DetailsContainer>
        <Name>{car?.name}</Name>
        <Details>Brand: {car?.model}</Details>
        <Details>KM: {car?.km}</Details>
        <Details>Color: {car?.color}</Details>
        <Details>Year: {car?.year}</Details>
        <Details>Price: ${car?.price}</Details>
      </DetailsContainer>
    </Container>
  );
};
