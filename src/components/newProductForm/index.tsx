import { useUserRole } from "@/hooks/useUserRole";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikValues,
  FormikHelpers,
} from "formik";
import axios from "axios";
import { INewProductForm } from "./interface";
import validationSchema from "./inputValidator";
import React, { useState } from "react";
import { useGetCategoriesQuery } from "@/redux/services/category/categoryApi";
import Image from "next/image";
import UploadImage from "../uploadImage/uploadImage";

const newProductFormComponent = () => {
  const { isAdmin, isGuess } = useUserRole();
  const { data } = useGetCategoriesQuery(null);
  const [image, setImage] = useState<string>("");
  const [buttonMessage, setButtonMessage] = useState<string>("Subir producto");

  const initialValues: INewProductForm = {
    name: "",
    price: NaN,
    description: "",
    stock: false,
    active: false,
    idCategory: 0,
  };

  async function handleSubmit(
    values: INewProductForm,
    { setSubmitting, resetForm }: FormikHelpers<INewProductForm>
  ) {
    setButtonMessage("Enviando...");
    setSubmitting(false);

    const formattedProduct = {
      name: values.name,
      price: values.price,
      description: values.description,
      stock: values.stock === "yes" ? true : false,
      active: values.active === "yes" ? true : false,
      categoryId: values.idCategory,
      image,
    };

    const res = await axios.post(
      "http://localhost:3001/api/products",
      formattedProduct
    );

    if (res.data.status === "Success") {
      setButtonMessage("Producto agregado");
    } else {
      setButtonMessage("Algo salió mal, intente más tarde");
    }
    setTimeout(() => setButtonMessage("Subir producto"), 3500);

    resetForm();
  }

  return isGuess ? (
    <div className="bg-oasisGradient-seaGreen2 w-screen h-screen flex-col flex justify-center items-center">
      <Image
        src={
          "https://res.cloudinary.com/oasistest/image/upload/v1688154737/Oasis%20Logo/bxa4h64nhyvnxtzwgjrh.png"
        }
        alt="Oasis-Logo"
        width={192}
        height={192}
      />
      <h2 className="text-white">Añadir un nuevo producto</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }: FormikValues) => {
          return (
            <Form className="flex flex-col justify-center space-y-3">
              <div>
                <Field
                  type="text"
                  placeholder="Nombre..."
                  className="rounded-md w-96 h-10 pl-2 bg-oasisGradient-antiFlashWhite"
                  name="name"
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="text-white text-xs block"
                />
              </div>
              <div>
                <Field
                  type="number"
                  placeholder="Precio"
                  className="rounded-md w-96 h-10 pl-2 bg-oasisGradient-antiFlashWhite"
                  name="price"
                  defaultValue="Precio"
                />
                <ErrorMessage
                  name="price"
                  component="span"
                  className="text-white text-xs block"
                />
              </div>
              <div>
                <Field
                  type="text"
                  placeholder="Descripción..."
                  className="rounded-md w-96 h-10 pl-2 bg-oasisGradient-antiFlashWhite"
                  name="description"
                />
                <ErrorMessage
                  name="description"
                  component="span"
                  className="text-white text-xs block"
                />
              </div>
              <div>
                <Field
                  as="select"
                  className="rounded-md w-96 h-10 pl-2 bg-oasisGradient-antiFlashWhite"
                  name="stock"
                >
                  <option selected hidden value={""}>
                    Stock
                  </option>
                  <option value="yes">Si</option>
                  <option value="no">No</option>
                </Field>
              </div>
              <div>
                <Field
                  as="select"
                  className="rounded-md w-96 h-10 pl-2 bg-oasisGradient-antiFlashWhite"
                  name="active"
                >
                  <option selected hidden value={""}>
                    Producto activo
                  </option>
                  <option className="w-10" value={"yes"}>
                    Si
                  </option>
                  <option className="w-10" value={"no"}>
                    No
                  </option>
                </Field>
              </div>
              <div>
                <Field
                  as="select"
                  className="rounded-md w-96 h-10 pl-2 bg-oasisGradient-antiFlashWhite"
                  name="idCategory"
                >
                  <option hidden>Categorías</option>
                  {data &&
                    data.payload.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                </Field>
                <ErrorMessage
                  name="idCategory"
                  component="span"
                  className="text-white text-xs block"
                />
              </div>
              <div className="flex justify-center items-center">
                <UploadImage preset={"ml_productImage"} setUrl={setImage}>
                  <button
                    type="button"
                    className=" bg-oasisGradient-antiFlashWhite p-2 rounded-md mt-2"
                  >
                    Subir imagen de producto
                  </button>
                </UploadImage>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-oasisGradient-antiFlashWhite h-16 w-60 rounded-md"
                >
                  {buttonMessage}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  ) : (
    <p>No eres administrador...</p>
  );
};

export default newProductFormComponent;
