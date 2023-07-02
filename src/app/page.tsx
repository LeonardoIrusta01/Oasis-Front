/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState, useRef } from "react";
import ProductCard from "@/components/productCard";
import ProductAddModal from "@/components/productAddModal";
import Navbar from "../components/navbar/index";
import { useGetProductsQuery } from '@/redux/services/product/productsApi';
import { IProduct } from "@/redux/services/product/interface";
import Filter from "@/components/filter";
import Link from "next/link";
import { getProducts } from "@/redux/features/productsReducer";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import FooterComponent from '@/components/footer'

const Home = () => {
  const dispatch = useAppDispatch();
  const [isModalShown, setIsModalShown] = useState(false);
  const products = useAppSelector((state) => state.productReducer.products);
  const [page, setPage] = useState<number>(1);
  const { data, isError, isLoading, isFetching } = useGetProductsQuery(`limit=30&page=${page}`);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(getProducts(data?.payload));
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container;
        if (scrollTop + clientHeight >= scrollHeight && !isLoading && page < 120) {
          setPage(page + 1);
        }
      }
    };

    containerRef.current?.addEventListener('scroll', handleScroll);
  }, [isLoading, page, containerRef]);

  if (isLoading)
    return (
      <div className="relative h-screen mb-36">
        <Navbar />
        <div className="flex justify-center items-center w-full h-screen/90">
          <svg className="animate-spin h-10 w-10 mr-3 border-4 border-r-indigo-500 rounded-full" viewBox="0 0 24 24"/>
        </div>
      </div>
    );
  if (isError) return <p>Error</p>;
  return (
    <>
      <div className="relative h-screen overflow-y-scroll mb-36" ref={containerRef}>
        <Navbar />
        <Filter />
        <div className="flex flex-row flex-wrap">
          { products?.[0] ? (
            products?.map((e: IProduct, index) => {
              return (
                <div key={`index${e.id}`} className="w-44% md:w-21.95% lg:w-15.5% relative m-3 flex flex-col overflow-hidden rounded-lg border bg-oasisGradient-antiFlashWhite shadow-md">
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
