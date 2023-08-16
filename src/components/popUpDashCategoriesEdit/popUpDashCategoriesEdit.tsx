import Image from 'next/image';
import { IPopUpEditProps, IDataForm } from './interface';
import UploadImage from '../uploadImage/uploadImage';
import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import {
	Formik,
	Field,
	FormikHelpers,
	FormikValues,
	Form,
} from 'formik';
import validationSchema from './inputValidator';

const PopUpDashCategoriesEdit: React.FC<IPopUpEditProps> = ({
	setIsShown,
	categoryName,
	categoryImage,
	categoryId,
}) => {
    const initialValues: IDataForm = {
		name: categoryName,
		image: categoryImage,
	};
    const [image, setImage] = useState<string>('');

    async function handleSubmit(
		values: IDataForm,
		{ setSubmitting, resetForm }: FormikHelpers<IDataForm>
	) {
		if (image != "") {
			values.image = image;
		}
		axios.put(`http://localhost:3001/api/categories/${categoryId}`, values);
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
								preset={'ml_categoryImages'}
								setUrl={setImage}>
								<Image
									className='w-48'
									width={192}
									height={182}
									src={
										categoryImage ||
										image
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
}

export default PopUpDashCategoriesEdit;