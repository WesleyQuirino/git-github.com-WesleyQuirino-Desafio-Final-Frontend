import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }){
    const [ data, setData ] = useState({});

    async function signIn({ email, password }){
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@RocketFoods:user", JSON.stringify(user));
            localStorage.setItem("@RocketFoods:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token });

        } catch ( error ) {
            if( error.response ){
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar!");
            }
        }
    }

    function signOut(){
        const user = localStorage.removeItem("@RocketFoods:user");
        const token = localStorage.removeItem("@RocketFoods:token");

        setData({})
    }

    useEffect(() => {
        const user = localStorage.getItem("@RocketFoods:user");
        const token = localStorage.getItem("@RocketFoods:token");
        
        if (user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({
                user: JSON.parse(user),
                token: token
            });
        }
    }, []);    

    return(
        <AuthContext.Provider value={{ 
            signIn,
            signOut,
            user: data.user 
        }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };