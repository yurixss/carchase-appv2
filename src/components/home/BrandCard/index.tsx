import React from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';
import Reanimated, { SlideInUp } from 'react-native-reanimated';

type CarBrand = {
  id: string;
  logo: any;
};

type CarBrandsListProps = {
  brands: CarBrand[];
};

const CarBrandsList = ({ brands }: CarBrandsListProps) => {
  return (
    <FlatList
      data={brands}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Container>
          <Reanimated.Image
            entering={SlideInUp.duration(600)}
            source={item.logo}
            style={{
              width: 45,
              height: 45,
            }}
          />
        </Container>
      )}
    />
  );
};

export default CarBrandsList;
