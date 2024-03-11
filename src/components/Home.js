//import {useContext} from 'react';
//import {context, useAuth} from '../context/AuthContext';
import { useAuth } from "../context/AuthContext";

export function Home() {
  const { user, logout, loading } = useAuth();
  console.log(user);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      alert("Error al cerrar sesión");
      console.error(error);
    }
  };

  if (loading) return <p>Cargando...</p>;
  //const {user}= useAuth()
  //console.log(user)
  return (
    <nav className="nav flex flex-wrap items-center justify-between bg-gray-800 px-20">
      <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest ">
        <span className="font-semibold text-xl tracking-tight text-white">
          <h1>Bienvenido {user.displayName || user.email}</h1>
        </span>
      </div>
      <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label
        class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
        for="menu-btn"
      >
        <span class="navicon bg-grey-darkest flex items-center relative"></span>
      </label>
      <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
    <li class="border-t md:border-none">
      <a href="/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold text-white ">Home</a>
    </li>
    <li class="border-t md:border-none">
      <a href="/about/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker text-white ">Nosotros</a>
    </li>
    <li class="border-t md:border-none">
      <a href="/blog/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker text-white ">Servicios</a>
    </li>
    <li class="border-t md:border-none">
      <a href="/blog/" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker text-white ">Contacto</a>
    </li>
  </ul>
      <button
        onClick={handleLogout}
        className="font-semibold text-xl tracking-tight text-white"
      >
        Cerrar Sesión
      </button>
    </nav>
  );
}
