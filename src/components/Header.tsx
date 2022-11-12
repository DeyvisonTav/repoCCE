import { useEffect, useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import {AiFillYoutube} from 'react-icons/ai'
import { IoLogoWhatsapp } from "react-icons/io";
export function Header() {
  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 200) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div>
      <div
        className={
          shadow
            ? "fixed w-full h-16 shadow-2xl opacity-95 z-[100] ease-in-out duration-500 bg-white flex justify-around items-center text-sm font-bold  text-zinc-600 "
            : "hidden fixed w-full h-20 z-[100]"
        }
      >
        <div>
          <h1>Transformando as vidas das pessoas através da educação.</h1>
        </div>
        <div>
          <h1 className="flex gap-2 items-center ">
            <BsFillTelephoneFill size={20} /> (81) 9.9736-0221
          </h1>
        </div>
        <div>
          <ul className="flex items-center gap-2">
            <li>
              <ImFacebook size={20} />
            </li>
            <li>
              <AiFillInstagram size={20} />
            </li>
            <li>
              <AiFillYoutube size={20} />
            </li>
            <li>
              <IoLogoWhatsapp size={20} />
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-full h-full z-[100] ">
        <ul className="flex flex-row text-center items-center justify-center text-sm font-bold  text-zinc-600 gap-5 ">
          <a>
            <li className="w-[16rem]">
              <img src="/logo.png" alt="" />
            </li>
          </a>

          <a>
            <li
              className="cursor-pointer transition-colors
            duration-500 hover:text-zinc-400"
            >
              INSTITUCIONAL
            </li>
          </a>
          <a>
            <li
              className="cursor-pointer transition-colors
            duration-500 hover:text-zinc-400"
            >
              CURSOS
            </li>
          </a>
          <a>
            <li
              className="cursor-pointer transition-colors
            duration-500 hover:text-zinc-400"
            >
              FORMAS DE ACESSO
            </li>
          </a>
          <a>
            <li
              className="cursor-pointer transition-colors
            duration-500 hover:text-zinc-400"
            >
              EVENTOS
            </li>
          </a>
          <a>
            <li
              className="cursor-pointer transition-colors
            duration-500  hover:text-zinc-400"
            >
              BLOG
            </li>
          </a>
          <a>
            <li
              className="cursor-pointer transition-colors
            duration-500 hover:text-zinc-400"
            >
              BIBLIOTECA
            </li>
          </a>
          <a>
            <li
              className="cursor-pointer transition-colors
            duration-500 hover:text-zinc-400"
            >
              CONTATO
            </li>
          </a>
          <a>
            <li
              className="cursor-pointer transition-colors
            duration-500 hover:text-zinc-400"
            >
              OUVIDORIA
            </li>
          </a>
          <a>
            <button
              className="px-4 py-3 text-white bg-[#005884] hover:bg-sky-700 transition-colors
            duration-500 rounded-md "
            >
              PORTAL ACADÊMICO/EAD
            </button>
          </a>
        </ul>
      </div>
    </div>
  );
}
