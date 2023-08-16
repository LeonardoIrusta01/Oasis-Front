'use client';
import Menu from '../hamburguerMenu';
import InputSearch from '../inputSearch';
import Image from 'next/image';
import userIcon from '../../assets/images/User_Icon.png';
import cartIcon from '../../assets/images/Cart_Icon.png';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import SideBar from '../sideBar/sideBar';
import { useRef, useEffect, useState } from 'react';
import { toggleSideBar } from '@/redux/features/sideBarSwitch';
import Link from 'next/link';
import PopUpUser from '../popUpUser/popUpUser';
import { INavbar } from './interface';


const Navbar: React.FC<INavbar> = ({ input }) => {
	const dispatch = useAppDispatch();
	const hidden = useAppSelector((state) => state.toggleSideBarReducer.hidden);

	const [popUpUserShow, setpopUpUserShow] = useState(false);

	const sideBarElement = useRef<HTMLDivElement>(null);
	const menuRef = useRef<HTMLButtonElement>(null);
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
				!sideBarElement.current.contains(event.target as Node) &&
				!menuRef.current!.contains(event.target as Node)
			) {
				dispatch(toggleSideBar(true));
			}
		};
		window.addEventListener('mousedown', handleClickOutside);
		return () =>
			window.removeEventListener('mousedown', handleClickOutside);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sideBarElement]);

	return (
		<>
			<SideBar sideBarElement={sideBarElement} hidden={hidden} />
			<div className='relative w-full h-1/10  bg-oasisGradient-seaGreen flex items-center space-x-3 py-4 pr-3 pl-9'>
				<Menu menuRef={menuRef} />
				<InputSearch />
				<button onClick={handlePopUp}>
					<Image
						ref={imageRef}
						className='w-6 h-6 text-oasisGradient-black min-w-fit'
						src={userIcon}
						alt='logo'
					/>
				</button>
				{popUpUserShow && <PopUpUser popUpElement={popUpElement} />}
				<Link href={'/cart'} className='flex justify-center'>
					<Image
						className='w-6 h-6 text-oasisGradient-black min-w-fit'
						src={cartIcon}
						alt='logo'
					/>
				</Link>
			</div>
		</>
	);
};

export default Navbar;