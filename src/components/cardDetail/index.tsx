import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import defaultIcon from '../../assets/images/Default_Food_Icon.png';
import Link from 'next/link';
import { useGetProductsByIdQuery } from '@/redux/services/product/productsApi';
import Navbar from '../navbar';
import FooterComponent from '../footer';
import MinusIcon from '../../assets/svg/Minus Icon.svg';
import PlusIcon from '../../assets/svg/Plus Icon.svg';
import ArrowBackButton from '../../assets/svg/Arrow Back Button.svg';

interface ICardDetail {
	id: string;
}

const CardDetailComponent: React.FC<ICardDetail> = ({ id }) => {
	const [count, setCount] = useState(0);

	const { data, isError, isLoading } = useGetProductsByIdQuery(id);

	const incrementCount = () => {
		setCount(count + 1);
	};
	const decrementCount = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	if (isLoading)
		return (
			<div className='relative h-screen'>
				<Navbar />
				<div className='bg-gray-200 w-full min-h-screen flex justify-center items-center'>
					<div className='flex min-h-screen w-full items-center justify-center bg-gray-200'>
						<div className='flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-oasisGradient-antiFlashWhite to-oasisGradient-seaGreen2 animate-spin'>
							<div className='h-9 w-9 rounded-full bg-gray-200'></div>
						</div>
					</div>
				</div>
			</div>
		);
	if (isError) return <p>Error</p>;

	return (
		<>
			<div className='w-full flex justify-center flex-col bg-oasisGradient-antiFlashWhite h-screen'>
				<div className='w-full bg-oasisGradient-white'>
					<Link href={'/'} className='flex w-14'>
						<Image
							src={ArrowBackButton}
							alt='ArrowBackButton'></Image>
					</Link>
				</div>
				<div className='w-full flex items-center p-8 flex-col bg-oasisGradient-white'>
					<Image
						src={defaultIcon}
						alt='default_Food_Icon'
						className='w-52 h-52'
					/>
				</div>
				<div className='w-full h-full bg-oasisGradient-antiFlashWhite p-8 space-y-6'>
					<h1 className='text-3xl font-bold'>
						{data?.payload?.name}
					</h1>
					<h2 className='text-2xl font-bold'>
						${data?.payload?.price}
					</h2>
					<p className='text-xl'>{data?.payload?.description}</p>
				</div>
				<div
					id='modal-container'
					className='relative bottom-10 mx-5 h-48 md:h-64 align-bottom bg-oasisGradient-cambridgeBlue text-left overflow-hidden shadow-xl sm:my-8 sm:align-middle sm:max-w-lg w-screen/90'>
					<div
						id='modal-wrapper'
						className='bg-oasisGradient-cambridgeBlue p-4 sm:p-6 sm:pb-4'>
						<div
							id='modal-content'
							className='flex flex-col text-center align-middle sm:mt-0 sm:ml-4 sm:text-left'>
							<div
								id='modal-text'
								className='mt-2 flex flex-row w-full justify-evenly'>
								<button onClick={decrementCount}>
									<Image
									className='w-10'
										src={MinusIcon}
										alt='MinusIcon'></Image>
								</button>
								<div>
									<input
										placeholder={`${count || 0}`}
										className='text-lg text-gray-900 w-24 text-center rounded-md'
									/>
									<p className='pt-2 text-center'>
										$
										{data?.payload?.price
											? data.payload.price * count
											: 0}
									</p>
								</div>
								<button onClick={incrementCount}>
									<Image
									className='w-10 h-10'
										src={PlusIcon}
										alt='PlusIcon'></Image>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<FooterComponent />
		</>
	);
};

export default CardDetailComponent;
