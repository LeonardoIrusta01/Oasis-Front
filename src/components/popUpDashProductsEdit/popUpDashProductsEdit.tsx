import Image from 'next/image';
import { IPopUpEditProps, IDataForm } from './interface';
import default_food_icon from '../../assets/images/Default_Food_Icon.png';
import axios from 'axios';
import {
	Formik,
	Field,
	FormikHelpers,
	FormikValues,
	Form,
} from 'formik';
import validationSchema from './inputValidator';
import Swal from 'sweetalert2';
import { useGetCategoriesQuery } from '@/redux/services/category/categoryApi';
import UploadImage from '../uploadImage/uploadImage';
import { useState } from 'react';

const PopUpDashProductsEdit: React.FC<IPopUpEditProps> = ({
	setIsShown,
	productName,
	productDescription,
	productPrice,
	productImage,
	productId,
	productStock,
	productCategory,
}) => {
	const initialValues: IDataForm = {
		name: productName,
		price: productPrice,
		description: productDescription,
		stock: productStock,
		idCategory: productCategory,
		image: productImage,
	};
	const { data } = useGetCategoriesQuery(null);
	const [image, setImage] = useState<string>('');

	async function handleSubmit(
		values: IDataForm,
		{ setSubmitting, resetForm }: FormikHelpers<IDataForm>
	) {
		if (values.stock === 'Si') {
			values.stock = true;
		} else if (values.stock === 'No') {
			values.stock = false;
		} else {
			values.stock === initialValues.stock;
		}
		if (image != "") {
			values.image = image;
		}
		axios.put(`http://localhost:3001/api/products/${productId}`, values);
		setSubmitting(false);
		resetForm();
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'El producto se modificó correctamente',
			showConfirmButton: false,
			timer: 1500,
		});
		setIsShown(false);
	}

	const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsShown(false);
	};

	return (
		<div
			style={{ transform: 'translate(-50%, -50%)' }}
			className='absolute z-50 flex justify-center items-center top-1/2 left-1/2 w-full h-full bg-gray-300 bg-opacity-30 backdrop-blur-sm'>
			<div className=' mx-auto p-5 border w-11/12 max-h-[900px] md:w-1/3 shadow-lg rounded-xl bg-oasisGradient-cambridgeBlue'>
				<div className='mt-3'>
					<div className='flex justify-center pb-2 w-full'>
						<div className='flex md:w-1/2 w-10/12 p-1 rounded-md justify-center bg-oasisGradient-antiFlashWhite'>
							<UploadImage
								preset={'ml_productImage'}
								setUrl={setImage}>
								<Image
									className='w-48'
									width={192}
									height={182}
									src={
										productImage ||
										image ||
										default_food_icon
									}
									alt='default_food_icon'></Image>
							</UploadImage>
						</div>
					</div>
					<Formik
						initialValues={initialValues}
						onSubmit={handleSubmit}
						validationSchema={validationSchema}>
						{({ isSubmitting }: FormikValues) => {
							return (
								<Form>
									<div className=' flex flex-col space-y-4 max-h-full items-center pb-3'>
										<div className='flex flex-col w-full justify-center items-center'>
											<label className=' text-white md:w-1/2 w-10/12 text-start'>
												Nombre
											</label>
											<Field
												type='text'
												className='h-1.5/10 md:w-1/2 w-10/12 p-1 rounded-md'
												name='name'></Field>
										</div>
										<div className='flex flex-col w-full justify-center items-center'>
											<label className='text-white md:w-1/2 w-10/12 text-start'>
												Precio
											</label>
											<Field
												type='number'
												className='h-1.5/10 md:w-1/2 w-10/12 p-1 rounded-md'
												name='price'></Field>
										</div>
										<div className='flex flex-col w-full justify-center items-center'>
											<label className='text-white md:w-1/2 w-10/12 text-start'>
												Descripción
											</label>
											<Field
												as='textarea'
												className='h-44 md:w-1/2 w-10/12 p-1 rounded-md'
												name='description'></Field>
										</div>
										<div className='flex flex-col w-full justify-center items-center'>
											<label className='text-white md:w-1/2 w-10/12 text-start'>
												Stock
											</label>
											<Field
												as='select'
												className='h-1.5/10 md:w-1/2 w-10/12 p-1 rounded-md'
												name='stock'>
												<option selected hidden>
													Stock
												</option>
												<option>Si</option>
												<option>No</option>
											</Field>
										</div>
										<div className='flex flex-col w-full justify-center items-center'>
											<label className='text-white md:w-1/2 w-10/12 text-start'>
												Categorías
											</label>
											<Field
												as='select'
												className='h-1.5/10 md:w-1/2 w-10/12 p-1 rounded-md'
												name='idCategory'>
												<option selected hidden>
													Categorías
												</option>
												{data &&
													data.payload.map((c) => (
														<option
															key={c.id}
															value={c.id}>
															{c.name}
														</option>
													))}
											</Field>
										</div>
									</div>
									<div className='items-center px-4 py-3 flex flex-row space-x-4'>
										<button
											onClick={handleCancel}
											className='px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-500'>
											Cancelar
										</button>
										<button
											type='submit'
											disabled={isSubmitting}
											className='px-4 py-2 bg-oasisGradient-seaGreen2 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-oasisGradient-seaGreen2'>
											Aceptar
										</button>
									</div>
								</Form>
							);
						}}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default PopUpDashProductsEdit;
