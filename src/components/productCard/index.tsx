import React, { Fragment } from 'react';
import { useState } from 'react';
import IcardProps from './Interface';
import ProductAddModal from '../productAddModal';
import Image from 'next/image';
import defaultIcon from '../../assets/images/Default_Food_Icon.png';
import { isNullishCoalesce } from 'typescript';

const ProductCard: React.FC<IcardProps> = ({
	name,
	image,
	price,
	isModalShown,
	setIsModalShown,
}) => {
	const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setIsModalShown(!isModalShown);
	};

	return (
		<>
			<div className='absolute z-1 overflow-hidden w-full text-right top-4'>
				<button
					onClick={handleOnClick}
					title='Agregar al carrito'
					className='inline-flex items-center justify-center w-10 h-10 mr-2 text-slate-950 transition-colors duration-150 bg-transparent rounded-lg focus:shadow-outline hover:bg-oasisGradient-cambridgeBlue'>
					<svg className='w-8 h-8 fill-current' viewBox='0 0 20 20'>
						<path
							d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
							clip-rule='evenodd'
							fill-rule='evenodd'></path>
					</svg>
				</button>
			</div>
			<div className='mt-4'>
				<a
					className='justify-center mx-5 mt-3 flex overflow-hidden rounded-xl'
					href='#'>
					<Image
						className='object-cover'
						src={image || defaultIcon}
						alt='productImage'
					/>
				</a>
				<div className='mt-3 px-3 pb-3'>
					<div className='mt-2 mb-3 flex items-center'>
						<p>
							<span className='text-xl font-bold text-slate-900'>
								${price || 0}
							</span>
						</p>
					</div>
					<a href='#'>
						<h5 className='text-xl tracking-tight text-slate-900'>
							{name || 'Nombre'}
						</h5>
					</a>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
