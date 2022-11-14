// icons imports:
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

export function Footer() {
  return (
   <div>
     <div className="w-full px-64 pt-10 h-[32rem] bg-gradient-to-b from-[#016292] to-[#073952] bg-no-repeat">
      <div className="flex items-center gap-20">
        <img className="" src="/logoFooter.png" alt="" />
        <p className="text-lg text-white">
          A Instituição preferida dos profissionais de saúde. Com quase duas décadas de atuação na área da Educação em Saúde.
          A Instituição CCE Cursos tem como missão dar continuidade ao projeto de transformar as vidas das pessoas através da educação.</p>
      </div>
      <div className="grid grid-cols-6 gap-5 mt-10 text-white text-xl font-light">
      <div className="">
          <strong className="text-[#FFBA00] font-bold ">INSTITUCIONAL</strong>
          <p className="mt-3 font-semibold hover:opacity-80 cursor-pointer w-20">HISTÓRIA</p>
          <p className="font-semibold hover:opacity-80 cursor-pointer w-24">PRINCÍPIOS</p>
          <p className="font-semibold hover:opacity-80 cursor-pointer w-16">EQUIPE</p>
          <p className="font-semibold hover:opacity-80 cursor-pointer w-24">ESTRUTURA</p>
          <p className="font-semibold hover:opacity-80 cursor-pointer w-24">BENEFÍCIOS</p>
          <p className="font-semibold hover:opacity-80 cursor-pointer w-24">PARCEIROS</p>
        </div>
        <div>
          <strong className="text-[#FFBA00] font-bold ">MÍDIA</strong>
          <p className="mt-3 font-semibold hover:opacity-80 cursor-pointer w-20 ">EVENTOS</p>
        </div>
        <div>
          <strong className="text-[#FFBA00] font-bold ">FORMAS DE ACESSO</strong>
          <p className="mt-3 font-semibold hover:opacity-80 cursor-pointer w-48 ">BOLSAS DE ESTUDO</p>
          <p className="font-semibold hover:opacity-80 cursor-pointer w-40">TRANSFERÊNCIA E REINTEGRAÇÃO</p>
          <p className="font-semibold hover:opacity-80 cursor-pointer w-48">INDIQUE UM AMIGO</p>
        </div>
        <div>
          <strong className="text-[#FFBA00] font-bold ">PORTAIS</strong>
          <p className="mt-3 font-semibold hover:opacity-80 cursor-pointer w-48">PORTAL ACADÊMICO</p>
          <p className="font-semibold hover:opacity-80 cursor-pointer w-32">PORTAL EAD</p>
        </div>
        <div>
          <strong className="text-[#FFBA00] font-bold ">CONTATO</strong>
          <p className="mt-3 font-semibold hover:opacity-80 cursor-pointer w-36">FALE CONOSCO</p>
          <p className="font-semibold hover:opacity-80 cursor-pointer w-48">TRABALHE CONOSCO</p>
        </div>
        <div>
          <strong className="text-[#FFBA00] font-bold ">TELEFONES</strong>
          <p className="mt-3 font-semibold hover:opacity-80 w-36 ">(81) 3325.7686</p>
          <p className="hover:opacity-80 font-semibold w-40 ">(81) 9.9736-0221</p>
        </div>
      </div>
      <div className="w-full mt-5 h-12 flex justify-center text-2xl gap-5 font-bold text-white">
        <p className="flex cursor-pointer hover:duration-300 hover:opacity-80 items-center gap-3"><ImFacebook className="w-9 h-9"/>Facebook</p>
        <p className="flex cursor-pointer hover:duration-300 hover:opacity-80 items-center gap-3"><AiFillInstagram className="w-9 h-9"/>Instragram</p>
        <p className="flex cursor-pointer hover:duration-300 hover:opacity-80 items-center gap-3"><AiFillYoutube className="w-9 h-9"/>YouTube</p>
        <p className="flex cursor-pointer hover:duration-300 hover:opacity-80 items-center gap-3"><AiFillLinkedin className="w-9 h-9"/>LinkedIn</p>
      </div>
    </div>
    <div className="w-full h-10 text-zinc-600 flex items-center pl-64 text-sm">
    CCE CURSOS 2022 © Todos os direitos reservados.
    </div>
   </div>
  )
}