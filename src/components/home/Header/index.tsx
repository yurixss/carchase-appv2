import { StyleSheet, View, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import SimpleSearch from '../../shared/SimpleSearch';
import { styles } from './styles';

export default function Header({ setSearchCar }): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.buttonUser}>
          <Feather name="user" size={28} color="#657a38" />
        </TouchableOpacity>

        <SimpleSearch onSearch={(value) => setSearchCar(value)} />

        <TouchableOpacity style={styles.buttonUser}>
          <Feather name="shopping-bag" size={28} color="#657a38" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
