import * as yup from "yup";

const isRequiredMessage = "Este campo es requerido"


export default yup.object().shape({
    name: yup.string().required(isRequiredMessage).max(20),
    email: yup.string().required(isRequiredMessage).email(),
    subject: yup.string().required(isRequiredMessage).max(50),
    message: yup.string().required(isRequiredMessage),
  });