export function Header() {
  return (
    <div className=" w-full h-full z-[100] ">
      <ul
        className="flex flex-row text-center items-center justify-center text-sm font-bold 
       text-zinc-600 gap-5 "
      >
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
            duration-500 hover:text-zinc-400"
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
  );
}
