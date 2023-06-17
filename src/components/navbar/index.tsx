'use client';
import Menu from '../hamburguerMenu';
import InputSearch from '../inputSearch';
import Image from 'next/image';
import userIcon from '../../assets/images/User_Icon.png';
import cartIcon from '../../assets/images/Cart_Icon.png';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import SideBar from '../sideBar/sideBar';
import { useRef, useEffect } from 'react';
import { toggleSideBar } from '@/redux/features/sideBarSwitch';
import Link from 'next/link';

const Navbar = () => {
	const dispatch = useAppDispatch();
	const hidden = useAppSelector((state) => state.toggleSideBarReducer.hidden);

	const sideBarElement = useRef<HTMLDivElement>(null);

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
				<Link href={'/profile'}>
					<Image
						className='ml-3 w-6 h-6 text-oasisGradient-black'
						src={userIcon}
						alt='logo'
					/>
				</Link>
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
