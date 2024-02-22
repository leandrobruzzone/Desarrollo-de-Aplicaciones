import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/Home";
import ItemListCategories from "../pages/ItemListCategories";
import ItemDetail from "../pages/ItemDetail";
import Header from "../components/Header";

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={({ route }) => ({
          header: () => {
            return (
              <Header
                title={
                  route.name === "Inicio"
                    ? "Categorias"
                    : route.name === "Lista de Categorías"
                    ? route.params.category
                    : "Detalle de Producto"
                }
              />
            );
          },
        })}
      >
        <Stack.Screen name="Inicio" component={Home} />
        <Stack.Screen name="Detalle de Producto" component={ItemDetail} />
        <Stack.Screen
          name="Lista de Categorías"
          component={ItemListCategories}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
