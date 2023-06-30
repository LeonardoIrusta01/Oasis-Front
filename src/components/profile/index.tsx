import Navbar from '../navbar';
import { useGetUserByIdQuery } from '@/redux/services/user/usersApi';
import Image from 'next/image';
import axios from 'axios';
import userDefaultIcon from '../../assets/images/User_Icon.png';
import Log_Out_Icon from '../../assets/images/Log_Out_Icon.png';
import Edit_Icon from '../../assets/images/Edit_Icon.png';
import FooterComponent from '../footer';
import Cookies from 'universal-cookie';

const ProfileComponent = () => {
	const cookies = new Cookies();
	const userId = cookies.get('userId');

	const { data, isLoading, isError } = useGetUserByIdQuery(userId);

	if (isLoading)
		return (
			<div className='relative h-screen'>
				<Navbar />
				<div className='bg-gray-200 w-full min-h-screen flex justify-center items-center'>
					<div className='flex min-h-screen w-full items-center justify-center bg-gray-200'>
						<div className='flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-oasisGradient-antiFlashWhite to-oasisGradient-seaGreen2 animate-spin'>
							<div className='h-9 w-9 rounded-full bg-gray-200'></div>
						</div>
					</div>
				</div>
			</div>
		);
	if (isError) return <p>Error</p>;

	const handleLogOut = async () => {
		const res = (await axios('http://localhost:3001/api/auth/logout')).data;
	};

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
								<p>{data?.payload?.firstName || ''}</p>
							</div>
						</li>
						<li className='bg-oasisGradient-white h-14 pl-2 flex items-center rounded-md'>
							<div>
								<p className='opacity-50'>Mail:</p>
								<p>{data?.payload?.email || ''}</p>
							</div>
						</li>
						<li className='bg-oasisGradient-white h-14 pl-2 flex justify-between items-center rounded-md'>
							<div>
								<p className='opacity-50'>Teléfono:</p>
								<p>{data?.payload?.cellphone || 0}</p>
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
						onClick={handleLogOut}
						className='text-oasisGradient-white bg-oasisGradient-seaGreen2 relative -bottom-48 w-96 flex rounded-md flex-col justify-center md:justify-end lg:justify-end items-center py-2'>
						<Image
							src={Log_Out_Icon}
							alt='logOutIcon'
							className='w-16 h-14 flex justify-center'
						/>
						Log Out
					</button>
				</div>
			</div>
			<FooterComponent />
		</>
	);
};

export default ProfileComponent;
