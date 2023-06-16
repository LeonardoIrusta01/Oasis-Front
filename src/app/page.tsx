"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/productCard";
import ProductAddModal from "@/components/productAddModal";
import Navbar from "../components/navbar/index";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import Filter from "@/components/filter";
import Link from "next/link";
import { getProducts } from "@/redux/features/productsReducer";
import { useAppSelector } from "@/redux/hooks";
import { useAppDispatch } from "@/redux/hooks";
import { product } from "@/redux/services/productsApi";

const Home = () => {
  const dispatch = useAppDispatch();
  const [isModalShown, setIsModalShown] = useState(false);
  const products = useAppSelector((state) => state.productReducer.products);
  const { data, isError, isLoading } = useGetProductsQuery("");
  useEffect(() => {
    dispatch(getProducts(data?.payload));
  }, [data]);

  if (isLoading)
    return (
      <div className="relative h-screen">
        <Navbar />
        <div className="bg-gray-200 w-full min-h-screen flex justify-center items-center">
          <div className="flex min-h-screen w-full items-center justify-center bg-gray-200">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-oasisGradient-antiFlashWhite to-oasisGradient-seaGreen2 animate-spin">
              <div className="h-9 w-9 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    );
  if (isError) return <p>Error</p>;
  return (
    <div className="relative h-screen">
      <Navbar />
      <Filter />
      <div className="flex flex-row flex-wrap">
        {products && products[0] ? (
          products?.map((e: product) => {
            return (
              <div className="w-44% md:w-21.95% lg:w-15.5% relative m-3 flex flex-col overflow-hidden rounded-lg border bg-oasisGradient-antiFlashWhite shadow-md">
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
      </div>
    </div>
  );
};

export default Home;
