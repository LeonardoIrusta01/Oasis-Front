'use client';
import Menu from '../hamburguerMenu';
import InputSearch from '../inputSearch';
import Image from 'next/image';
import userIcon from '../../assets/images/User_Icon.png';
import cartIcon from '../../assets/images/Cart_Icon.png';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useState } from 'react';
import SideBar from '../sideBar/sideBar';
import { useRef, useEffect } from 'react';
import { toggleSideBar } from '@/redux/features/sideBarSwitch';
import Link from 'next/link';
import { current } from '@reduxjs/toolkit';
import PopUpUser from '../popUpUser/popUpUser';

const Navbar = () => {
	const dispatch = useAppDispatch();
	const hidden = useAppSelector((state) => state.toggleSideBarReducer.hidden);

	const [popUpUserShow, setpopUpUserShow] = useState(false);

	const sideBarElement = useRef<HTMLDivElement>(null);
	const popUpElement = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);

	const handlePopUp = () => {
		setpopUpUserShow(!popUpUserShow);
	};

	useEffect(() => {
		const handleClickOutsidePopUp = (event: MouseEvent) => {
				if (
					popUpElement.current &&
					!popUpElement.current.contains(event.target as Node) && !imageRef.current?.contains(event.target as Node)
				) {
					setpopUpUserShow(false);
				}
		};
		window.addEventListener('mousedown', handleClickOutsidePopUp);
		return () =>
			window.removeEventListener('mousedown', handleClickOutsidePopUp);
	}, [popUpElement]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				sideBarElement.current &&
				!sideBarElement.current.contains(event.target as Node)
			) {
				dispatch(toggleSideBar());
			}
		};
		window.addEventListener('mousedown', handleClickOutside);
		return () =>
			window.removeEventListener('mousedown', handleClickOutside);
	}, [sideBarElement]);

	return (
		<>
			{!hidden && <SideBar sideBarElement={sideBarElement} />}
			<div className='w-full h-1/10 bg-oasisGradient-seaGreen flex items-center px-2'>
				<Menu />
				<InputSearch label='prueba' />

				<button onClick={handlePopUp}>
					<Image
					    ref={imageRef}
						className='ml-3 w-6 h-6 text-oasisGradient-black'
						src={userIcon}
						alt='logo'
					/>
				</button>
				{popUpUserShow && <PopUpUser popUpElement={popUpElement} />}
				<Link href={'/cart'}>
					<Image
						className='mx-3 w-6 h-6 text-oasisGradient-black'
						src={cartIcon}
						alt='logo'
					/>
				</Link>
			</div>
		</>
	);
};

export default Navbar;
