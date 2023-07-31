import Link from "next/link";
import { LegacyRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Image from "next/image";
import Log_Out_Icon from "../../assets/images/Log_Out_Icon.png";
import { useUserRole } from "@/hooks/useUserRole";

const PopUpUser: React.FC<{ popUpElement: LegacyRef<HTMLDivElement> }> = ({
  popUpElement,
}) => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const { isAdmin, isUser } = useUserRole();

  return (
    <div
      className="absolute right-0 top-16 bg-oasisGradient-white text-base z-50 list-none divide-y rounded px-2 shadow my-4"
      ref={popUpElement}
    >
      {!isUser ? (
        <ul className="py-2" aria-labelledby="dropdown">
          <li>
            <button
              onClick={() => loginWithRedirect()}
              className="text-sm bg-oasisGradient-antiFlashWhite hover:bg-gray-100 text-oasisGradient-black block px-4 py-2"
            >
              Iniciar Sesión
            </button>
          </li>
        </ul>
      ) : (
        <>
          <ul className="py-2" aria-labelledby="dropdown">
            <li className="pb-2">
              <Link
                href={"/profile"}
                className="text-sm bg-oasisGradient-antiFlashWhite hover:bg-gray-100 text-oasisGradient-black rounded-md block text-center px-4 py-2"
              >
                Profile
              </Link>
            </li>
            {isAdmin && (
              <li>
                <Link
                  className="text-sm bg-oasisGradient-antiFlashWhite hover:bg-gray-100 text-oasisGradient-black rounded-md block text-center px-4 py-2"
                  href={"/dashboard"}
                >
                  Panel de administrador
                </Link>
              </li>
            )}
          </ul>
          <div className="py-4">
            <button
              onClick={() => {
                logout();
              }}
              className="text-oasisGradient-white bg-oasisGradient-seaGreen2 w-52 h-16 flex rounded-md flex-col justify-center items-center py-2"
            >
              <Image
                src={Log_Out_Icon}
                alt="logOutIcon"
                className="w-6 h-6 flex justify-center"
              />
              Cerrar Sesión
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PopUpUser;
