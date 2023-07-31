import Image from 'next/image';
import FooterComponent from '../footer';
import Navbar from '../navbar';
import Confirm_Icon from '../../assets/svg/Confirm Icon.svg';
import Edit_Icon from '../../assets/svg/Edit Icon.svg';
import Rejected_Icon from '../../assets/svg/Rejected Icon.svg';
import Swal from 'sweetalert2';
import { useState, useRef, useEffect } from 'react';
import { useGetProductsQuery } from '@/redux/services/product/productsApi';
import PopUpDashProductsEdit from '../popUpDashProductsEdit/popUpDashProductsEdit';
import { IProduct } from '@/redux/services/product/interface';
import axios from 'axios';

const DashboardProductsComponent = () => {
	const [page, setPage] = useState<number>(1);
	const [isShown, setIsShown] = useState<boolean>(false);
	const [selectedProductId, setSelectedProductId] = useState<number | null>(
		null
	);
	const { data, isError, isLoading, isFetching, refetch } =
		useGetProductsQuery(`limit=30&page=${page}`);
	const containerRef = useRef<HTMLDivElement>(null);
	const [productIsActive, setProductIsActive] = useState<boolean>(false);
	const handlePopUpEdit = (productId: number) => {
		setSelectedProductId(productId);
		setIsShown(!isShown);
	};

	const handleProductActive = async (id: number, active: boolean) => {
		setProductIsActive(active)
		if (productIsActive) {
			setProductIsActive(false);
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'El producto ahora esta activado',
				showConfirmButton: false,
				timer: 1500,
			});
		} else {
			setProductIsActive(true);
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'El producto ahora esta desactivado',
				showConfirmButton: false,
				timer: 1500,
			});
		}
		try {
			await axios.put(`http://localhost:3001/api/products/${id}`, {
				active: !active,
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (!isShown || !productIsActive || productIsActive) {
			refetch();
		}
	}, [productIsActive, isShown]);

	useEffect(() => {
		const handleScroll = () => {
			const container = containerRef.current;
			if (container) {
				const { scrollTop, scrollHeight, clientHeight } = container;
				if (
					scrollTop + clientHeight >= scrollHeight &&
					!isLoading &&
					page < 120
				) {
					setPage(page + 1);
				}
			}
		};

		containerRef.current?.addEventListener('scroll', handleScroll);
	}, [isLoading, page, containerRef]);

	if (isLoading)
		return (
			<div className='relative h-screen mb-36'>
				<Navbar />
				<div className='flex justify-center items-center w-full h-screen/90'>
					<svg
						className='animate-spin h-10 w-10 mr-3 border-4 border-r-indigo-500 rounded-full'
						viewBox='0 0 24 24'
					/>
				</div>
			</div>
		);
	if (isError) return <p>Error</p>;

	return (
		<>
			<div ref={containerRef} className='h-screen overflow-y-auto'>
				<Navbar />
				<div className='flex flex-col bg-oasisGradient-antiFlashWhite h-screen overflow-hidden px-4 space-y-6'>
					<div className='flex flex-row md:space-x-32 space-x-4 h-10 mt-4'>
						<input
							className='md:w-1/2 w-44% rounded-md p-2'
							placeholder='Buscar producto'></input>
						<div className='flex md:space-x-10 space-x-2 md:w-1/2 w-42'>
							<select className='w-42 rounded-md p-2'>
								<option selected hidden>
									Ordenar
								</option>
							</select>
							<select className='md:w-42 rounded-md p-2'>
								<option selected hidden>
									Filtrar
								</option>
							</select>
						</div>
					</div>
					<table>
						<tr>
							<th className='w-1/4 text-start'>Precio</th>
							<th className='w-1/4 text-start'>Producto</th>
							<th className='w-1/4 text-start'>Stock</th>
							<th className='w-1/4 text-start'>Activo</th>
							<th className='w-1/12 text-start'>Editar</th>
						</tr>
						{data?.payload?.map((e: IProduct) => {
							return (
								<tr className='border-b border-gray-300'>
									<td>
										<p>${e.price}</p>
									</td>
									<td>
										{e.name.length < 18 ? (
											<p className='pl-2'>{e.name}</p>
										) : (
											<p className='pl-2' title={e.name}>
												{e.name
													.slice(0, 12)
													.concat('...')}
											</p>
										)}
									</td>
									<td>
										<p>
											{e.stock
												? 'Disponible'
												: 'No Disnonible'}
										</p>
									</td>
									<td>
										<div>
											<button
												type='button'
												onClick={() =>
													handleProductActive(e.id, e.active)
												}>
												{e.active === false ? (
													<Image
														src={Rejected_Icon}
														alt='Confirm_Icon'></Image>
												) : (
													<Image
														src={Confirm_Icon}
														alt='Confirm_Icon'></Image>
												)}
											</button>
										</div>
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
									{isShown && selectedProductId === e.id && (
										<PopUpDashProductsEdit
											key={e.id}
											setIsShown={setIsShown}
											productName={e.name}
											productDescription={e.description}
											productPrice={e.price}
											productImage={e.image}
											productId={e.id}
											productStock={e.stock}
											productCategory={e.Category.id}
										/>
									)}
								</tr>
							);
						})}
					</table>
				</div>
				{isFetching && (
					<div className='flex w-full justify-center items-center'>
						<svg
							className='animate-spin h-10 w-10 mr-3 border-4 border-r-indigo-500 rounded-full'
							viewBox='0 0 24 24'
						/>
					</div>
				)}
			</div>
			<FooterComponent />
		</>
	);
};

export default DashboardProductsComponent;
