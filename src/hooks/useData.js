import { useEffect, useState } from "react"

const useData=(asyncFn,dep=[],params=[])=>{
    const [isLoading,setIsLoading]=useState(true)
    const [data,setData]=useState()
    const [error,setError]=useState()

    useEffect(()=>{
        setIsLoading(true)
        asyncFn(...params)
        .then(dat=>setData(dat))
        .catch(e=>setError(e))
        .finally(()=>setIsLoading(false))
    },dep)

    return {
        isLoading,
        data,
        error
    }

}
export default useData