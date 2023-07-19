import Image from 'next/image';
import defaultIcon from '../../assets/images/Default_Food_Icon.png';
import { useGetCategoriesQuery } from '@/redux/services/category/categoryApi';
import { useAppDispatch } from '@/redux/hooks';
import { filterProducts } from '@/redux/features/productsReducer';
import { ICategory } from '@/redux/services/category/inteface';
import axios from 'axios';
import { useState } from 'react';
import arrowButton from '../../assets/svg/Arrow Button.svg';

const Filter = () => {
	const { data, isError, isLoading } = useGetCategoriesQuery(null);

	const dispatch = useAppDispatch();

	const [active, setActive] = useState<string>('');

	if (isError) {
		return <p>Error</p>;
	}

	if (isLoading) {
		return <p>loading</p>;
	}

	const handleOnClick = async (
		e: React.MouseEvent<HTMLButtonElement>,
		name: string
	) => {
		e.preventDefault();
		setActive(name);
		const filtedProducts = (
			await axios(`http://localhost:3001/api/products?filter=${name}`)
		).data.payload;
		dispatch(filterProducts(filtedProducts));
	};

	const buttonRight = document.getElementById('slideRight');
	if (buttonRight) {
		buttonRight.onclick = () => {
			document.getElementById('container')!.scrollLeft += 200;
		};
	}
	const buttonLeft = document.getElementById('slideLeft');
	if (buttonLeft) {
		buttonLeft.onclick = () => {
			document.getElementById('container')!.scrollLeft -= 200;
		};
	}

	return (
		<div>
			<div className='flex flex-row items-center'>
				<button
					id='slideLeft'
					type='button'
					className='w-10 h-10 left-5 top-44 rounded-full hidden xl:flex'>
					<Image
						className='rotate-90'
						src={arrowButton}
						alt='arrow'></Image>
				</button>
				<div
					className='flex overflow-x-scroll xl:overflow-hidden py-5 scroll-smooth xl:border-b-2 border-oasisGradient-antiFlashWhite mb-4'
					id='container'>
					<div className='flex flex-nowrap'>
						{data?.payload.map((c: ICategory, i) => {
							return (
								<div
									className='inline-block px-3'
									key={`category${c.name}`}>
									<button
										onClick={(e) =>
											handleOnClick(e, c.name)
										}>
										<div
											className={`w-28 h-28 max-w-xs overflow-hidden rounded-full bg-oasisGradient-antiFlashWhite flex justify-center items-center border-4 ${
												active === c.name
													? 'border-x-oasisGradient-seaGreen'
													: ''
											}`}>
											<Image
												src={defaultIcon}
												alt='defaultIcon'
												className='w-16 h-16'
											/>
										</div>
										<p className='flex justify-center font-bold pt-2 capitalize'>
											{c.name}
										</p>
									</button>
								</div>
							);
						})}
					</div>
				</div>
				<button
					id='slideRight'
					type='button'
					className='w-10 h-10 right-5 top-44 rounded-full hidden xl:flex'>
					<Image
						className='-rotate-90'
						src={arrowButton}
						alt='arrow'></Image>
				</button>
			</div>
		</div>
	);
};

export default Filter;
