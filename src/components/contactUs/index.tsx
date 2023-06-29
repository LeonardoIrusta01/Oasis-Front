import Image from 'next/image';
import Navbar from '../navbar';
import facebookLogo from '../../assets/images/Facebook_Logo.png';
import instagramLogo from '../../assets/images/Instagram_Logo_Black.png';
import whatsappLogo from '../../assets/images/WhatsApp_Logo.png';
import mailLogo from '../../assets/images/Gmail_Logo_Black.png';
import { useState } from 'react';
import { IDataForm } from './interface';
import axios from 'axios';
import {
	Formik,
	Field,
	FormikHelpers,
	FormikValues,
	Form,
	ErrorMessage,
} from 'formik';
import validationSchema from './inputValidator';
import FooterComponent from '../footer';

const initialValues: IDataForm = {
	name: '',
	email: '',
	subject: '',
	message: '',
};

const ContactMe = () => {
	const [buttonMessage, setButtonMessage] = useState<string>('Enviar');

	async function handleSubmit(
		values: IDataForm,
		{ setSubmitting, resetForm }: FormikHelpers<IDataForm>
	) {
		setSubmitting(false);
		setButtonMessage('Enviando...');
		const res = await axios.post(
			'http://localhost:3001/api/contact',
			values
		);

		if (res.data.status == 'Success') {
			setButtonMessage('Mensaje enviado');
			setTimeout(() => setButtonMessage('Enviar'), 2000);
		}

		resetForm();
	}

	return (
		<>
			<div className='h-screen w-sreen bg-oasisGradient-antiFlashWhite'>
				<Navbar />

				<p
					className='w-100% p-3 text-oasisGradient-black text-8 flex justify-center font-semibold'
					style={{ textShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}>
					Contáctanos
				</p>

				<div className='space-y-6'>
					<div className='flex justify-center'>
						<div className='w-96 h-12 p-4 left-3 top-32 bg-oasisGradient-seaGreen flex items-center rounded-md'>
							<Image
								className='w-9 h-9 left-2 top-2'
								src={facebookLogo}
								alt='facebookLogo'
							/>
							<p className='p-4 text-oasisGradient-white'>
								Facebook
							</p>
						</div>
					</div>

					<div className='flex justify-center'>
						<div className='w-96 h-12 p-4 left-3 top-32 bg-oasisGradient-seaGreen flex items-center rounded-md'>
							<Image
								className='w-9 h-9 left-2 top-2'
								src={instagramLogo}
								alt='instagramLogo'
							/>
							<p className='p-4 text-oasisGradient-white'>
								Instagram
							</p>
						</div>
					</div>

					<div className='flex justify-center'>
						<div className='w-96 h-12 p-4 left-3 top-32 bg-oasisGradient-seaGreen flex items-center rounded-md'>
							<Image
								className='w-9 h-9 left-2 top-2'
								src={whatsappLogo}
								alt='whatsappLogo'
							/>
							<p className='p-4 text-oasisGradient-white'>
								WhatsApp
							</p>
						</div>
					</div>

					<Formik
						className='flex justify-center p-4'
						initialValues={initialValues}
						onSubmit={handleSubmit}
						validationSchema={validationSchema}>
						{({ isSubmitting }: FormikValues) => {
							return (
								<Form className='flex justify-center'>
									<div className='w-96 h-fit p-4 bg-oasisGradient-seaGreen flex rounded-md flex-col'>
										<div className='flex flex-row items-center left-2'>
											<Image
												className='w-9 h-9'
												src={mailLogo}
												alt='mailLogo'
											/>
											<p className='pl-4 text-oasisGradient-white'>
												Email
											</p>
										</div>

										<div className='space-y-3 pt-4'>
											<Field
												type='text'
												placeholder='Nombre...'
												className='rounded-md w-full pl-2'
												name='name'
											/>
											<ErrorMessage
												name='name'
												component='span'
												className='text-white text-xs'
											/>

											<Field
												type='Email'
												placeholder='Mail...'
												className='rounded-md w-full pl-2'
												name='email'
											/>
											<ErrorMessage
												name='email'
												component='span'
												className='text-white text-xs'
											/>

											<Field
												type='text'
												placeholder='Asunto...'
												className='rounded-md w-full pl-2'
												name='subject'
											/>
											<ErrorMessage
												name='subject'
												component='span'
												className='text-white text-xs'
											/>

											<Field
												as='textarea'
												placeholder='Mensaje...'
												className='rounded-md w-full h-32 pl-2 resize-none'
												name='message'
											/>
											<ErrorMessage
												name='message'
												component='span'
												className='text-white text-xs'
											/>

											<button
												className='bg-oasisGradient-castletonGreen text-oasisGradient-white w-full h-8 rounded-md'
												type='submit'
												disabled={isSubmitting}>
												{buttonMessage}
											</button>
										</div>
									</div>
								</Form>
							);
						}}
					</Formik>
				</div>
			</div>
			<FooterComponent />
		</>
	);
};

export default ContactMe;
