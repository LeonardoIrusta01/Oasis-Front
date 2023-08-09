'use client'

import { ChangeEvent, useState } from "react"
import { IInputSearch } from "./interface"
import  { searchBarStateDispatch }  from '@/redux/features/searchbar';
import { useAppDispatch } from "@/redux/hooks";

const InputSearch: React.FC<IInputSearch> = ({ label }) => {
	const dispatch = useAppDispatch();
    const [state, setState] = useState<string>('')
    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        setState(event.target.value)
    }

    const changeQueryParam = (paramName: string, paramValue: string) => {
        let currentUrl = window.location.origin;
        const separator = currentUrl.includes('?') ? '&' : '?';
        currentUrl = `${currentUrl}${separator}${paramName}=${paramValue}`;
        window.history.pushState({ path: currentUrl }, '', currentUrl);
    };

    function handlePressEnter(event: any): void {
        if(event.keyCode === 13){
            changeQueryParam('search', state)
            dispatch(searchBarStateDispatch())
        }
    }

    return(
        <>
            <input
                id='inputSearch'
                placeholder='Buscar...'
                type='text'
                value={state}
                onChange={handleChange}
                onKeyDownCapture={handlePressEnter}
                className='w-full pr-5.5 pl-3.5 -mt-0.5 py-2 border h-59% rounded-md font-semibold bg-oasisGradient-antiFlashWhite text-oasisGradient-black shadow-inner'
            />
        </>
    )
}

export default InputSearch