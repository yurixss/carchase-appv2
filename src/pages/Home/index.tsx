import { FlatList, RefreshControl } from "react-native";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import CarCard, { CarCardProps } from "../../components/CarCard";
import React from "react";
import CarBrandsList from "../../components/BrandCard";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const handleCardPress = (carId) => {
    navigation.navigate('CarDetails', { carId });
  };

  const brands = [
    {
      id: "1",
      logoUri: require("/Users/yurixss/carchase-appv2/assets/logo-porsche.jpeg"),
    },
    {
      id: "2",
      logoUri: require("/Users/yurixss/carchase-appv2/assets/lambo-logo.jpeg"),
    },
    {
      id: "3",
      logoUri: require("/Users/yurixss/carchase-appv2/assets/ferrari-logo.jpeg"),
    },
    {
      id: "4",
      logoUri: require("/Users/yurixss/carchase-appv2/assets/logo-pegeout.jpeg"),
    }
  ];

  async function getCars() {
    try {
      setRefreshing(true);
      const response = await api.get("cars/index");
      setCars(response.data);
    } 
    catch (error) {
      console.error(error);
    }
    finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    getCars();
  }, []);

  return (
    <>
      <Header />
      <CarBrandsList brands={brands} />
      <FlatList
        data={cars}
        renderItem={({ item }) => (
          <CarCard onPress={() => handleCardPress(item.id)} {...item} />
        )}
        keyExtractor={(car) => car.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getCars} />
        }
      />
    </>
  );
}
