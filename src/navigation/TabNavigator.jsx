import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStack from "../navigation/ShopStack";
import CartStack from "../navigation/CartStack";
import OrdersStack from "../navigation/OrdersStack";
import { colors } from "../global/colors";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import MyProfileStack from "./MyProfileStack";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="ShopStack"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <MaterialCommunityIcons
                  name="shopping"
                  size={24}
                  color={focused ? "black" : "grey"}
                />
                <Text style={{ color: focused ? "black" : "grey" }}>
                  Tienda
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <MaterialIcons
                  name="shopping-cart"
                  size={24}
                  color={focused ? "black" : "grey"}
                />
                <Text style={{ color: focused ? "black" : "grey" }}>
                  Carrito
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="OrderStack"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <Feather
                  name="list"
                  size={24}
                  color={focused ? "black" : "grey"}
                />
                <Text style={{ color: focused ? "black" : "grey" }}>
                  Ordenes
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="MyProfileStack"
        component={MyProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <Ionicons
                  name="person-circle-outline"
                  size={24}
                  color={focused ? "black" : "grey"}
                />
                <Text style={{ color: focused ? "black" : "grey" }}>
                  Perfil
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.primary2,
  },
  tabContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
