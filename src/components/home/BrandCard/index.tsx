import React from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

type CarBrand = {
  id: string;
  logoUri: string;
};

type CarBrandsListProps = {
  brands: CarBrand[];
};

const CarBrandsList: React.FC<CarBrandsListProps> = ({ brands }) => {
  return (
    <FlatList
      data={brands}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.logoUri} style={styles.logo} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width / 5.0,
    height: Dimensions.get('window').width / 5.0,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    marginBottom: 50,
  },
  logo: {
    width: 55,
    height: 55,
  },
});

export default CarBrandsList;
