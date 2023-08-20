import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
