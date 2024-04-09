import { Image, Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/auth/authSlice";
import { usePostProfileImageMutation } from "../services/shopService";
import CancelButton from "../components/CancelButton";
import ConfirmButton from "../components/ConfirmButton";
import TextDescriptionCard from "../components/TextDescriptionCard";

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const { localId } = useSelector((state) => state.authReducer.value);
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };

  const confirmImage = () => {
    dispatch(setCameraImage(image));
    triggerSaveProfileImage({ localId, image });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {image ? (
        <View>
          <Image source={{ uri: image }} style={styles.image} />
          <CancelButton title={"Repetir toma"} onPress={pickImage} />
          <ConfirmButton title={"Confirmar foto"} onPress={confirmImage} />
        </View>
      ) : (
        <View>
          <Pressable style={styles.noPhotoContainer} onPress={pickImage}>
            <TextDescriptionCard description={"No hay foto para mostrar..."} />
            <TextDescriptionCard description={"Toma una foto"} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  noPhotoContainer: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
