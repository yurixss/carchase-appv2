import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Car } from '../../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, Container, Details, DetailsContainer, Name } from './styles';
import Reanimated, { SlideInUp } from 'react-native-reanimated';
import { RootStackParamList } from '../../routes';
import { CarCardProps } from '../../components/home/CarCard';

export const CarDetails = ({ route, image }: CarCardProps) => {
  const carId = route?.params?.carId;
  const [car, setCar] = useState<Car | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'Home'>>();
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
      <Button title="Return" onPress={() => navigation.navigate('Home')} color={'black'} />

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
        <Details>Descrição: ${car?.description}</Details>
      </DetailsContainer>
    </Container>
  );
};
