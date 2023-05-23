import React from 'react';
import cardProps from '@/types/cardInterface';
import Image from 'next/image';
import defaultIcon from '../../media/Default_Food_Icon.png';

const ProductCard:React.FC<cardProps> = ({name, image, price}) => {
	return (
		<div className='relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border-gray-100 border bg-oasisGradient-antiFlashWhite shadow-md'>
			<div className='absolute z-10 overflow-hidden w-full text-right top-4'>
				<button title="Agregar al carrito" className='inline-flex items-center justify-center w-10 h-10 mr-2 text-slate-950 transition-colors duration-150 bg-transparent rounded-lg focus:shadow-outline hover:bg-oasisGradient-cambridgeBlue'>
					<svg className='w-8 h-8 fill-current' viewBox='0 0 20 20'>
						<path
							d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
							clip-rule='evenodd'
							fill-rule='evenodd'></path>
					</svg>
				</button>
			</div>
			<div className='mt-5'>
				<a
					className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'
					href='#'>
					<Image
						className='object-contain'
						src={image || defaultIcon}
						alt='productImage'
					/>
				</a>
				<div className='mt-4 px-5 pb-5'>
					<div className='mt-2 mb-5 flex items-center justify-between'>
						<p>
							<span className='text-3xl font-bold text-slate-900'>
								{price || 0}
							</span>
						</p>
					</div>
					<a href='#'>
						<h5 className='text-xl tracking-tight text-slate-900'>
							{name || ""}
						</h5>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
