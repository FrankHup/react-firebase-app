//import {useContext} from 'react';
//import {context, useAuth} from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import{useAuth} from '../context/AuthContext';

export function Home(){
    const {user, logout, loading}= useAuth();
    const navigate=useNavigate();

    const handleLogout= async()=>{
    await logout();
    navigate('/login');
    };

    if (loading) return <p>Loading...</p>;
    //const {user}= useAuth()
    //console.log(user)
    return <div>
        
        <h1>Bienvenido {user.email}</h1>

        <button onClick={handleLogout}>Logout</button>
        
        </div>;
}