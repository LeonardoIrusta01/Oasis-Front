import IprofileProps from './interface';
import Navbar from '../navbar';
import Image from 'next/image';
import userDefaultIcon from '../../assets/images/User_Icon.png';
import Log_Out_Icon from '../../assets/images/Log_Out_Icon.png';
import Edit_Icon from '../../assets/images/Edit_Icon.png';

const ProfileComponent: React.FC<IprofileProps> = ({
	image,
	name,
	email,
	phone,
}) => {
	return (
		<div className='h-screen w-sreen bg-oasisGradient-antiFlashWhite'>
			<Navbar />
			<div className='w-full flex justify-center pt-10'>
				<Image
					className='w-36 h-36'
					src={image || userDefaultIcon}
					alt='userImage'
				/>
			</div>
			<div className='pt-10 flex justify-around'>
				<ul className='space-y-5 w-96'>
					<li className='bg-oasisGradient-white h-14 pl-2 flex items-center rounded-md'>
                        <p className='opacity-50 mr-3'>Name</p>
						{name || 'Name'}
					</li>
					<li className='bg-oasisGradient-white h-14 pl-2 flex items-center rounded-md'>
                        <p className='opacity-50 mr-3'>Mail</p>
						{email || 'Email'}
						<button className='w-8 h-8 fixed right-5'>
							<Image src={Edit_Icon} alt='' />
						</button>
					</li>
					<li className='bg-oasisGradient-white h-14 pl-2 flex items-center rounded-md'>
                        <p className='opacity-50 mr-3'>Phone</p>
						{phone || 'Name'}
						<button className='w-8 h-8 fixed right-5'>
							<Image src={Edit_Icon} alt='' />
						</button>
					</li>
				</ul>
			</div>
			<div className='flex justify-center w-full'>
				<button className='text-oasisGradient-white bg-oasisGradient-seaGreen2 fixed bottom-7 w-96 flex rounded-md flex-col justify-center items-center py-2'>
					<Image
						src={Log_Out_Icon}
						alt='logOutIcon'
						className='w-14 h-14 flex justify-center'
					/>
					Log Out
				</button>
			</div>
		</div>
	);
};

export default ProfileComponent;
