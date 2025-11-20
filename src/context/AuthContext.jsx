import { createContext , useEffect, useState, useContext} from "react";
import  supabase from "../api/supabase";
// import { supabase } from "@supabase/auth-ui-shared";

const AuthContext = createContext();

export const  AuthContextProvider = ({children}) => {
    const [session,setSession] = useState(null)

    const signUpNewUser = async (email, firstname, famillyname, birthdate, number, password) => {
        const {data,error} = await supabase.auth.signUp({
            email: email,
            password : password,
            options: {
                    data: { // ✅ Metadata should be in options.data
                        firstname: firstname,
                        famillyname: famillyname,
                        birthdate: birthdate,
                        number: number,
                    }
                }
        })
        if(error){
            console.log(`Problem Signing up : ${error}`)
            return {success : false}
        }
        return {
            success:true,
            data
        }
    }

    const signInUser = async ({email, password}) => {
        try {
            const {data, error} = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if(error){
                console.error("sign in error occurred : ", error);
                return {success :false, error: error.message};
            }
            return{success:true , data}

        }catch{
            console.error("an error occurred : ", error)
        }
    }

    useEffect(()=>{
        supabase.auth.getSession().then(({data : {session}})=>{
            setSession(session);
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.log("sign Out error :", error)
        }
    }

    return(
        <AuthContext.Provider value={{session, signUpNewUser, signInUser, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}
export const UserAuth = () => {
    return useContext(AuthContext);
}