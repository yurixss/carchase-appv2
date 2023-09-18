import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Car } from '../../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  BackButton,
  ButtonContainer,
  ButtonText,
  ConfirmButton,
  Container,
  Details,
  DetailsContainer,
  Header,
  Name,
  NameContainer,
  NextButton,
  Price,
  PriceContainer,
} from './styles';
import Reanimated, { SlideInUp } from 'react-native-reanimated';
import { RootStackParamList } from '../../routes';
import { CarCardProps } from '../../components/home/CarCard';
import H1 from '../../components/pattern/H1';

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
      console.warn(response.data);
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
      <Header>
        <BackButton title="Return" onPress={() => navigation.navigate('Home')} color={'black'}>
          <ButtonText>Return</ButtonText>
        </BackButton>
        <H1>Detalhes do carro</H1>
      </Header>

      <Reanimated.Image
        key={image}
        entering={SlideInUp.duration(350)}
        source={car?.image ? { uri: car?.image } : defaultImage}
        style={{
          width: '100%',
          height: 300,
          borderRadius: 30,
        }}
      />

      <DetailsContainer>
        <NameContainer>
          <Name>{car?.name}</Name>
          <PriceContainer>
            <Price>${car?.price}</Price>
          </PriceContainer>
        </NameContainer>

        <Details>Descrição: ${car?.description}</Details>
        <Details>Brand: {car?.model}</Details>
        <Details>KM: {car?.km}</Details>
        <Details>Color: {car?.color}</Details>
        <Details>Year: {car?.year}</Details>

        <ButtonContainer>
          <ConfirmButton>
            <ButtonText>Negociar agora</ButtonText>
          </ConfirmButton>
          <NextButton>
            <ButtonText>Salvar ánuncio</ButtonText>
          </NextButton>
        </ButtonContainer>
      </DetailsContainer>
    </Container>
  );
};
