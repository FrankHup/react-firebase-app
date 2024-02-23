import {createContext, useContext} from "react";

export const AuthContext =createContext();

export const useAuth=()=>{
const context= useContext(AuthContext)
if(!context){
throw new Error('useAuth debe usarse dentro de AuthProvider')
}
return context
}
export function AuthProvider({children}){
    const user = {
        login:true,
    };
    return<AuthContext.Provider value={{user}}>
          {children}
        </AuthContext.Provider> 
}