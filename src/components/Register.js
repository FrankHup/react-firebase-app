import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export function Register() {
  const [user, setUser] = useState({ name: "", email: "" });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      // console.log(error.code);
      // if (error.code === "auth/invalid-email"){
      //   setError('Correo invalido')

      // }
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} type="error" />}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div>
          <p className="appearance-none w-full py-6 text-xl text-black-700 text-center leading-tight font-bold">Registro de usuarios</p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus: outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="********"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus: outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-6 rounded focus:outline-none focus: shadow-outline">
          Registrar
        </button>
      </form>

      <p className="my-4 text-sm flex">
        <Link to="/login" className="hover:text-blue-500">
          Volver al inicio
        </Link>
      </p>
    </div>
  );
}
