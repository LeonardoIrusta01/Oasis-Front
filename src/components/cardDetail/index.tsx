import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import defaultIcon from '../../assets/images/Default_Food_Icon.png';
import Link from 'next/link';
import { useGetProductsByIdQuery } from '@/redux/servicies/productsApi';
import Navbar from '../navbar';

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
		<div className='w-full flex justify-center flex-col bg-oasisGradient-antiFlashWhite h-screen'>
			<div className='w-full bg-oasisGradient-white'>
				<Link href={'/'} className='flex w-14'>
					<svg
						width='64px'
						height='64px'
						viewBox='-4.8 -4.8 33.60 33.60'
						xmlns='http://www.w3.org/2000/svg'
						fill='#000000'
						transform='matrix(1, 0, 0, 1, 0, 0)'>
						<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
						<g
							id='SVGRepo_tracerCarrier'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke='#CCCCCC'
							stroke-width='0.096'></g>
						<g id='SVGRepo_iconCarrier'>
							{' '}
							<title></title>{' '}
							<g id='Complete'>
								{' '}
								<g id='arrow-left'>
									{' '}
									<g>
										{' '}
										<polyline
											data-name='Right'
											fill='none'
											id='Right-2'
											points='7.6 7 2.5 12 7.6 17'
											stroke='#000000'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='1.2'></polyline>{' '}
										<line
											fill='none'
											stroke='#000000'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='1.2'
											x1='21.5'
											x2='4.8'
											y1='12'
											y2='12'></line>{' '}
									</g>{' '}
								</g>{' '}
							</g>{' '}
						</g>
					</svg>
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
				<h1 className='text-3xl font-bold'>{data?.payload?.name}</h1>
				<h2 className='text-2xl font-bold'>${data?.payload?.price}</h2>
				<p className='text-xl'>{data?.payload?.description}</p>
			</div>
			<div
				id='modal-container'
				className='fixed bottom-5 mx-5 align-bottom bg-oasisGradient-cambridgeBlue text-left overflow-hidden shadow-xl sm:my-8 sm:align-middle sm:max-w-lg w-screen/90'>
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
								<svg
									height='50px'
									width='50px'
									id='Capa_1'
									viewBox='0 0 44.143 44.143'
									fill='#000000'>
									<g
										id='SVGRepo_bgCarrier'
										stroke-width='0'></g>
									<g
										id='SVGRepo_tracerCarrier'
										stroke-linecap='round'
										stroke-linejoin='round'></g>
									<g id='SVGRepo_iconCarrier'>
										<g>
											<g>
												<path
													fill='#030104'
													d='M34.738,21.073H9.404c-0.553,0-1,0.447-1,1s0.447,1,1,1h25.334c0.553,0,1-0.447,1-1 C35.738,21.519,35.291,21.073,34.738,21.073z'></path>
											</g>
										</g>
									</g>
								</svg>
							</button>
							<div>
								<input
									placeholder={`${count || 0}`}
									className='text-lg text-gray-900 w-24 text-center rounded-md'
								/>
								<p>${count}</p>
							</div>
							<button onClick={incrementCount}>
								<svg
									fill='#000000'
									width='60px'
									height='60px'
									viewBox='-3.2 -3.2 38.40 38.40'
									transform='rotate(0)'>
									<g
										id='SVGRepo_bgCarrier'
										stroke-width='0'></g>
									<g
										id='SVGRepo_tracerCarrier'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke='#CCCCCC'
										stroke-width='0.8960000000000001'></g>
									<g id='SVGRepo_iconCarrier'>
										{' '}
										<path d='M9,17h6v6a1,1,0,0,0,2,0V17h6a1,1,0,0,0,0-2H17V9a1,1,0,0,0-2,0v6H9a1,1,0,0,0,0,2Z'></path>{' '}
									</g>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardDetailComponent;
