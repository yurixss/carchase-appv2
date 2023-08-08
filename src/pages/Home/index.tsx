import { FlatList, RefreshControl } from "react-native";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import CarCard, { CarCardProps } from "../../components/CarCard";
import React from "react";
import CarBrandsList from "../../components/BrandCard";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

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
      setCars(response.data.data);
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

  const renderItem = ({ item }: { item: CarCardProps }) => (
    <CarCard
      id={item.id}
      key={item.id}
      name={item.name}
      color={item.color}
      price={item.price}
      km={item.km}
      image={item.image}
    />
  );

  return (
    <>
      <Header />
      <CarBrandsList brands={brands} />
      <FlatList
        data={cars}
        renderItem={renderItem}
        keyExtractor={(car) => car.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getCars} />
        }
      />
    </>
  );
}
