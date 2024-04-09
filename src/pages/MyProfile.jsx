import { Image, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import NavigationBtn from "../components/NavigationBtn";

const MyProfile = ({ navigation }) => {
  const { profileImage, imageCamera } = useSelector(
    (state) => state.authReducer.value
  );

  return (
    <View style={styles.container}>
      {profileImage || imageCamera ? (
        <Image
          source={{ uri: profileImage || imageCamera }}
          resizeMode="cover"
          style={styles.image}
        />
      ) : (
        <>
          <Image
            source={require("../assets/images/defaultProfile.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </>
      )}
      <NavigationBtn
        title={"Añadir foto de perfil"}
        onPress={() => navigation.navigate("Image Selector")}
      />
      <NavigationBtn
        title={"Mis direcciones"}
        onPress={() => navigation.navigate("Location Selector")}
      />
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});
