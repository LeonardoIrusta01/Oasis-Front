import Image from "next/image";
import defaultIcon from "../../assets/images/Default_Food_Icon.png";
import { useGetCategoriesQuery } from "@/redux/services/categoryApi";
import { useAppDispatch } from "@/redux/hooks";
import { filterProducts } from "@/redux/features/productsReducer";
import { Category } from "@/redux/services/categoryApi";
import axios from "axios";

const Filter = () => {
  const { data, isError, isLoading } = useGetCategoriesQuery(null);

  const dispatch = useAppDispatch();

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
    const filtedProducts = (
      await axios(`http://localhost:3001/api/products?filter=${name}`)
    ).data.payload;
    dispatch(filterProducts(filtedProducts));
  };

  return (
    <div className="flex overflow-x-scroll lg:overflow-hidden py-5 hide-scroll-bar">
      <div className="flex flex-nowrap">
        {data?.payload.map((c: Category, i) => {
          return (
            <div className="inline-block px-3">
              <button onClick={(e) => handleOnClick(e, c.name)} key={i}>
                <div className="w-28 h-28 max-w-xs overflow-hidden rounded-full bg-oasisGradient-antiFlashWhite flex justify-center items-center">
                  <Image
                    src={defaultIcon}
                    alt="defaultIcon"
                    className="w-16 h-16"
                  />
                </div>
                <p className="flex justify-center font-bold pt-2">{c.name}</p>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
