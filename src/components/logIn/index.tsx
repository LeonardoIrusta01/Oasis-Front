import Link from 'next/link';
import React from 'react';


const LoginComponent: React.FC = () => {
    return (
        <div className="min-h-screen items-center bg-oasisGradient-cambridgeBlue align-middle justify-start md:justify-center lg:justify-center flex flex-col sm:py-12 ">
            <div className="py-1">
                <div className="grid grid-cols-2 gap-1 mr-64">
                    <div className="text-left sm:text-left whitespace-nowrap">
                        <Link href='/'>
                            <button className="transition duration-200 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-oasisGradient-lightGreen focus:outline-none focus:bg-oasisGradient-cambridgeBlue focus:ring-2 focus:ring-oasisGradient-cambridgeBlue focus:ring-opacity-50 ring-inset">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="Black" className="w-9 h-9 inline-block align-text-top">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-4 xs:p-0 md:w-full w-screen md:max-w-md">
                <h1 className="font-bold text-center text-3xl mb-5 text-oasisGradient-antiFlashWhite ">Iniciar Sesión</h1>
                <div className="bg-oasisGradient-seaGreen shadow w-full rounded-md divide-y divide-gray-200">
                    <div className="px-3 py-3">
                        <label className="font-semibold text-sm text-oasisGradient-antiFlashWhite pb-1 py-2 block">Email</label>
                        <input type="text" placeholder='Tu email...' className="border rounded-lg px-3 py-2 mb-5 text-sm w-full" />
                        <label className="font-semibold text-sm text-oasisGradient-antiFlashWhite pb-1 block">Contraseña</label>
                        <input type="text" placeholder='Tu contraseña...' className="border rounded-lg px-3 py-2 mb-5 text-sm w-full" />
                    </div>
                </div>
                <button type="button" className="transition duration-200 mt-6 bg-oasisGradient-castletonGreen hover:bg-oasisGradient-lightGreen focus:bg-oasisGradient-cambridgeBlue focus:shadow-sm focus:ring-4 focus:ring-oasisGradient-seaGreen2 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                    <span className="inline-block mr-3 text-lg">Iniciar sesión</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
                <button type="button" className="transition duration-200 mt-6 bg-oasisGradient-castletonGreen hover:bg-oasisGradient-lightGreen focus:bg-oasisGradient-cambridgeBlue focus:shadow-sm focus:ring-4 focus:ring-oasisGradient-seaGreen2 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                    <span className="inline-block mr-6 align-middle text-3xl font-bold text-black ">G</span>
                    <span className="inline-block mr-3 text-lg align-middle">   Iniciar sesión con google</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default LoginComponent;
