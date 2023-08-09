/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState, useRef } from "react";
import axios from 'axios'
import Filter from "@/components/filter";
import Link from "next/link";
import ProductCard from "@/components/productCard";
import ProductAddModal from "@/components/productAddModal";
import FooterComponent from '@/components/footer'
import { useAuth0 } from '@auth0/auth0-react';
import { useGetProductsQuery } from '@/redux/services/product/productsApi';
import { IProduct } from "@/redux/services/product/interface";
import { getProducts } from "@/redux/features/productsReducer";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { v4 } from 'uuid';

const Home = () => {
	const searchParams = new URLSearchParams(window.location.search);
  const dispatch = useAppDispatch();
  const [isModalShown, setIsModalShown] = useState(false);
  const { products, currentPage } = useAppSelector((state) => state.productReducer);
	const searchBarDispatch = useAppSelector((state) => state.searchBarStateDispatch.searchBarStateDispatch);
  const [page, setPage] = useState<number>(1);
  const { data, isError, isLoading, isFetching, refetch } = useGetProductsQuery(`limit=30&page=${page}&search=${searchParams.get('search') ?? ''}`);
  const containerRef = useRef<HTMLDivElement>(null);
	const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if(data?.status === 'Success'){
      if(currentPage !== 1){
        setPage(1)
      }
      dispatch(getProducts(data?.payload));
    }
  }, [data, currentPage]);

	const register = async () => {
		if (isAuthenticated && user) {
			try {
				await axios(`http://localhost:3001/api/user?email=${user?.email}`)
				return
			} catch {
				const newUser = {
					firstName: user.given_name,
					lastName: user.family_name,
					image: user.picture,
					email: user.email,
				};
				await axios.post('http://localhost:3001/api/user', newUser)
				return
			}
		}
	};

	useEffect(() => {
		register();
	}, [user]);

  useEffect(() => {
		const search = searchParams.get('search')
    if(search && search !== undefined) refetch()
	  // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchBarDispatch])

  if (isLoading)
    return (
      <div className="relative h-screen mb-36">
        <div className="flex justify-center items-center w-full h-screen/90">
          <svg className="animate-spin h-10 w-10 mr-3 border-4 border-r-indigo-500 rounded-full" viewBox="0 0 24 24"/>
        </div>
      </div>
    );
  if (isError) return <p>Error</p>;
  return (
    <>
      <div className="relative h-screen overflow-y-scroll mb-36" ref={containerRef}>
        <Filter />
        <div className="flex flex-row flex-wrap">
          { products?.[0] ? (
            products?.map((e: IProduct) => {
              return (
                <div key={v4()} className="w-44% md:w-21.95% lg:w-15.5% relative m-3 flex flex-col overflow-hidden rounded-lg border bg-oasisGradient-antiFlashWhite shadow-md">
                  <Link href={`/cardDetail/${e.id}`}>
                    <ProductCard
                      name={e.name}
                      price={e.price}
                      image={""}
                      isModalShown={isModalShown}
                      setIsModalShown={setIsModalShown}
                    />
                    {isModalShown ? (
                      <ProductAddModal
                        setIsModalShown={setIsModalShown}
                        price={e.price}
                      />
                    ) : null}
                  </Link>
                </div>
              );
            })
          ) : (
            <p>No hay productos de esta categoría</p>
          )}
          {isFetching && (
          <div className="flex w-full justify-center items-center">
            <svg className="animate-spin h-10 w-10 mr-3 border-4 border-r-indigo-500 rounded-full" viewBox="0 0 24 24"/>
          </div>
          )}
        </div>
      </div>
		<FooterComponent />
    </>
  );
};

export default Home;
