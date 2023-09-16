import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: 200,
    maxHeight: 350,
    alignSelf: 'center',
    padding: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  detailsContainer: {
    position: 'absolute',
    marginTop: 20,
    marginLeft: 20,
  },
  nameContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
  },
  priceContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 10,
    padding: 5,
  },
  price: {
    color: '#657a38',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
