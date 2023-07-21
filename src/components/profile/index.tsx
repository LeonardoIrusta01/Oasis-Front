import Navbar from '../navbar';
import Image from 'next/image';
import userDefaultIcon from '../../assets/images/User_Icon.png';
import Log_Out_Icon from '../../assets/images/Log_Out_Icon.png';
import Edit_Icon from '../../assets/images/Edit_Icon.png';
import FooterComponent from '../footer';
import {
	useUpdateUsersMutation,
	useGetUserbyEmailQuery,
} from '@/redux/services/user/usersApi';
import UploadImage from '../uploadImage/uploadImage';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Swal from 'sweetalert2';
import { number } from 'yup';

const ProfileComponent = () => {
	const { user } = useAuth0();
	const { data } = useGetUserbyEmailQuery(user?.email);
	const [updateUsers] = useUpdateUsersMutation();
	const [url, setUrl] = useState('');

	useEffect(() => {
		if (url) {
			updateUsers({ id: data?.payload.id!, post: { image: url } });
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'Imagen subida correctamente',
				showConfirmButton: false,
				timer: 1500,
			});
		}
	}, [url]);

	const handleNameChange = () => {
		Swal.fire({
			title: 'Colocá tu nombre',
			html: `<input type="text" id="name" class="swal2-input" placeholder="Nombre">
  					<input type="text" id="lastname" class="swal2-input" placeholder="Apellido">`,
			inputPlaceholder: '',
			showCancelButton: true,
			confirmButtonText: 'Aceptar',
			confirmButtonColor: '#1E5940',
			showLoaderOnConfirm: true,
			preConfirm: () => {
				const nameElement = document.getElementById(
					'name'
				) as HTMLInputElement | null;
				const name = nameElement?.value;
				const lastnameElement = document.getElementById(
					'lastname'
				) as HTMLInputElement | null;
				const lastname = lastnameElement?.value;
				if (name || lastname) {
					return { name: name, lastname: lastname };
				} else {
					Swal.showValidationMessage(
						`Por favor introduzca su nombre y/o apellido`
					);
				}
			},
		}).then((result) => {
			if (result.isConfirmed) {
				updateUsers({
					id: data?.payload.id!,
					post: {
						firstName: result.value?.name,
						lastName: result.value?.lastname,
					},
				});
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'El nombre se modificó correctamente',
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});
	};

	const handleCellPhoneChange = async () => {
		const { value: cellphone } = await Swal.fire({
			title: 'Colocá tu nuevo número',
			html: `<style>
			input::-webkit-outer-spin-button,
			input::-webkit-inner-spin-button {
			  -webkit-appearance: none;
			  margin: 0;
			}
			input[type="number"] {
			  -moz-appearance: textfield;
			}
		  </style> <input class="swal2-input" type="number"></input>`,
			inputPlaceholder: '',
			showCancelButton: true,
			confirmButtonText: 'Aceptar',
			confirmButtonColor: '#1E5940',
			showLoaderOnConfirm: true,
		});
		if (cellphone && cellphone.toString().length === 10) {
			updateUsers({
				id: data?.payload.id!,
				post: { cellphone: cellphone },
			});
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'El número se cambió correctamente',
				showConfirmButton: false,
				timer: 1500,
			});
		} else if (cellphone) {
			Swal.fire({
				icon: 'error',
				title: 'Algo salió mal!',
				text: 'Número incorrecto',
				position: 'top',
				confirmButtonColor: '#1E5940',
			});
		}
	};

	return (
		<>
			{data ? (
				<>
					<div className='h-screen w-sreen bg-oasisGradient-antiFlashWhite'>
						<Navbar />
						<div className='w-full flex justify-center pt-10'>
							{!data.payload.image!.includes(
								'googleusercontent'
							) ? (
								<UploadImage
									preset={'ml_userImage'}
									setUrl={setUrl}>
									<Image
										className='w-48 h-48 rounded-full object-contain'
										src={
											data.payload.image ||
											userDefaultIcon
										}
										alt='userImage'
										width='192'
										height='192'
									/>
								</UploadImage>
							) : (
								<Image
									className='w-48 h-48 rounded-full'
									src={data.payload.image || userDefaultIcon}
									alt='userImage'
									width='192'
									height='192'
								/>
							)}
						</div>
						<div className='pt-10 flex justify-around'>
							<ul className='space-y-5 w-96 md:w-2/5 lg:w-2/5'>
								<li className='bg-oasisGradient-white h-14 pl-2 flex justify-between items-center rounded-md'>
									<div>
										<p className='opacity-50'>Nombre</p>
										<p>
											{data.payload.firstName}{' '}
											{data.payload.lastName}
										</p>
									</div>
									<button
										onClick={handleNameChange}
										className='w-8 h-8 p-1'>
										<Image src={Edit_Icon} alt='' />
									</button>
								</li>
								<li className='bg-oasisGradient-white h-14 pl-2 flex items-center rounded-md'>
									<div>
										<p className='opacity-50'>Mail:</p>
										<p>{data.payload.email}</p>
									</div>
								</li>
								<li className='bg-oasisGradient-white h-14 pl-2 flex justify-between items-center rounded-md'>
									<div>
										<p className='opacity-50'>Teléfono:</p>
										<p>{data.payload.cellphone}</p>
									</div>
									<button
										onClick={handleCellPhoneChange}
										className='w-8 h-8 p-1'>
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
							<button className='text-oasisGradient-white bg-oasisGradient-seaGreen2 relative -bottom-48 w-96 flex rounded-md flex-col justify-center md:justify-end lg:justify-end items-center py-2'>
								<Image
									src={Log_Out_Icon}
									alt='logOutIcon'
									className='w-16 h-14 flex justify-center'
								/>
								Cerrar sesión
							</button>
						</div>
					</div>
					<FooterComponent />
				</>
			) : null}
		</>
	);
};

export default ProfileComponent;
