import * as yup from "yup";

const isRequiredMessage = "Este campo es requerido"


export default yup.object().shape({
    name: yup.string().required(isRequiredMessage),
  });