import Image from 'next/image';
import Navbar from '../navbar';
import defaultIcon from '../../assets/images/Default_Food_Icon.png';
import FooterComponent from '../footer';

const AboutUs = () => {
	return (
		<>
			<div className='h-full w-full md:h-screen md:w-screen bg-oasisGradient-antiFlashWhite overflow-hidden'>
				<Navbar />
				<p
					className='w-full p-3 text-oasisGradient-black text-8 flex justify-center font-semibold'
					style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}>
					Sobre Nostros
				</p>
				<div>
					<div className='flex flex-wrap p-4 justify-center items-center'>
						<p className=' w-7/10 '>
							Bienvenidos a Oasis almacén natural, nos dedicamos a
							la venta de productos dietéticos y nutricionales
							destinados a mejorar la salud y garantizar una
							adecuada alimentación mediante productos compuestos
							de una determinada manera para conseguir un objetivo
							nutritivo o complementar la dieta normal de una
							persona. En nuestro almacén natural vas a poder
							encontrar gran diversidad de productos: veganos,
							aptos para celiacos, frutos secos, harinas,
							semillas, cereales, condimentos, jugos, fideos
							integrales, dulces, mermeladas, legumbres y muchos
							productos mas.
						</p>
						<Image
							src={defaultIcon}
							alt='default_Food_Icon'
							className='w-52 h-52'
						/>
					</div>

					<div className='flex flex-wrap p-4 justify-center items-center'>
						<Image
							src={defaultIcon}
							alt='default_Food_Icon'
							className='w-52 h-52'
						/>
						<p className='w-7/10'>
							Con el fin de brindarles otro servicio, creamos esta
							página web en donde buscamos que puedan hacer sus
							compras de manera ágil, optima, eficaz donde podrán
							implementar diversos métodos de pago para terminar
							de realizar la compra, la cual una vez terminada
							podrán retirar sus productos elegidos en el local.
							Además podrán encontrar acá los medios para ponerse
							en contacto en todo momento con nosotros y consultar
							sus dudas o enviar sus sugerencias. Nos encontramos
							ubicados en Av. Fernando Casado al 1894 en el Barrio
							Santa Isabel 1ra sección, donde podrán acercarse a
							la tienda de Lunes a Viernes de 10.00hs hasta las
							13.00hs y de 18.30hs hasta 20.30hs, y los días
							Sábado 10.00hs hasta las 13.00hs. Esperamos que
							tengan una excelente experiencia visual y una cómoda
							compra por este medio y que puedan seguir
							acompañándonos como vienen haciéndolo hace un largo
							tiempo.
						</p>
					</div>
				</div>
			</div>
			<FooterComponent />
		</>
	);
};

export default AboutUs;
