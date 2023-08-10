import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";
import CarDetails from "./src/pages/CarDetails";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Routes />
      <Stack.Navigator>
        <Stack.Screen name="CarDetails" component={CarDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
