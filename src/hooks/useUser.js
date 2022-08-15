import { useEffect,useState } from "react"
import useAuth from "../Context/AuthContext"
import { getUser } from "../services/firebase/firestore/users"


const useUser=()=>{
    const {currentUser} = useAuth()

    const [dbUser,setDbUser]=useState()
    const [error,setError]=useState()
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        if(currentUser){
            getUser(currentUser.uid)
            .then(user=>setDbUser(user))
            .catch(e=>setError(e))
            .finally(()=>setIsLoading(false))
            
        }
    },[currentUser])

    return {
        dbUser,
        currentUser,
        error,
        isLoading
    }

}
export default useUser