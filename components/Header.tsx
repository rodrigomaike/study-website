import React from "react";
import { BiMoon, BiGridAlt, BiX } from "react-icons/bi";

export default function Header() {
  return (
    <header className="bg-white text-black py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="mr-2 w-10" />
          <span>Christmas</span>
        </a>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#celebrate" className="text-gray-500">
                Celebrate
              </a>
            </li>
            <li>
              <a href="#gift" className="text-gray-500">
                Gifts
              </a>
            </li>
            <li>
              <a href="#new" className="text-gray-500">
                New
              </a>
            </li>
          </ul>
          <div className="mt-4">
            <BiX className="text-gray-500 w-6 h-6" />{" "}
            {/* Adicione a lógica para abrir/fechar o menu aqui */}
          </div>
        </div>
        <div className="flex space-x-4">
          <BiMoon className="text-gray-500 w-6 h-6" />{" "}
          {/* Adicione a função para alternar o tema aqui */}
          <BiGridAlt className="text-gray-500 w-6 h-6" />
        </div>
      </nav>
    </header>
  );
}
