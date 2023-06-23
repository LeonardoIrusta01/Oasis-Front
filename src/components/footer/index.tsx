import Link from 'next/link';
import React from 'react';

const FooterComponent: React.FC = () => {

    return (
        <div className='hidden md:block'>
            <footer className="bg-oasisGradient-seaGreen self-center">
                <div className="max-w-screen-xl pt-8 mx-auto lg:px-8">
                    <div className="sm:flex sm:justify-between">
                        <div className="flex flex-col columns-1 text-oasisGradient-antiFlashWhite mb-10 mt-3">
                            <h1 className='mb-2'>Desarrollado Por:</h1>
                            <div >
                                <div className='flex'>
                                    <h2 className='w-36'>Lautaro Zalazar</h2>
                                    <h2>Matías Zalazar</h2>
                                </div>
                                <div className='flex'>
                                    <h2 className='w-36'>Leonardo Irusta</h2>
                                    <h2>Tomás Maldonado</h2>
                                </div>
                                <div className='flex'>
                                    <h2 className='w-36'>Luciano Carducci</h2>
                                    <h2>Tomás Avila</h2>
                                </div>
                            </div>
                        </div>

                        <div className='text-oasisGradient-antiFlashWhite text-4xl text-center mb-32'>
                            <p className='font-sansita'>OASIS</p>
                            <hr className="w-64 h-1 mt-1 bg-oasisGradient-antiFlashWhite border-0 rounded " />
                        </div>

                        <div className='text-xl mr-4 mb-10 mt-3'>
                            <div className='text-oasisGradient-antiFlashWhite '>
                                <a href="#">FAQs</a>
                            </div>
                            <div className='text-oasisGradient-antiFlashWhite'>
                                <a href="#">Contacto</a>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FooterComponent;
