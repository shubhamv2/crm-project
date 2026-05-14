import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {STORAGE_KEYS} from "../constants/storagekeys" 
const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);

    const register = (formData) =>{
        const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS_KEY)) || [];
        const newUser = {
            id: crypto.randomUUID(),
            name:formData.name,
            email:formData.email,
            role:formData.role || "Agent",
            company:formData.company,
            tenantId:formData.tenantId || `TENANT_${formData.company.toUpperCase().replace(/\s/g,"_")}`, 
            password:formData.password,
            createdAt: new Date().toISOString(),

        };
        const userFound = users.find(user=>user.email === newUser.email);
        if(userFound){
            throw new Error("User already exists");
        };
        users.push(newUser);
        localStorage.setItem(STORAGE_KEYS.USERS_KEY,JSON.stringify(users));
        localStorage.setItem(STORAGE_KEYS.SESSION_KEY, JSON.stringify(newUser));
        setUser(newUser);
    }

    const login = ({email,password}) =>{
        const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS_KEY)) || [];
        const userFound = users.find(user=>user.email === email && user.password === password);
        if(!userFound){
            throw new Error("Invalid user name and password");
        } 
        localStorage.setItem(STORAGE_KEYS.SESSION_KEY, JSON.stringify(userFound));
        setUser(userFound);
    }

    const logout = ()=>{
        localStorage.removeItem(STORAGE_KEYS.SESSION_KEY);
        setUser(null);
    }

    useEffect(()=>{
        const currentUser = JSON.parse(localStorage.getItem(STORAGE_KEYS.SESSION_KEY))
        setUser(currentUser);
    },[]);

    const value = useMemo(()=>{
        return {user, login, logout, register}
    },[user]);

    return(
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )


}


export const useAuthContext = () =>{
    return useContext(AuthContext);
}