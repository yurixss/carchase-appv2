import { StyleSheet, FlatList } from "react-native";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import CarCard, { CarCardProps } from "../../components/CarCard";

export default function Home() {
  const [cars, setCars] = useState([]);

  async function getCars() {
    try {
      const response = await api.get("cars/index");
      setCars(response.data);
      console.log("deu bom");
    } catch (error) {
      console.error("Ocorreu um erro:", error);
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
