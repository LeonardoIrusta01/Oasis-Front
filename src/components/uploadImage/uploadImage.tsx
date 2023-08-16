import axios from 'axios';
import Swal from 'sweetalert2';
import { Ipreset } from './interface';
import { ref } from 'yup';

const UploadImage: React.FC<Ipreset> = ({
	preset,
	children,
	setUrl,
}) => {
	const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

	const openChooseImage = async () => {
		const { value: file } = await Swal.fire({
			title: 'Selecciona una imagen',
      text: "<input type='file' id='fileToUploadAlert' accept='image/*'>\n",
      html: true,
			confirmButtonColor: '#1E5940',
			input: 'file',
			inputAttributes: {
				accept: 'image/*',
				'aria-label': 'Sube tu imagen de perfil',
			},
		});
		if (file) {
			upload(file);
		}
	};

	const upload = (e: any) => {
		const files = e;
		if (files && ALLOWED_TYPES.includes(files.type)) {
			const data = new FormData();
			data.append('file', files);
			data.append('upload_preset', preset);
			axios
				.post(
					'https://api.cloudinary.com/v1_1/oasisTest/image/upload',
					data
				)
				.then((res) => {
					setUrl(res.data.secure_url);
				})
				.catch((err) => console.log(err));
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Algo salió mal!',
				text: 'Tipo de archivo no soportado',
				position: 'top',
				confirmButtonColor: '#1E5940',
			});
		}
	};
	return (
		<div>
			<button type='button' className='z-50' onClick={openChooseImage}>
				{children}
			</button>
		</div>
	);
};

export default UploadImage;
