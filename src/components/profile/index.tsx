import Navbar from '../navbar';
import Image from 'next/image';
import userDefaultIcon from '../../assets/images/User_Icon.png';
import Log_Out_Icon from '../../assets/images/Log_Out_Icon.png';
import Edit_Icon from '../../assets/images/Edit_Icon.png';
import FooterComponent from '../footer';

const ProfileComponent = () => {

	return (
		<>
			<div className='h-screen w-sreen bg-oasisGradient-antiFlashWhite'>
				<Navbar />
				<div className='w-full flex justify-center pt-10'>
					<Image
						className='w-36 h-36'
						src={userDefaultIcon}
						alt='userImage'
					/>
				</div>
				<div className='pt-10 flex justify-around'>
					<ul className='space-y-5 w-96 md:w-2/5 lg:w-2/5'>
						<li className='bg-oasisGradient-white h-14 pl-2 flex items-center rounded-md'>
							<div>
								<p className='opacity-50'>Nombre</p>
								<p>{'name test'}</p>
							</div>
						</li>
						<li className='bg-oasisGradient-white h-14 pl-2 flex items-center rounded-md'>
							<div>
								<p className='opacity-50'>Mail:</p>
								<p>{'email test'}</p>
							</div>
						</li>
						<li className='bg-oasisGradient-white h-14 pl-2 flex justify-between items-center rounded-md'>
							<div>
								<p className='opacity-50'>Teléfono:</p>
								<p>{351111111}</p>
							</div>
							<button className='w-8 h-8 p-1'>
								<Image src={Edit_Icon} alt='' />
							</button>
						</li>
						<li className='bg-oasisGradient-white h-14 pl-2 flex justify-between items-center rounded-md'>
							<div className='max-w-xs'>
								<p className='opacity-50'>Contraseña</p>
								<p>**********</p>
							</div>
							<button className='w-8 h-8 p-1'>
								<Image src={Edit_Icon} alt='' />
							</button>
						</li>
					</ul>
				</div>
				<div className='flex justify-center w-full'>
					<button
						className='text-oasisGradient-white bg-oasisGradient-seaGreen2 relative -bottom-48 w-96 flex rounded-md flex-col justify-center md:justify-end lg:justify-end items-center py-2'>
						<Image
							src={Log_Out_Icon}
							alt='logOutIcon'
							className='w-16 h-14 flex justify-center'
						/>
						Cerrar sesión
					</button>
				</div>
			</div>
			<FooterComponent />
		</>
	);
};

export default ProfileComponent;
