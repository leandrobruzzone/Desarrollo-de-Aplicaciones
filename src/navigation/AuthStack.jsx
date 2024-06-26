import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ header: () => <Header title="Bienvenido" /> }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
