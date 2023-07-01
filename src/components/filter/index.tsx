import Image from "next/image";
import defaultIcon from "../../assets/images/Default_Food_Icon.png";
import { useGetCategoriesQuery } from "@/redux/services/category/categoryApi";
import { useAppDispatch } from "@/redux/hooks";
import { filterProducts } from "@/redux/features/productsReducer";
import { Category } from "@/redux/services/category/categoryApi";
import axios from "axios";
import { useState } from "react";

const Filter = () => {
  const { data, isError, isLoading } = useGetCategoriesQuery(null);

  const dispatch = useAppDispatch();

  const [active, setActive] = useState<string>("");

  if (isError) {
    return <p>Error</p>;
  }

  if (isLoading) {
    return <p>loading</p>;
  }

  const handleOnClick = async (
    e: React.MouseEvent<HTMLButtonElement>,
    name: string
  ) => {
    e.preventDefault();
    setActive(name);
    const filtedProducts = (
      await axios(`http://localhost:3001/api/products?filter=${name}`)
    ).data.payload;
    dispatch(filterProducts(filtedProducts));
  };

  return (
    <div className="flex overflow-x-scroll py-5">
      <div className="flex flex-nowrap">
        {data?.payload.map((c: Category, i) => {
          return (
            <div key={i} className="inline-block px-3">
              <button onClick={(e) => handleOnClick(e, c.name)}>
                <div
                  className={`w-28 h-28 max-w-xs overflow-hidden rounded-full bg-oasisGradient-antiFlashWhite flex justify-center items-center border-4 ${
                    active === c.name ? "border-x-oasisGradient-seaGreen" : ""
                  }`}
                >
                  <Image
                    src={defaultIcon}
                    alt="defaultIcon"
                    className="w-16 h-16"
                  />
                </div>
                <p className="flex justify-center font-bold pt-2 capitalize">{c.name}</p>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
