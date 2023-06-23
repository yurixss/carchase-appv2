import { StyleSheet, ScrollView } from "react-native";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import CarCard from "../../components/CarCard";

export default function Home() {
  const [cars, setCars] = useState([CarCard]);

  async function getCars() {
    try {
      const response = await api.get("/cars/index");
      setCars(response.data);
      console.log("deu bom");
    } catch (error) {
      console.error("deu ruim");
    }
  }

  useEffect(() => {
    getCars();
  }, []);

  return (
    <ScrollView>
      <Header />
      {/* {cars.map((car, index) => (
        // <CarCard
        //   key={index}
        //   name={car.name}
        //   color={car.color}
        //   price={car.price}
        //   km={car.km}
        // />
      ))} */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34baab",
  },
});
