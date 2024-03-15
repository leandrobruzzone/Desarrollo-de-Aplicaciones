import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import ItemListCategories from "../pages/ItemListCategories";
import ItemDetail from "../pages/ItemDetail";
import Header from "../components/Header";

const ShopStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        header: () => {
          return (
            <Header
              title={
                route.name === "Home"
                  ? "Categorías"
                  : route.name === "ItemListCategories"
                  ? route.params.category
                  : "Detalle de producto"
              }
            />
          );
        },
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
      <Stack.Screen name="ItemListCategories" component={ItemListCategories} />
    </Stack.Navigator>
  );
};

export default ShopStack;
