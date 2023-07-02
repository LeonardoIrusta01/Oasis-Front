import React from 'react';
import { useState } from 'react';
import { IProductAddModal } from './interface';
import MinusIcon from '../../assets/svg/Minus Icon.svg';
import PlusIcon from '../../assets/svg/Plus Icon.svg';
import Image from 'next/image';

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
									<Image className='w-10 h-10' src={MinusIcon} alt='MinusIcon'></Image>
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
									<Image className='w-10 h-10' src={PlusIcon} alt='PlusIcon'></Image>
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
