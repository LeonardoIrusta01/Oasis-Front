// import { useGetProductsQuery } from "@/redux/servicies/productsApi"
// import ProductCard from "../productCard"


// const productCardContainer = () => {
//     const { data, isError, isLoading } = useGetProductsQuery(null)
    
//     if (isLoading) return <p>Loading...</p>
//     if (isError) return <p>Error</p>

//     const prod= data?.payload
//     console.log(data)

//     return (
//         <div>
//             {/* {Array.isArray(data?.payload) && data?.payload.map((e) => {return
//             <ProductCard
//             name={e.name}
//             price={e.price}
//             image={e.image}
            
//             />
// })} */}
//         </div>
//     )
// }

// export default productCardContainer