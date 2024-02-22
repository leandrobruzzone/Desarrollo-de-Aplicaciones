import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input) {
      onSearch(input);
    }
  };

  const removeInput = () => {
    setInput("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setInput}
          value={input}
          style={styles.input}
          placeholder="Buscar producto..."
        />
        <Pressable onPress={handleSearch}>
          <AntDesign name="search1" size={25} color={"#bbb"} />
        </Pressable>
        <Pressable onPress={removeInput}>
          <Entypo name="circle-with-cross" size={25} color="#bbb" />
        </Pressable>
      </View>
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "90%",
    paddingVertical: 10,
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
