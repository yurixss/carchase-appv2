import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      width: "97%",
      height: 200,
      maxHeight: 350,
      marginTop: 20,
      alignSelf: "center",
    },
    image: {
      width: "100%",
      height: "100%",
      borderRadius: 50,
      alignSelf: "center",
    },
    detailsContainer: {
      position: "absolute",
      marginTop: 20,
      marginLeft: 20,
    },
    nameContainer: {
      backgroundColor: "white",
      borderRadius: 20,
    },
    name: {
      color: "#657a38",
      fontSize: 15,
      alignSelf: "center",
      padding: 10,
      fontWeight: "bold",
    },
    priceContainer: {
      backgroundColor: "white",
      borderRadius: 20,
      width: 90,
      marginTop: 10,
    },
    price: {
      color: "#657a38",
      fontSize: 15,
      fontWeight: "bold",
      alignSelf: "center",
    },
    km: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 10,
    }
  });