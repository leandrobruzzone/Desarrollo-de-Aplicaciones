import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import {} from "react-native-web";
import { AntDesign } from "@expo/vector-icons";

const Search = ({ keyword, onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onSearch}
        value={keyword}
        style={styles.input}
        placeholder="Buscar producto..."
      />
      <Pressable>
        <AntDesign name="search1" size={25} color={"#444"} />
      </Pressable>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  input: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 15,
    fontSize: 15,
    color: "#444",
    height: 44,
    width: "80%",
  },
});
