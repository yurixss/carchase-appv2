import React from 'react';
import { View, Image, FlatList } from 'react-native';
import { styles } from './styles';
import Reanimated, { SlideInLeft, SlideInUp } from 'react-native-reanimated';

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
          <Reanimated.Image
            entering={SlideInUp.duration(1000)}
            source={item.logoUri}
            style={styles.logo}
          />
        </View>
      )}
    />
  );
};

export default CarBrandsList;
