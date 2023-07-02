import Link from 'next/link';
import { toggleSideBar } from '@/redux/features/sideBarSwitch';
import { useAppDispatch } from '@/redux/hooks';
import Image from 'next/image';
import Log_Out_Icon from '../../assets/images/Log_Out_Icon.png';
import { ISideBar } from './interface'

const SideBar: React.FC<ISideBar> = ({ sideBarElement, hidden }) => {
	const dispatch = useAppDispatch();

	const handleOnClick = () => {
		dispatch(toggleSideBar(true));
	};

	return (
		<>
			<div className={`${!hidden ? 'left-0' : '-left-screen'} flex fixed w-full z-10 h-full bg-gray-800/5 backdrop-blur-sm`}/>
			<aside
				style={{'transition': 'all 400ms ease-in-out'}}
				ref={sideBarElement}
				className={`${!hidden ? 'left-0' : '-left-80'} fixed overflow-y-auto space-y-6 z-20 bg-oasisGradient-cambridgeBlue top-0 w-80 h-screen pt-20`}>
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
					<button className='text-oasisGradient-white bg-oasisGradient-seaGreen2 fixed bottom-5 w-72 flex rounded-md flex-col justify-center items-center py-2'>
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
