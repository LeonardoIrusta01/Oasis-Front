'use client'

import { ChangeEvent } from "react"
import { IInputSearch } from "./interface"

const InputSearch: React.FC<IInputSearch> = ({ label }) => {
    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        // console.log('value de searchbar', event.target.value)
    }

    function handlePressEnter(event: any): void {
        if(event.keyCode === 13){
            // console.log('este es el dato del evento', event.keyCode)
        }
    }

    return(
        <>
            <input
                id='inputSearch'
                placeholder='Buscar...'
                type='text'
                onChange={handleChange}
                onKeyDownCapture={handlePressEnter}
                className='w-full pr-5.5 pl-3.5 -mt-0.5 border h-59% rounded-md font-semibold bg-oasisGradient-antiFlashWhite text-oasisGradient-black shadow-inner'
            />
        </>
    )
}

export default InputSearch