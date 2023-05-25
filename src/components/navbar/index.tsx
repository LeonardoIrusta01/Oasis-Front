'use client'
import Menu from '../hamburguerMenu';
import InputSearch from '../inputSearch'
import Image from 'next/image';
import userIcon from '../../assets/images/User_Icon.png'
import cartIcon from '../../assets/images/Cart_Icon.png'


const Navbar = () => {
    return (
        <div className='w-full h-1/10 bg-oasisGradient-seaGreen flex items-center px-2'>
            <Menu />
            <InputSearch label='prueba' />
            <Image className='ml-3 w-6 h-6 text-oasisGradient-black' src={userIcon} alt='logo' />
            <Image className='mx-3 w-6 h-6 text-oasisGradient-black' src={cartIcon} alt='logo' />
        </div>
    )
}

export default Navbar