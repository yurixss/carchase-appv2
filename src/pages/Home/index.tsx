import { FlatList, RefreshControl } from 'react-native';
import Header from '../../components/home/Header';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import CarCard from '../../components/home/CarCard';
import React from 'react';
import CarBrandsList from '../../components/home/BrandCard';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default function Home() {
  const [brands, setBrands] = useState([]);
  const [cars, setCars] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'CarDetails'>>();
  const [searchCar, setSearchCar] = useState('');

  // cars array filter by searchCar
  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchCar.toLowerCase())
  );

  const handleCardPress = (carId) => {
    navigation.navigate('CarDetails', { carId });
  };

  //TODO - Remove this mock
  const brandsXumbada = [
    {
      id: '1',
      logo: require('/Users/yurixss/carchase-appv2/assets/logo-porsche.jpeg'),
    },
    {
      id: '2',
      logo: require('/Users/yurixss/carchase-appv2/assets/lambo-logo.jpeg'),
    },
    {
      id: '3',
      logo: require('/Users/yurixss/carchase-appv2/assets/ferrari-logo.jpeg'),
    },
    {
      id: '4',
      logo: require('/Users/yurixss/carchase-appv2/assets/logo-pegeout.jpeg'),
    },
    {
      id: '4',
      logo: require('/Users/yurixss/carchase-appv2/assets/bmw-logo.jpeg'),
    },
    {
      id: '4',
      logo: require('/Users/yurixss/carchase-appv2/assets/logo-audi.jpeg'),
    },
  ];

  async function getBrands() {
    try {
      const response = await api.get('brands/index');
      setBrands(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getCars() {
    try {
      setRefreshing(true);
      const response = await api.get('cars/index');
      setCars(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    try {
      Promise.allSettled([getCars(), getBrands()]);
    } catch {
      Toast.show({
        type: 'error',
        text1: 'Erro ao carregar os carros',
        text2: 'Tente novamente',
      });
    }
  }, []);

  return (
    <>
      <Header setSearchCar={setSearchCar} />
      <CarBrandsList brands={brandsXumbada} />
      <FlatList
        data={filteredCars}
        renderItem={({ item }) => <CarCard onPress={() => handleCardPress(item.id)} {...item} />}
        keyExtractor={(car) => car.id.toString()}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getCars} />}
      />
    </>
  );
}
