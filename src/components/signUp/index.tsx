import { useRegisterMutation } from '@/redux/servicies/usersApi';
import { RegisterValidate } from '@/utils/validateForm';
import { useFormik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react';


export interface Form {
    name: string
    lastName: string
    email: string
    cellphone: number
    password: string
    dni: number
}

const SignUpComponent: React.FC = () => {

    const [register] = useRegisterMutation()
    const formik = useFormik<Form>({
        initialValues: {
            name: "",
            lastName: "",
            email: "",
            cellphone: 0,
            password: "",
            dni: 0,
        },
        validationSchema: RegisterValidate,
        onSubmit: async (values: Form) => {
            await register(values)
        }
    })

    const [confirmPassword, setConfirmPassword] = useState('')


    return (
        <div className="min-h-screen items-center bg-oasisGradient-cambridgeBlue align-middle justify-start md:justify-center lg:justify-center flex flex-col sm:py-12 ">
            <div className="h-12">
                <div className="grid grid-cols-2 gap-1 mr-64">
                    <div className="text-left sm:text-left whitespace-nowrap">
                        <Link href='/'>
                            <button className="transition duration-200 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-oasisGradient-lightGreen focus:outline-none focus:bg-oasisGradient-cambridgeBlue focus:ring-2 focus:ring-oasisGradient-cambridgeBlue focus:ring-opacity-50 ring-inset">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="Black" className="w-9 h-9 inline-block align-text-top">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="p-2 xs:p-0 md:w-full w-screen md:max-w-md">

                <form onSubmit={formik.handleSubmit}>
                    <h1 className="font-bold text-center text-3xl mb-5 text-oasisGradient-antiFlashWhite ">Registrarse</h1>
                    <div className="bg-oasisGradient-seaGreen shadow w-full rounded-md divide-y divide-gray-200">
                        <div className="px-3 py-3">
                            <div>
                                <label className="font-semibold text-sm text-oasisGradient-antiFlashWhite pb-1 py-2 block">Nombre</label>
                                <input
                                    type="text"
                                    placeholder='Tu nombre...'
                                    className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                                    name='name'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.name && formik.errors.name}
                            </div>
                            <div>
                                <label className="font-semibold text-sm text-oasisGradient-antiFlashWhite pb-1 py-2 block">Apellido</label>
                                <input
                                    type="text"
                                    placeholder='Tu apellido...'
                                    className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                                    name='lastName'
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.lastName && formik.errors.lastName}
                            </div>
                            <div>
                                <label className="font-semibold text-sm text-oasisGradient-antiFlashWhite pb-1 py-2 block">Email</label>
                                <input
                                    type="email"
                                    placeholder='Tu email...'
                                    className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                                    name='email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.email && formik.errors.email}
                            </div>
                            <div>
                                <label className="font-semibold text-sm text-oasisGradient-antiFlashWhite pb-1 py-2 block">Numero de celular</label>
                                <input
                                    type="number"
                                    placeholder='Tu numero de celular...'
                                    className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                                    name='cellphone'
                                    value={formik.values.cellphone}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.cellphone && formik.errors.cellphone}
                            </div>
                            <div>
                                <label className="font-semibold text-sm text-oasisGradient-antiFlashWhite pb-1 block">Contraseña</label>
                                <input
                                    type="password"
                                    placeholder='Tu contraseña...'
                                    className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                                    name='password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.password && formik.errors.password}
                            </div>
                            <div>
                                <label className="font-semibold text-sm text-oasisGradient-antiFlashWhite pb-1 py-2 block">Confirmar contraseña</label>
                                <input
                                    type="password"
                                    placeholder='Confirmar contraseña...'
                                    className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                                />
                            </div>
                            <div>
                                <label className="font-semibold text-sm text-oasisGradient-antiFlashWhite pb-1 py-2 block">DNI</label>
                                <input
                                    type="number"
                                    placeholder='Tu DNI...'
                                    className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                                    name='dni'
                                    value={formik.values.dni}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.dni && formik.errors.dni}
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="transition duration-200 mt-6 bg-oasisGradient-castletonGreen hover:bg-oasisGradient-lightGreen focus:bg-oasisGradient-cambridgeBlue focus:shadow-sm focus:ring-4 focus:ring-oasisGradient-seaGreen2 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                        <span className="inline-block mr-3 text-lg">Enviar</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </form>
            </div>
        </div >
    );
};

export default SignUpComponent;