//import {useContext} from 'react';
//import {context, useAuth} from '../context/AuthContext';
import{useAuth} from '../context/AuthContext';

export function Home(){
    const {user, logout, loading}= useAuth();
   

    const handleLogout= async()=>{
    await logout();
 
    };

    if (loading) return <p>Loading...</p>;
    //const {user}= useAuth()
    //console.log(user)
    return <div>
        
        <h1>Bienvenido {user.email}</h1>

        <button onClick={handleLogout}>Logout</button>
        
        </div>;
}