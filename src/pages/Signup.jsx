import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import { useSignUpMutation } from "../services/authService";
import SubmitButton from "../components/SubmitButton";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";

const Signup = () => {
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
      signupSchema.validateSync({ password, confirmPassword, email });
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
    if (result.data) {
      dispatch(setUser(result));
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
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
      <SubmitButton title={"Registrar"} onPress={onSubmit} />
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
