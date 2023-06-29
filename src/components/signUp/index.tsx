import { useRegisterMutation } from "@/redux/services/usersApi";
import { RegisterValidate } from "@/utils/validateForm";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useState } from "react";

export interface Form {
  firstName: string;
  lastName: string;
  email: string;
  cellphone: number;
  password: string;
  dni: number;
}

const SignUpComponent: React.FC = () => {
  const [register] = useRegisterMutation();
  const formik = useFormik<Form>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      cellphone: 0,
      password: "",
      dni: 0,
    },
    validationSchema: RegisterValidate,
    onSubmit: async (values: Form) => {
      await register(values);
      window.location.replace("/login")
    },
  });

  const [showPass, setShowPass] = useState(false)

  return (
    <div className="min-h-screen items-center bg-oasisGradient-cambridgeBlue align-middle justify-start flex flex-col sm:py-12 ">
      <div className="h-12">
        <div className="grid grid-cols-2 gap-1 mr-64">
          <div className="text-left md:hidden sm:text-left whitespace-nowrap">
            <Link href="/">
              <button className="transition duration-200 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-oasisGradient-lightGreen focus:outline-none focus:bg-oasisGradient-cambridgeBlue focus:ring-2 focus:ring-oasisGradient-cambridgeBlue focus:ring-opacity-50 ring-inset">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="Black"
                  className="w-9 h-9 inline-block align-text-top"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-2 xs:p-0 md:w-min w-screen md:justify-between ">
        <form className="md:w-max" onSubmit={formik.handleSubmit}>
          <h1 className="font-bold text-center text-3xl mb-5 text-oasisGradient-antiFlashWhite ">
            Registrarse
          </h1>
          <div className="bg-oasisGradient-seaGreen shadow w-full rounded-md divide-y md:w-min divide-gray-200">
            <div>

              <div className="px-3 md:gap-2 md:columns-2 md:flex-col py-3">
                <div>
                  <label className="font-semibold md:ml-4 text-sm text-oasisGradient-antiFlashWhite pb-1 py-2 block">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre..."
                    className="border rounded-lg md:w-96 md:block md:ml-4 px-3 py-2 mb-5 text-sm w-full"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.firstName && formik.errors.firstName}
                </div>
                <div>
                  <label className="font-semibold text-sm text-oasisGradient-antiFlashWhite pb-1 py-2 block md:ml-4">
                    Apellido
                  </label>
                  <input
                    type="text"
                    placeholder="Tu apellido..."
                    className="border md:w-96 md:ml-4 rounded-lg px-3 py-2 text-sm w-full"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.lastName && formik.errors.lastName}
                </div>
              </div>
              <div className="px-3 md:gap-2 md:columns-2 md:flex-col py-3">
                <div>
                  <label className="font-semibold md:ml-4 text-sm text-oasisGradient-antiFlashWhite pb-1 py-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Tu email..."
                    className="border rounded-lg px-3 py-2 mb-5 md:w-96 md:ml-4 text-sm w-full"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.email && formik.errors.email}
                </div>
                <div>
                  <label className="font-semibold md:ml-4 text-sm text-oasisGradient-antiFlashWhite pb-1 py-2 block">
                    Numero de celular
                  </label>
                  <input
                    type="number"
                    placeholder="Tu numero de celular..."
                    className="border rounded-lg px-3 py-2 md:w-96 md:ml-4 text-sm w-full"
                    name="cellphone"
                    value={formik.values.cellphone}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.cellphone && formik.errors.cellphone}
                </div>
              </div>
              <div className="px-3 md:gap-2 md:columns-2 md:flex-col py-3">
                <div>
                  <label className="font-semibold md:ml-4 text-sm text-oasisGradient-antiFlashWhite pb-1 block">
                    Contraseña
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Tu contraseña..."
                    className="border rounded-lg px-3 md:w-96 md:ml-4 py-2 mb-5 text-sm w-full"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.password && formik.errors.password}
                </div>

                <div>
                  <label className="font-semibold md:ml-4 text-sm text-oasisGradient-antiFlashWhite pb-1 block">
                    Confirmar contraseña
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Confirmar contraseña..."
                    className="border rounded-lg px-3 py-2 md:w-96 md:ml-4 text-sm w-full"
                  />
                </div>
                <div className="pointer hover:cursor-pointer w-8 text-left" onClick={() => setShowPass(!showPass)}>
                  {showPass ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                  </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
                    <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                  </svg>}
                </div>
              </div>
              <div className="px-3 md:gap-40 md:columns-1 md:flex-col">
                <div >
                  <label className="font-semibold text-sm md:ml-4 text-oasisGradient-antiFlashWhite block">
                    DNI
                  </label>
                  <input
                    type="number"
                    placeholder="Tu DNI..."
                    className="border rounded-lg md:w-96 md:ml-4 px-3 py-2 mb-5 text-sm w-full"
                    name="dni"
                    value={formik.values.dni}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.dni && formik.errors.dni}
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="md:ml-72 md:mt-12 transition duration-200 md:w-80 mt-6 bg-oasisGradient-castletonGreen hover:bg-oasisGradient-lightGreen focus:bg-oasisGradient-cambridgeBlue focus:shadow-sm focus:ring-4 focus:ring-oasisGradient-seaGreen2 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
          >
            <span className="inline-block mr-3 text-lg">Enviar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpComponent;
