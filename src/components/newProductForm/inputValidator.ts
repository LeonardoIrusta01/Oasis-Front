import * as yup from "yup";

const isRequiredMessage = "Este campo es requerido"
const isPositiveMessage = "El valor debe ser positivo"
const isNumber = "Debe ser un número"

export default yup.object().shape({
    name: yup.string().required(isRequiredMessage).max(30),
    price: yup.number().required(isRequiredMessage).positive(isPositiveMessage),
    description: yup.string().required(isRequiredMessage),
    idCategory: yup.number().required(isRequiredMessage)
});