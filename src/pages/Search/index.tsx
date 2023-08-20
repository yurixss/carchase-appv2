import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import TextApp from '../../components/pattern/TextApp';
import { styles } from './styles';

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
      const response = await api.get('/cars/index');
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
        <TextApp style={styles.text}>{item.model}</TextApp>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextApp>Search for a car</TextApp>
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
