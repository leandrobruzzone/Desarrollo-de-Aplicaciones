import { StyleSheet, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import NavigationBtn from "../components/NavigationBtn";
import { useSignUpMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";
import TextTitle from "../components/TextTitle";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [triggerSignup, result] = useSignUpMutation();

  const dispatch = useDispatch();

  const onSubmit = () => {
    setErrorMail("Correo electrónico no válido");
    setErrorPassword("Contraseña no válida");
    setErrorConfirmPassword("Las contraseñas no coinciden");

    if (!confirmPassword) {
      return;
    }

    try {
      setErrorMail("");
      setErrorPassword("");
      setErrorConfirmPassword("");

      signupSchema.validateSync({ email, password, confirmPassword });
      triggerSignup({ email, password });
    } catch (err) {
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        case "confirmPassword":
          setErrorConfirmPassword(err.message);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    console.log(result);
    if (result.data) {
      dispatch(setUser(result.data));
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <TextTitle title={"Registro de usuario"} />
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
      <InputForm
        label={"Confirmar contraseña"}
        error={errorConfirmPassword}
        onChange={(text) => {
          setConfirmPassword(text);
          setErrorConfirmPassword("");
        }}
        isSecure={true}
      />
      {result.isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <SubmitButton title={"Registrar usuario"} onPress={onSubmit} />
      )}
      <NavigationBtn
        title={"Iniciar sesión"}
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});
