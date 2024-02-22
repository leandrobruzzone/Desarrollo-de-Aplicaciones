import { StyleSheet, View } from "react-native";
import React from "react";
import Categories from "../components/Categories";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Categories navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
