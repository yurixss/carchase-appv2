import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';

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
    <View style={styles.container}>
      <Feather name="search" size={24} color="#657a38" />

      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        onChangeText={handleSearchTextChange}
        value={searchText}
      />

      {searchText.length > 0 && (
        <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
          <MaterialIcons name="clear" size={16} color="#657a38" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#bdcdd0',
    borderRadius: 20,
    paddingHorizontal: 8,
    margin: 10,
    minHeight: 40,
    minWidth: 200,
    alignItems: 'center',
  },
  searchInput: {
    padding: 10,
  },
  clearButton: {
    padding: 10,
    position: 'absolute',
    marginLeft: 160,
  },
});

export default SimpleSearch;
