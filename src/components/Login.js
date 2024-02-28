import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export function Login() {
  const [user, setUser] = useState({ name: "", email: "" });

  const {login, loginWithGoogle}=useAuth()
  const navigate= useNavigate()
  const [error, setError]=useState();

  const handleChange = ({target:{name, value}}) =>
    setUser({...user, [name]:value})
  

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError('')
   try {
   await login(user.email, user.password);
   navigate('/');
   } 
   catch (error) {
    // console.log(error.code);
    // if (error.code === "auth/invalid-email"){
    //   setError('Correo invalido')
  
    // }
    
    setError(error.message);
   } 
  };

  const handleGoogleSignin= async()=>{
  try {await loginWithGoogle();
  navigate("/");
  }catch (error) {
    setError(error.message)
  };
    alert("Hubo un error al iniciar sesión con Google.")
  }

  return (
   <div>
    {error && <Alert message={error} type="error" />}

     <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="pwd"
        placeholder="********"
        onChange={handleChange}
      />
      <br />
      <button>Login</button>
    </form>
    <button onClick={handleGoogleSignin}>Google  Sign In</button>
   </div>
  );
}
