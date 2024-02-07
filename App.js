import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import cartLogo from "./assets/carrito.png";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  Modal,
  Pressable,
} from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const sumarCounter = () => setCounter(counter + 1);

  const cambioInput = (value) => setInputValue(value);

  const cambioModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
  };

  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime(),
    };
    setItemList([...itemList, newItem]), sumarCounter();
  };

  const removeItem = (itemId) => {
    const filteredArray = itemList.filter((item) => item.id !== itemSelected);
    setItemList(filteredArray);
    setModalVisible(false);
  };

  const RemoveModal = () => {
    return (
      <Modal animationType="slide" transparent visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text>Confirmar</Text>
          <Pressable onPress={() => removeItem(itemSelected)}>
            <Text style={styles.botonModal}>Si</Text>
          </Pressable>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={styles.botonModal}>No</Text>
          </Pressable>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RemoveModal />
      <View style={styles.navbar}>
        <Text>Carrito</Text>
        {/* Imagen local */}
        <Image style={{ width: 30, height: 30 }} source={cartLogo}></Image>
      </View>

      <View style={styles.saludo}>
        <Text>Hola, Coder!</Text>
        <Text>Segundo desafío "Lista Optimizada"</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View>
          {/* Input de texto */}
          <TextInput
            onChangeText={cambioInput}
            value={inputValue}
            style={styles.textInput}
            placeholder="Escriba su producto aquí"
          />
        </View>

        <Pressable onPress={addItem}>
          <Text style={styles.textInput}>➕</Text>
        </Pressable>
      </View>

      <Text style={styles.text}>Lista de Productos: {counter}</Text>

      <View>
        <FlatList
          data={itemList}
          renderItem={({ item }) => (
            <View style={styles.product}>
              <Text>{item.name} </Text>
              <Pressable onPress={() => cambioModal(item.id)}>
                <Text style={styles.botonProduct}>❌</Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "auto",
    paddingTop: Constants.statusBarHeight,
  },
  navbar: {
    backgroundColor: "#ffe600",
    flexDirection: "row",
    gap: 9,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginHorizontal: 1,
    marginVertical: 15,
    borderRadius: 6,
  },
  text: {
    textAlign: "center",
    marginVertical: 9,
  },
  saludo: {
    alignItems: "center",
    marginVertical: 9,
  },
  product: {
    flexDirection: "row",
    alignItems: "center",
  },
  botonProduct: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 6,
    padding: 1,
  },
  modalContainer: {
    height: 150,
    width: 300,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "gray",
    borderWidth: 1,
    margin: "auto",
  },
  botonModal: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 3,
    width: 39,
    textAlign: "center",
  },
});
