"use client"

import CardDetailComponent from "@/components/cardDetail"

interface ICardDetail {
id: string;
}

const CardDetail:React.FC<any> = ({params}) => {
    return <CardDetailComponent id={params.id}/>
}

export default CardDetail