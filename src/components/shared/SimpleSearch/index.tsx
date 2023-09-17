import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import { ClearButton, Container, SearchInput } from './styles';

interface SimpleSearchProps {
  onSearch: (text: string) => void;
}

const SimpleSearch: React.FC<SimpleSearchProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
    onSearch(text);
  };

  const clearSearch = () => {
    setSearchText('');
    onSearch('');
  };

  return (
    <Container>
      <Feather name="search" size={20} color="black" />

      <SearchInput placeholder="Search" onChangeText={handleSearchTextChange} value={searchText} />

      {searchText.length > 0 && (
        <ClearButton onPress={clearSearch}>
          <MaterialIcons name="clear" size={16} color="black" />
        </ClearButton>
      )}
    </Container>
  );
};

export default SimpleSearch;
