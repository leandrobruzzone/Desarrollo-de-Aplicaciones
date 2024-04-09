import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";
import MyProfile from "../pages/MyProfile";
import ImageSelector from "../pages/ImageSelector";
import LocationSelector from "../pages/LocationSelector";

const Stack = createNativeStackNavigator();

const MyProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="My Profile"
      screenOptions={{ header: () => <Header title="Perfil" /> }}
    >
      <Stack.Screen name="My Profile" component={MyProfile} />
      <Stack.Screen name="Image Selector" component={ImageSelector} />
      <Stack.Screen name="Location Selector" component={LocationSelector} />
    </Stack.Navigator>
  );
};

export default MyProfileStack;
