import { object, string, ref } from "yup";

export const signupSchema = object().shape({
  email: string().required("El email es requerido").email("Email no válido"),
  password: string()
    .required("La contraseña es requerida")
    .min(6, "La contraseña debe contener al menos 6 caracteres"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Las contraseñas no coinciden")
    .required(),
});
