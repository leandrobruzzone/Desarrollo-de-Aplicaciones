import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Orders from "../pages/Orders";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const OrdersStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{ header: () => <Header title="Órdenes" /> }}
    >
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersStack;
