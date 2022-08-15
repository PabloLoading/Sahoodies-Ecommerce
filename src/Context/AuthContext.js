
import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,onAuthStateChanged,
    signInWithEmailAndPassword,updatePassword,EmailAuthProvider,reauthenticateWithCredential } from "firebase/auth";
import { auth } from "../services/firebase";
import {listedErrors} from '../helpers/errors'

const AuthContext=createContext()
const useAuth=()=>{
    return useContext(AuthContext)
}

export const AuthProvider=({children})=>{
    
    const [currentUser,setCurrentUser]=useState()
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        const unsuscribe = onAuthStateChanged(auth,user=>{
            setCurrentUser(user)
            setLoading(false)
        })
        return unsuscribe;
    },[])

    const signup=  (email,pass)=>{
        return new Promise((res,rej)=>{
            createUserWithEmailAndPassword(auth,email,pass)
            .then(cred=>res(cred.user))
            .catch(e=>rej(e))
        })
            
    }
    const login=(email,pass)=>{
        return new Promise((res,rej)=>{
            signInWithEmailAndPassword(auth,email,pass)
            .then(cred=>res(cred.user))
            .catch(e=>rej(e))
        })
    }
    const signOut =()=>{
        auth.signOut()
    }
    const reauth=(user,password)=>{
        let credential = EmailAuthProvider.credential(user.email, password);
        return reauthenticateWithCredential(user,credential)
    }
    const toUpdatePass=(user,currentPass,newPass)=>{
        return new Promise((res,rej)=>{
            reauth(user,currentPass)
            .then(()=>updatePassword(user,newPass))
            .then(()=>res())
            .catch(e=>rej({...e,listedErrors}))
        }) 
    }

    const inValue={
        currentUser,
        signup,
        signOut,
        updatePassword,
        login,
        toUpdatePass
    }
    return (
        <AuthContext.Provider value={inValue}>
            {!loading && children}
        </AuthContext.Provider> 
    )
    
}



export default useAuth