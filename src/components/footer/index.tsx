import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Instagram_Logo_Black from '../../assets/images/Instagram_Logo_Black.png';
import Facebook_Logo from '../../assets/images/facebook_Logo.png';
import WhatsApp_Logo from '../../assets/images/WhatsApp_Logo.png';

const FooterComponent: React.FC = () => {
	return (
		<div className='hidden md:block'>
			<footer className='bg-oasisGradient-seaGreen flex justify-between h-32 w-full'>
				<div className='pt-4 flex px-8 w-full justify-between text-md'>
					<div className='flex flex-col columns-1 text-oasisGradient-antiFlashWhite mb-10 mt-3'>
						<h1 className='mb-2 text-md'>Desarrollado Por:</h1>
						<div className='flex flex-row space-x-6 text-sm'>
							<ul>
								<Link className="hover:text-blue-700" href={'https://www.linkedin.com/in/lautaroezalazar/'} target='_blank'>
									<li>Lautaro Zalazar</li>
								</Link>
								<Link className="hover:text-blue-700" href={'https://www.linkedin.com/in/matias-l-zalazar/'} target='_blank'>
									<li>Matías Zalazar</li>
								</Link>
								<Link className="hover:text-blue-700" href={'https://www.linkedin.com/in/leonardoirusta-js/'} target='_blank'>
									<li>Leonardo Irusta</li>
								</Link>
							</ul>

							<ul>
								<Link className="hover:text-blue-700" href={'https://www.linkedin.com/in/tomas-maldonado-668b251b1/'} target='_blank'>
									<li>Tomás Maldonado</li>
								</Link>
								<Link className="hover:text-blue-700" href={'https://www.linkedin.com/in/lucianofedericocarducci/'} target='_blank'>
									<li>Luciano Carducci</li>
								</Link>
								<Link className="hover:text-blue-700" href={'https://www.linkedin.com/in/tom%C3%A1s-avila-18540a188/'} target='_blank'>
									<li>Tomás Avila</li>
								</Link>
							</ul>
						</div>
					</div>

					<div className='text-oasisGradient-antiFlashWhite text-2xl text-center mb-32'>
						<p className='font-sansita'>OASIS</p>
						<hr className='w-64 h-1 mt-1 bg-oasisGradient-antiFlashWhite border-0 rounded ' />
						<div className='flex flex-row justify-center space-x-6 w-64 pt-2'>
							<Link
								className='w-12 h-12 rounded-full bg-oasisGradient-white flex justify-center items-center hover:w-14 hover:h-14'
								href={'https://www.instagram.com/oasis_almacenatural/'} target='_blank'>
								<Image
									className='w-8 h-8'
									src={Instagram_Logo_Black}
									alt='logo1'
								/>
							</Link>
							<Link
								className='w-12 h-12 rounded-full bg-oasisGradient-white flex justify-center items-center hover:w-14 hover:h-14'
								href={'#'} target='_blank'>
								<Image
									className='w-8 h-8'
									src={Facebook_Logo}
									alt='logo2'
								/>
							</Link>
							<Link
								className='w-12 h-12 rounded-full bg-oasisGradient-white flex justify-center items-center hover:w-14 hover:h-14'
								href={'#'} target='_blank'>
								<Image
									className='w-8 h-8'
									src={WhatsApp_Logo}
									alt='logo3'
								/>
							</Link>
						</div>
					</div>

					<div className='text-sm mr-4 mb-10 mt-3 pl-20'>
						<div className='text-oasisGradient-antiFlashWhite'>
							<Link className="hover:text-blue-700" href='/faq'>Preguntas frecuentes</Link>
						</div>
						<div className='text-oasisGradient-antiFlashWhite'>
							<Link className="hover:text-blue-700" href='/contactUs'>Contacto</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default FooterComponent;
