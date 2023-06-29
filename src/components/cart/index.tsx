import Image from 'next/image';
import default_food_icon from '../../assets/images/Default_Food_Icon.png';
import Navbar from '../navbar';
import FooterComponent from '../footer';

const CartComponent = () => {
	const productname = 'Producto';

	return (
		<>
			<Navbar />
			<div className='flex flex-col bg-oasisGradient-antiFlashWhite h-screen overflow-hidden px-4'>
				<h1
					className='p-4 flex justify-center font-bold text-4xl'
					style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}>
					Carrito
				</h1>
				<ul className='flex flex-col space-y-3'>
					<li className='flex justify-between px-1'>
						<p className='w-1/3'>Item</p>
						<p>Cantidad</p>
						<p className='w-1/5 sm:w-1/3'></p>
					</li>
					<li className='min-w-full py-4 items-center border-y-2 bg-oasisGradient-antiFlashWhite border-black flex justify-between'>
						<div className='flex items-center w-1/3'>
							<Image
								className='w-14 h-14'
								src={default_food_icon}
								alt='foodIcon'
							/>
							{productname.length < 18 ? (
								<p className='pl-2'>{productname}</p>
							) : (
								<p className='pl-2'>
									{productname.slice(0, 12).concat('...')}
								</p>
							)}
						</div>
						<div>
							<div className='flex'>
								<button className='bg-oasisGradient-seaGreen rounded-l-lg w-8 h-8 flex justify-center items-center'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										height='28'
										viewBox='0 -960 960 960'
										width='28'>
										<path d='M200-450v-60h560v60H200Z' />
									</svg>
								</button>
								<input
									className='w-8 flex text-center bg-oasisGradient-cambridgeBlue md:w-16 md:h-8'
									type='text'
									value={0}
								/>
								<button className='bg-oasisGradient-seaGreen rounded-r-lg w-8 h-8 flex justify-center items-center'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										height='28'
										viewBox='0 -960 960 960'
										width='28'>
										<path d='M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z' />
									</svg>
								</button>
							</div>
							<p className='pt-1 flex justify-center'>$10000</p>
						</div>
						<div className='flex flex-row w-1/5 sm:w-1/3 justify-end pr-4'>
							<button className=''>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									height='28'
									viewBox='0 -960 960 960'
									width='28'>
									<path d='m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z' />
								</svg>
							</button>
						</div>
					</li>
				</ul>
				<div className='w-full relative flex -bottom-59% justify-around right-0 md:justify-end md:space-x-6 md:mr-6'>
					<button className='bg-red-600 w-2/5 max-w-52.5 h-16 rounded-md p-2'>
						Eliminar carrito
					</button>
					<button className='bg-oasisGradient-seaGreen w-2/5 max-w-52.5 rounded-md p-2'>
						Confirmar
					</button>
				</div>
			</div>
			<FooterComponent />
		</>
	);
};

export default CartComponent;
