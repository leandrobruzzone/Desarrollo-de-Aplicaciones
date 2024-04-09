import { StyleSheet, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import NavigationBtn from "../components/NavigationBtn";
import { useLoginMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { loginSchema } from "../validations/loginSchema";
import { insertSession } from "../db";
import TextTitle from "../components/TextTitle";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [triggerSignin, result] = useLoginMutation();

  const dispatch = useDispatch();

  const onSubmit = () => {
    setErrorMail("Correo electrónico no válido");
    setErrorPassword("Contraseña no válida");

    if (!password) {
      return;
    }

    try {
      setErrorMail("");
      setErrorPassword("");

      loginSchema.validateSync({ email, password });
      triggerSignin({ email, password });
    } catch (err) {
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data));
      insertSession({
        email: result.data.email,
        localId: result.data.localId,
        token: result.data.idToken,
      })
        .then((result) => console.log(result))
        .catch((err) => console.log(err.message));
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <TextTitle title={"Inicio de sesión"} />
      <InputForm
        label={"Correo electrónico"}
        error={errorMail}
        onChange={(text) => {
          setEmail(text);
          setErrorMail("");
        }}
      />
      <InputForm
        label={"Contraseña"}
        error={errorPassword}
        onChange={(text) => {
          setPassword(text);
          setErrorPassword("");
        }}
        isSecure={true}
      />
      {result.isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <SubmitButton title={"Iniciar sesión"} onPress={onSubmit} />
      )}
      <NavigationBtn
        title={"Registrar usuario"}
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});
