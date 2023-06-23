import Navbar from "../navbar";
import { useState } from "react";
import arrow from "../../assets/svg/Arrow Button.svg";
import Image from "next/image";

const Faqs = () => {
  const [state, setState] = useState<string>("");

  return (
    <div className="h-screen w-sreen bg-oasisGradient-antiFlashWhite">
      <Navbar />

      <p
        className="w-full p-3 text-oasisGradient-black text-8 text-center flex justify-center font-semibold"
        style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
      >
        Preguntas Frecuentes
      </p>

      <div className="space-y-3 flex flex-col items-center">
        <button
          type="button"
          className="text-oasisGradient-white w-11/12 h-12 p-4 bg-oasisGradient-seaGreen flex justify-between items-center rounded-md"
          onClick={() => {
            if (state === "Horarios") {
              setState("");
            } else {
              setState("Horarios");
            }
          }}
        >
          Horario de Atención
          {state === "Horarios" ? (
            <Image
              className="w-6 h-6 flex rotate-180 duration-500"
              src={arrow}
              alt="arrow"
            />
          ) : (
            <Image
              className="w-6 h-6 flex duration-500"
              src={arrow}
              alt="arrow"
            />
          )}
        </button>

        {state === "Horarios" ? (
          <div className="bg-oasisGradient-white text-oasisGradient-black w-11/12 h-7/10 flex flex-col space-y-2 p-4 rounded-md">
            <span className="">- Lunes a Viernes de 10:00hs hasta 13.00hs</span>
            <span className="">- Lunes a Viernes de 18:30hs hasta 20.30hs</span>
            <span className="">- Sabados de 10:00hs hasta 13.00hs</span>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="space-y-3 flex flex-col items-center pt-4">
        <button
          type="button"
          className="text-oasisGradient-white w-11/12 h-12 p-4 bg-oasisGradient-seaGreen flex justify-between items-center rounded-md"
          onClick={() => {
            if (state === "Ubicación") {
              setState("");
            } else {
              setState("Ubicación");
            }
          }}
        >
          ¿Donde está ubicado el local?
          {state === "Ubicación" ? (
            <Image
              className="w-6 h-6 flex rotate-180 duration-500"
              src={arrow}
              alt="arrow"
            />
          ) : (
            <Image
              className="w-6 h-6 flex duration-500"
              src={arrow}
              alt="arrow"
            />
          )}
        </button>

        {state === "Ubicación" ? (
          <div className="bg-oasisGradient-white text-oasisGradient-black w-11/12 h-7/10 flex flex-col space-y-2 p-4 rounded-md">
            <span className="">
              El local está ubicado en Av.Fernando Casado 1894, barrio Santa
              Isabel.{" "}
            </span>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="space-y-3 flex flex-col items-center pt-4">
        <button
          type="button"
          className="text-oasisGradient-white w-11/12 h-14 md:h-11 p-4 bg-oasisGradient-seaGreen flex justify-between text-left items-center rounded-md"
          onClick={() => {
            if (state === "HorarioRetirar") {
              setState("");
            } else {
              setState("HorarioRetirar");
            }
          }}
        >
          ¿En qué horarios se puede retirar el pedido?
          {state === "HorarioRetirar" ? (
            <Image
              className="w-6 h-6 flex rotate-180 duration-500"
              src={arrow}
              alt="arrow"
            />
          ) : (
            <Image
              className="w-6 h-6 flex duration-500"
              src={arrow}
              alt="arrow"
            />
          )}
        </button>

        {state === "HorarioRetirar" ? (
          <div className="bg-oasisGradient-white text-oasisGradient-black w-11/12 h-7/10 flex flex-col space-y-2 p-4 rounded-md">
            <span className="">
              El pedido se lo puede retirar en los horarios del local de lunes a
              viernes 10.00-13.00hs y 18.00-20.30hs, sábados 10.00-13.0hs.{" "}
            </span>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="space-y-3 flex flex-col items-center pt-4">
        <button
          type="button"
          className="text-oasisGradient-white w-11/12 h-12 p-4 bg-oasisGradient-seaGreen flex justify-between items-center rounded-md"
          onClick={() => {
            if (state === "Retirar") {
              setState("");
            } else {
              setState("Retirar");
            }
          }}
        >
          ¿Cuando puedo retirar mi pedido?
          {state === "Retirar" ? (
            <Image
              className="w-6 h-6 flex rotate-180 duration-500"
              src={arrow}
              alt="arrow"
            />
          ) : (
            <Image
              className="w-6 h-6 flex duration-500"
              src={arrow}
              alt="arrow"
            />
          )}
        </button>

        {state === "Retirar" ? (
          <div className="bg-oasisGradient-white text-oasisGradient-black w-11/12 h-7/10 flex flex-col space-y-2 p-4 rounded-md">
            <span className="">
              Cuando el pedido esté listo nos contactaremos para avisarte y
              tendrás hasta 4 días hábiles para retirarlo, sino el pedido se
              cancela y el dinero no se rembolsa.{" "}
            </span>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="space-y-3 flex flex-col items-center pt-4">
        <button
          type="button"
          className="text-oasisGradient-white w-11/12 h-12 p-4 bg-oasisGradient-seaGreen flex justify-between items-center rounded-md"
          onClick={() => {
            if (state === "Cambio") {
              setState("");
            } else {
              setState("Cambio");
            }
          }}
        >
          ¿Puedo cambiar o devolver un producto?
          {state === "Cambio" ? (
            <Image
              className="w-6 h-6 flex rotate-180 duration-500"
              src={arrow}
              alt="arrow"
            />
          ) : (
            <Image
              className="w-6 h-6 flex duration-500"
              src={arrow}
              alt="arrow"
            />
          )}
        </button>

        {state === "Cambio" ? (
          <div className="bg-oasisGradient-white text-oasisGradient-black w-11/12 h-7/10 flex flex-col space-y-2 p-4 rounded-md">
            <span className="">
              Al tratarse de alimentos los productos no pueden devolverse porque
              no fue de su agrado o hubiese algún error al comprarlo, sin
              embargo, si el producto tiene algún defecto de fábrica o se
              encuentra en mal estado, se solicitará que lo traigan al local y
              una vez constatado se podrá realizar el cambio o la devolución del
              dinero.{" "}
            </span>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="space-y-3 flex flex-col items-center pt-4">
        <button
          type="button"
          className="text-oasisGradient-white w-11/12 p-4 bg-oasisGradient-seaGreen flex justify-between text-left items-center rounded-md"
          onClick={() => {
            if (state === "Stock") {
              setState("");
            } else {
              setState("Stock");
            }
          }}
        >
          ¿Qué pasa si el producto que solicite no se encuentra en stock al
          momento de despachar mi pedido?
          {state === "Stock" ? (
            <Image
              className="w-6 h-6 flex rotate-180 duration-500"
              src={arrow}
              alt="arrow"
            />
          ) : (
            <Image
              className="w-6 h-6 flex duration-500"
              src={arrow}
              alt="arrow"
            />
          )}
        </button>

        {state === "Stock" ? (
          <div className="bg-oasisGradient-white text-oasisGradient-black w-11/12 h-7/10 flex flex-col space-y-2 p-4 rounded-md">
            <span className="">
              Se avisará en el momento de armar el Pedido para consultar si
              puede reemplazarse por otro o si lo sacamos del pedido y hacemos
              la devolución del dinero correspondiente.{" "}
            </span>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="space-y-3 flex flex-col items-center pt-4">
        <button
          type="button"
          className="text-oasisGradient-white w-11/12 h-12 p-4 bg-oasisGradient-seaGreen flex justify-between items-center rounded-md"
          onClick={() => {
            if (state === "TarjetaCredito") {
              setState("");
            } else {
              setState("TarjetaCredito");
            }
          }}
        >
          ¿Se puede abonar con tarjeta de crédito?
          {state === "TarjetaCredito" ? (
            <Image
              className="w-6 h-6 flex rotate-180 duration-500"
              src={arrow}
              alt="arrow"
            />
          ) : (
            <Image
              className="w-6 h-6 flex duration-500"
              src={arrow}
              alt="arrow"
            />
          )}
        </button>

        {state === "TarjetaCredito" ? (
          <div className="bg-oasisGradient-white text-oasisGradient-black w-11/12 h-7/10 flex flex-col space-y-2 p-4 rounded-md">
            <span className="">
              Abonar con tarjeta de crédito en un pago tendrá un recargo del 10%
              en el total de la compra, y para compras en más pagos deberá
              verificarse la financiación que establezca Mercado pago.{" "}
            </span>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="space-y-3 flex flex-col items-center pt-4">
        <button
          type="button"
          className="text-oasisGradient-white w-11/12 h-12 p-4 bg-oasisGradient-seaGreen flex justify-between items-center rounded-md"
          onClick={() => {
            if (state === "TarjetaDebito") {
              setState("");
            } else {
              setState("TarjetaDebito");
            }
          }}
        >
          ¿Se puede abonar con tarjeta de debito?
          {state === "TarjetaDebito" ? (
            <Image
              className="w-6 h-6 flex rotate-180 duration-500"
              src={arrow}
              alt="arrow"
            />
          ) : (
            <Image
              className="w-6 h-6 flex duration-500"
              src={arrow}
              alt="arrow"
            />
          )}
        </button>

        {state === "TarjetaDebito" ? (
          <div className="bg-oasisGradient-white text-oasisGradient-black w-11/12 h-7/10 flex flex-col space-y-2 p-4 rounded-md">
            <span className="">
              Si se puede abonar con tarjeta de débito bancarizada, las tarjetas
              de débito que no pertenezcan a un banco como: Mercado pago,
              brubank, naranja x,etc tendrán un recargo del 10% en el total de
              la compra.{" "}
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Faqs;
