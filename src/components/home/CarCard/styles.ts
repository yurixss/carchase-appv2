import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '97%',
    height: 200,
    maxHeight: 350,
    marginTop: 20,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    borderRadius: 50,
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
  name: {
    color: '#657a38',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 15,
    padding: 10,
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
  km: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  icon: {
    marginLeft: 'auto',
  },
});
