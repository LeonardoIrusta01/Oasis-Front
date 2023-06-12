import React, { useState } from 'react';
import { useAppDispatch} from '@/redux/hooks';
import  {toggleSideBar}  from '@/redux/features/sideBarSwitch';

const Hamburguer = () => {
	const [isOpen, setIsOpen] = useState(false);

	const dispatch = useAppDispatch();
	return (
		<div>
			<button
				className='flex flex-col h-12 w-12 border-2 border-transparent rounded justify-center items-center group'
				onClick={() => {
					setIsOpen(!isOpen);
					dispatch(toggleSideBar())
				}}
				data-drawer-target='default-sidebar'
				data-drawer-toggle='default-sidebar'
				aria-controls='default-sidebar'
				type='button'>
				<div
					className={`h-1 w-6 mb-1 rounded-full bg-oasisGradient-black transition ease transform duration-300 ${
						isOpen
							? 'rotate-45 translate-y-2 opacity-50 group-hover:opacity-100'
							: 'opacity-50 group-hover:opacity-100'
					}`}
				/>
				<div
					className={`h-1 w-6 rounded-full bg-oasisGradient-black transition ease transform duration-300 ${
						isOpen
							? 'opacity-0'
							: 'opacity-50 group-hover:opacity-100'
					}`}
				/>
				<div
					className={`h-1 w-6 mt-1 rounded-full bg-oasisGradient-black transition ease transform duration-300 ${
						isOpen
							? '-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100'
							: 'opacity-50 group-hover:opacity-100'
					}`}
				/>
			</button>
			
		</div>
	);
};

export default Hamburguer;
