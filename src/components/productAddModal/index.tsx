import React from 'react';
import { useState } from 'react';
import { IProductAddModal } from './interface';

const ProductAddModal: React.FC<IProductAddModal> = ({
	setIsModalShown,
	price,
}) => {
	const [count, setCount] = useState(0);

	const incrementCount = (e: any) => {
		e.preventDefault();
		setCount(count + 1);
	};

	const decrementCount = (e: any) => {
		e.preventDefault();
		if (count > 0) {
			setCount(count - 1);
		}
	};

	const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setIsModalShown(false);
	};

	function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
		setCount(Number(event.target.value));
	}

	return (
		<div className='inset-0 justify-center aling-center'>
			<div
				id='modal-flex-container'
				className='items-left sm:block sm:p-0'>
				<button
					id='modal-bg-container'
					onClick={handleOnClick}
					className='fixed inset-0 bg-gray-500/20 bg-opacity-10'
				/>
				<div
					id='modal-container'
					className='z-10 animate-slide-top fixed -bottom-10 right-0 inline-block align-bottom bg-oasisGradient-cambridgeBlue rounded-lg text-left overflow-hidden shadow-xl sm:my-8 sm:align-middle sm:max-w-lg w-full'>
					<div
						id='modal-wrapper'
						className='bg-oasisGradient-cambridgeBlue px-4 pb-4 sm:p-6 sm:pb-4'>
						<div
							id='modal-content'
							className='flex flex-col text-center mt-1 sm:mt-0 sm:ml-4 sm:text-left'>
							<div
								id='modal-text'
								className='mt-2 flex flex-row w-full justify-evenly'>
								<button onClick={decrementCount}>
									<svg
										height='24px'
										width='24px'
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
										value={count || ''}
										onChange={handleChange}
										type='number'
										className='text-lg text-gray-900 w-24 text-center rounded-md'
									/>
									<p className='pt-2'>${count * price}</p>
								</div>
								<button onClick={incrementCount}>
									<svg
										fill='#000000'
										width='40px'
										height='40px'
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
		</div>
	);
};

export default ProductAddModal;
