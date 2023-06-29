import Link from 'next/link';
import React from 'react';
import { useFormik } from "formik";
import { LoginValidate } from '@/utils/validateForm';
import { useLoginMutation } from '@/redux/services/usersApi';
import Cookies from 'universal-cookie';

export interface LoginForm {
    email: string;
    password: string;
}

const LoginComponent: React.FC = () => {


    const [login] = useLoginMutation()
    const googleLogin = () => { window.open("http://localhost:3001/api/auth/google", "_self") }
    const formik = useFormik<LoginForm>({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: LoginValidate,
        onSubmit: async (values: LoginForm) => {
            const res = await login(values);
            const cookies = new Cookies()
            cookies.set("sessionId", res.data.payload.sessionId)
            cookies.set("userId", res.data.payload.user.id)
            const sessionId = cookies.get("sessionId")
            if (sessionId) {window.location.replace("/")}
        },
    });
    return (
        <div className="min-h-screen items-center bg-oasisGradient-cambridgeBlue align-middle justify-start flex flex-col sm:py-12 ">
            <div className="py-1 md:hidden">
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
            <div className="p-4 xs:p-0 md:w-full w-screen md:max-w-md">
                <form onSubmit={formik.handleSubmit}>
                    <h1 className="font-bold text-center text-3xl mb-5 text-oasisGradient-antiFlashWhite ">Iniciar Sesión</h1>
                    <div className="bg-oasisGradient-seaGreen shadow w-full rounded-md divide-y divide-gray-200">
                        <div className="px-3 py-3">
                            <div>
                                <label className="font-semibold text-sm text-oasisGradient-antiFlashWhite pb-1 py-2 block">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Tu email...'
                                    className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.email && formik.errors.email}
                            </div>
                            <div>
                                <label className="font-semibold text-sm text-oasisGradient-antiFlashWhite pb-1 block">Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder='Tu contraseña...'
                                    className="border rounded-lg px-3 py-2 mb-5 text-sm w-full"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.password && formik.errors.password}
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="transition duration-200 mt-6 bg-oasisGradient-castletonGreen hover:bg-oasisGradient-lightGreen focus:bg-oasisGradient-cambridgeBlue focus:shadow-sm focus:ring-4 focus:ring-oasisGradient-seaGreen2 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                        <span className="inline-block mr-3 text-lg">Iniciar sesión</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                    <button type="button" className="transition duration-200 mt-6 bg-oasisGradient-castletonGreen hover:bg-oasisGradient-lightGreen focus:bg-oasisGradient-cambridgeBlue focus:shadow-sm focus:ring-4 focus:ring-oasisGradient-seaGreen2 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                        <span className="inline-block mr-6 align-middle text-3xl font-bold text-black ">G</span>
                        <span className="inline-block mr-3 text-lg align-middle" onClick={googleLogin}>   Iniciar sesión con google</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;
