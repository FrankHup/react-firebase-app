import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

export function Register() {
  const [user, setUser] = useState({ name: "", email: "" });

  const {signup}=useAuth()
  const navigate= useNavigate()
  const [error, setError]=useState();

  const handleChange = ({target:{name, value}}) =>
    setUser({...user, [name]:value})
  

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError('')
   try {
   await signup(user.email, user.password);
   navigate('/');
   } 
   catch (error) {
    console.log(error.code);
    if (error.code === "auth/invalid-email"){
      setError('Correo invalido')
  
    }
    //setError(error.message);
   } 
  };


  return (
   <div>
    {error && <p>{error}</p>}

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
      <button>Register</button>
    </form>
   </div>
  );
}
