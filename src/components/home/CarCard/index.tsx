import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import TextApp from '../../pattern/TextApp';
import { styles } from './styles';
import Reanimated, { SlideInLeft, SlideInUp } from 'react-native-reanimated';

export type CarCardProps = {
  id: number;
  name: string;
  color: string;
  price: string;
  km: number;
  image: string;
  onPress: () => void;
};

const CarCard: React.FC<CarCardProps> = ({ image, name, price, onPress }) => {
  const defaultImage = require('/Users/yurixss/carchase-appv2/assets/aventador.jpeg');

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Reanimated.Image
          key={image}
          entering={SlideInLeft.duration(500)}
          source={image ? { uri: image } : defaultImage}
          style={styles.image}
          onError={(e) => console.log(e.nativeEvent.error)}
        />
        <View style={styles.detailsContainer}>
          <View style={styles.nameContainer}>
            <TextApp style={styles.name}>{name}</TextApp>
          </View>

          <View style={styles.priceContainer}>
            <TextApp style={styles.price}>{price}</TextApp>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CarCard;
