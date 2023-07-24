import React from "react";
import Link from "next/link";
import { useUserRole } from "@/hooks/useUserRole";

const DashboardComponent = () => {
  const cards = [
    { name: "Lista de productos", ref: "/dashboard/products" },
    { name: "Lista de ordenes", ref: "/dashboard/orders" },
    { name: "Crear producto", ref: "/dashboard/newProduct" },
    { name: "Lista de usuarios", ref: "/dashboard/user" },
    { name: "Lista de categorías", ref: "/dashboard/categories" },
  ];
  const { isAdmin } = useUserRole();
  return isAdmin ? (
    <div className="space-y-5 pt-5">
      {cards.map((c) => {
        return (
          <div className="flex justify-center">
            <Link className="font-sansita text-xl font-bold" href={c.ref}>
              <div className="w-96 h-32 lg:w-96 lg:h-20 bg-oasisGradient-antiFlashWhite flex justify-center items-center rounded-2xl">
                {c.name}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  ) : (
    <p> No eres administrador... </p>
  );
};

export default DashboardComponent;
