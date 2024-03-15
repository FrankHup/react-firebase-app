//import {useContext} from 'react';
//import {context, useAuth} from '../context/AuthContext';
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  BeakerIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export function Home() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Servicio", link: "/" },
    { name: "Acerca de", link: "/" },
    { name: "Contacto", link: "/" },
  ];

  let [isOpen, setIsOpen] = useState(true);
  

  const { user, logout, Cargando } = useAuth();
  console.log(user);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      alert("Error al cerrar sesión");
      console.error(error);
    }
  };

  if (Cargando) return <p>Cargando...</p>;
  //const {user}= useAuth()
  //console.log(user)

  return (
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="md:px-10 py-4 px-7 bg-slate-700 md:flex justify-between items-center">
        <div className="flex">
          <BeakerIcon className="w-7 h-7 text-white  " />
          <div className="font-bold text-white content-between  md:ml-8">
            <span>Bienvenido {user.displayName || user.email}</span>
          </div>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {
          isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />
          }
        </div>
        <ul className={`md:flex pl-9 md:pl-0 text-white md:items-center md: items-baseline md:pb-0 pb-12 absolute md:z-auto z-[-1] left-0 transition-all duration-500 ease-in ${isOpen ? 'top-16 md:right-0' : 'top-full md:top-auto md:relative hidden md:block'}`}>
          {Links.map((link) => (
            <li className="font-semibold my-7  md:ml-8 hover:text-gray-500">
              <a href="/">{link.name}</a>
            </li>
          ))}
          <button
            onClick={handleLogout}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3  md:ml-8 rounded"
          >
            Cerrar Sesión
          </button>
        </ul>
      </div>
      <div><h1>Hola mundo</h1></div>
    </div>
   
  );
}
