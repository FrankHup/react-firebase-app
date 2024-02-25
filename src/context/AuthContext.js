import {createContext, useContext} from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../Firebase';

export const AuthContext =createContext();

export const useAuth=()=>{
const context= useContext(AuthContext)
if(!context){
throw new Error('useAuth debe usarse dentro de AuthProvider')
}
return context
}
export function AuthProvider({children}){
    const signup=(email, password)=>createUserWithEmailAndPassword(auth, email, password);
    
  
    return<AuthContext.Provider value={{signup}}>
          {children}
        </AuthContext.Provider> 
}