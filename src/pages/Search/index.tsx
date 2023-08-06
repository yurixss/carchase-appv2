import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

interface Car {
  id: number;
  model: string;
}

export default function Search(): JSX.Element {
  const [page, setPage] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadApi();
  }, []);

  async function loadApi() {
    if (loading) return;

    setLoading(true);

    try {
      const response = await api.get("/cars/index");
      setPage((prevPage) => [...prevPage, ...response.data]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function renderListItem({ item }: { item: Car }) {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{item.model}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Search for a car</Text>
      <FlatList
        style={{ marginTop: 30 }}
        contentContainerStyle={{ marginHorizontal: 20 }}
        data={page}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderListItem}
        onEndReached={loadApi}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: "black",
    padding: 30,
    marginTop: 24,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});
