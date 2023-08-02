import Navbar from '../navbar';
import FooterComponent from '../footer';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useGetCategoriesQuery } from '@/redux/services/category/categoryApi';
import { ICategory } from '@/redux/services/category/inteface';
import PopUpDashCategoriesEdit from '../popUpDashCategoriesEdit/popUpDashCategoriesEdit';
import Edit_Icon from "../../assets/svg/Edit Icon.svg"
import { useUserRole } from '@/hooks/useUserRole'; 

const DashboardCategoriesComponent = () => {
	const [isShown, setIsShown] = useState<boolean>(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
		null
	);
	const { data, refetch } =
		useGetCategoriesQuery(null);
    const { isAdmin } = useUserRole()

	const handlePopUpEdit = (categoryId: number) => {
		setSelectedCategoryId(categoryId);
		setIsShown(!isShown);
	};

    useEffect(() => {
		if (!isShown) {
			refetch();
		}
	}, [isShown]);

	return isAdmin ? (
		<>
			<div ref={containerRef} className='h-screen overflow-y-auto'>
				<Navbar />
				<div className='flex flex-col bg-oasisGradient-antiFlashWhite h-screen overflow-hidden px-4 space-y-6'>
					<div className='flex flex-row justify-center h-10 mt-4'>
						<input
							className='md:w-1/2 w-full rounded-md p-2'
							placeholder='Buscar categoría'></input>
					</div>
                    <div className='w-full flex justify-center'>
					<table className='md:w-1/2 w-full flex flex-col'>
						<tr>
							<th className='w-1/4 text-start pb-2'>Categoría</th>
						</tr>
						{data?.payload?.map((e: ICategory) => {
							return (
								<tr className='border-b border-gray-300 flex flex-row justify-between'>
									<td>
										<p className='pl-2'>{e.name}</p>
									</td>
									<td>
										<div>
											<button
                                        type='button'
                                        onClick={() =>
                                            handlePopUpEdit(e.id)
                                        }>
                                        <Image
                                            className='md:w-8'
                                            src={Edit_Icon}
                                            alt='edit_icon'></Image>
                                    </button>
										</div>
									</td>
									{isShown && selectedCategoryId === e.id && (
										<PopUpDashCategoriesEdit
											key={e.id}
											setIsShown={setIsShown}
											categoryName={e.name}
											categoryImage={e.image}
											categoryId={e.id}
										/>
									)}
								</tr>
							);
						})}
					</table>
                    </div>
				</div>
			</div>
			<FooterComponent />
		</>
	):(
        <p> No eres administrador... </p>
    )
};

export default DashboardCategoriesComponent;
