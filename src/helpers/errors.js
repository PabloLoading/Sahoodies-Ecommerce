import { toast } from "react-toastify"

export const listedErrors={
    'auth/weak-password':['warning','Password must have at least 6 characters'],
    'auth/email-already-in-use': ['warning','Email already in use'],
    'auth/wrong-password':['warning',"Password incorrect"],
    'auth/user-not-found': ['warning',"Email incorrect"],
    'accIncomplete':['warning','Account information incomplete'],
    'outStocked':['error','One or more items are out of stock']
}


export const handleError=(e)=>{
    let err = listedErrors[e.code]
    if(err){
        if(err[0]=='warning')toast.warn(err[1])
        else if(err[0]=='error')toast.error(err[1])
        else if(err[0]=='success')toast.success(err[1])
        else toast.info(err[1])
    }
    else {
        toast.error('Something went wrong :(')
        console.log(e)
    }
}
