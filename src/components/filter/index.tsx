import Image from 'next/image';
import defaultIcon from '../../assets/images/Default_Food_Icon.png';

const Filter = () => {
	return (
		<div className='flex overflow-x-scroll lg:overflow-hidden py-5 hide-scroll-bar'>
			<div className='flex flex-nowrap'>
				<div className='inline-block px-3'>
					<div className='w-28 h-28 max-w-xs overflow-hidden rounded-full bg-oasisGradient-antiFlashWhite flex justify-center items-center'>
						<Image
							src={defaultIcon}
							alt='defaultIcon'
							className='w-16 h-16'
						/>
					</div>
					<p className='flex justify-center font-bold pt-2'>
						Category
					</p>
				</div>
			</div>
		</div>
	);
};

export default Filter;
