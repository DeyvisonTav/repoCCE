import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000, easing: "ease-out" });
  });
  return (
    <div
      data-aos="fade-left"
      className="w-full h-[49.1rem] mt-36 bg-degradeCCE bg-cover "
      id="main"
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="absolute flex flex-col items-center justify-center space-y-10 pl-[60rem] w-[95rem]"
      >
        <h1 className=" text-[#0075BB] font-bold text-2xl pr-20">
          Motivos para escolher o CCE
        </h1>
        <div className="flex flex-col justify-center  rounded-2xl shadow-2xl shadow-zinc-600  text-zinc-600  font-bold mr-9 p-10 items-center bg-white opacity-90 space-y-10">
          <div>
            <h1 className=" text-[#0075BB] font-bold text-2xl">
              Clube Card - seu Cartão de Benefícios
            </h1>
            <span>
              Um clube de benefícios que oferece ao aluno vantagens em produtos
              e serviços oferecidos pelas empresas parceiras.
            </span>
          </div>
          <div>
            <h1 className=" text-[#0075BB] font-bold text-2xl">
              Tradição 19 Anos
            </h1>
            <span>
              Atuamos há 19 anos no estado de Pernambuco e somos a instituição
              preferida dos profissionais da saúde.
            </span>
          </div>
          <div>
            <h1 className=" text-[#0075BB] font-bold text-2xl">
              Descontos e Benefícios
            </h1>
            <span>
              Programa de bolsas de estudo e descontos especiais para realizar
              sua pós-graduação com sucesso
            </span>
          </div>
          <div>
            <h1 className=" text-[#0075BB] font-bold text-2xl">
              Infraestrutura
            </h1>
            <span>
              As salas de aula, de microscopia e o laboratório são perfeitamente
              equipados.o
            </span>
          </div>
        </div>
      </div>
      <div className="relative">
        <img className="w-[56rem] ml-[15rem]" src="/medico.png" alt="" />
      </div>
    </div>
  );
}
