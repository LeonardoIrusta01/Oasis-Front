import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import  {toggleSideBar}  from '@/redux/features/sideBarSwitch';
import { IHamburguerMenu } from './interface'


const Hamburguer: React.FC<IHamburguerMenu> = ({ menuRef }) => {
	const hidden = useAppSelector((state) => state.toggleSideBarReducer.hidden);
	const dispatch = useAppDispatch();
	return (
			<button
				ref={menuRef}
				key='hamburguerMenu'
				className='flex flex-col h-12 w-12 border-2 border-transparent rounded justify-center items-center group z-50 absolute left-0 top-1/2 transform -translate-y-1/2'
				onClick={() => {
					dispatch(toggleSideBar(hidden ? false : true))
				}}
				type='button'>
				<div
					className={`h-1 w-6 mb-1 rounded-full bg-oasisGradient-black transition ease transform duration-300 ${
						!hidden
							? 'rotate-45 translate-y-2'
							: ''
					}`}
				/>
				<div
					className={`h-1 w-6 rounded-full bg-oasisGradient-black transition ease transform duration-300 ${
						!hidden
							? 'opacity-0'
							: ''
					}`}
				/>
				<div
					className={`h-1 w-6 mt-1 rounded-full bg-oasisGradient-black transition ease transform duration-300 ${
						!hidden
							? '-rotate-45 -translate-y-2'
							: ''
					}`}
				/>
			</button>
	);
};

export default Hamburguer;
