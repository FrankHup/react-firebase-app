 import { useState } from "react";
 export function Login(){
   const[user, setUser]= useState({email:"", password: ""});  //estado del usuario y su función para actualizarlo
    return <div>
      
      <form>
         <input type="email" name="email" id="email"/><br/>
         <input type="password" name="password" id="password"/><br/>
      </form>
      </div>;
 }