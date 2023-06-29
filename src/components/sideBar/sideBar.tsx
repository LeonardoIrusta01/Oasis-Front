import Link from 'next/link';
import { toggleSideBar } from '@/redux/features/sideBarSwitch';
import { useAppDispatch } from '@/redux/hooks';
import Image from 'next/image';
import Log_Out_Icon from '../../assets/images/Log_Out_Icon.png';
import React, { LegacyRef } from 'react';
import axios from 'axios';

const SideBar: React.FC<{ sideBarElement: LegacyRef<HTMLElement> }> = ({ sideBarElement }) => {
	const dispatch = useAppDispatch();

	const handleOnClick = () => {
		dispatch(toggleSideBar());
	};

	const handleLogOut = async () => {
		console.log("hola")
		const res = (await axios("http://localhost:3001/api/auth/logout")).data
		console.log(res)
	}

	return (
		<>
			<div className='fixed flex w-full z-10 h-full bg-gray-800 opacity-50'></div>
			<aside
				ref={sideBarElement}
				className='fixed overflow-y-auto space-y-6 z-20 bg-oasisGradient-cambridgeBlue top-0 left-0 w-80 h-screen transition-transform'>
				<div className='flex p-[21.5px] items-center w-full text-2xl font-bold bg-oasisGradient-seaGreen text-oasisGradient-black'>
					<button
						onClick={handleOnClick}
						className='w-12 h-12'>
						X
					</button>
				</div>
				<ul className='space-y-6 px-3'>
					<li>
						<Link
							onClick={handleOnClick}
							href='/'
							className='flex items-center p-4 text-base font-normal bg-oasisGradient-rust text-oasisGradient-white rounded-lg'>
							<span className='ml-3'>Inicio</span>
						</Link>
					</li>
					<li>
						<Link
							onClick={handleOnClick}
							href='/aboutUs'
							className='flex items-center p-4 text-base font-normal bg-oasisGradient-rust text-oasisGradient-white rounded-lg'>
							<span className='ml-3'>Sobre Nosotros</span>
						</Link>
					</li>
					<li>
						<Link
							onClick={handleOnClick}
							href='/faq'
							className='flex items-center p-4 text-base font-normal bg-oasisGradient-rust text-oasisGradient-white rounded-lg'>
							<span className='ml-3'>Preguntas Frecuentes</span>
						</Link>
					</li>
					<li>
						<Link
							onClick={handleOnClick}
							href='/contactUs'
							className='flex items-center p-4 text-base font-normal bg-oasisGradient-rust text-oasisGradient-white rounded-lg'>
							<span className='ml-3'>Contáctanos</span>
						</Link>
					</li>
					<button onClick={handleLogOut} className='text-oasisGradient-white bg-oasisGradient-seaGreen2 fixed bottom-5 w-72 flex rounded-md flex-col justify-center items-center py-2'>
						<Image
							src={Log_Out_Icon}
							alt='logOutIcon'
							className='w-14 h-14 flex justify-center'
						/>
						Cerrar Sesion
					</button>
				</ul>
			</aside>
		</>
	);
};

export default SideBar;
