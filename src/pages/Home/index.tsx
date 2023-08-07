import { StyleSheet, FlatList, RefreshControl } from "react-native";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import CarCard, { CarCardProps } from "../../components/CarCard";
import React from "react";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

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
    />
  );

  return (
    <>
      <Header />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34baab",
  },
});
