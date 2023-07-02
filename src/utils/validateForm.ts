import * as Yup from 'yup';


export const RegisterValidate = Yup.object().shape({
    firstName: Yup.string().trim().required("El nombre es requerido"),
    lastName: Yup.string().trim().required("El apellido es requerido"),
    email: Yup.string().trim().required("El email es requerido"),
    cellphone: Yup.number().required("El numero de telefono es requerido").min(10000000, "El minimo debe ser 8 caracteres")/* .max(15, "El maximo debe ser 15 caracteres") */,
    password: Yup.string().trim().required("La contraseña es requerida"),
    dni: Yup.number().integer().required("El dni es requerido").min(100000, "El minimo debe ser 6 caracteres")/* .max(10, "El maximo debe ser 10 caracteres") */,
})

export const LoginValidate = Yup.object().shape({
    email: Yup.string().trim().required("El email es requerido"),
    password: Yup.string().trim().required("La contraseña es requerida"),
})