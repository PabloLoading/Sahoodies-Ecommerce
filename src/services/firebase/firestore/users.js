import db from "..";
import { doc ,getDoc,setDoc} from "firebase/firestore";

export const setUser=(uid,{name='',phone='',address='',orders=[],products=[]})=>{  
    return new Promise((res,rej)=>{
        let info={name,phone,address,orders,products}
        let docRef= doc(db,'users',uid)
        setDoc(docRef,info)
        .then(()=>res())
        .catch(e=>rej(e))
    })
}
export const getUser= (uid)=>{
    let docRef=doc(db,'users',uid)
    return new Promise((res,rej)=>{
        getDoc(docRef)
        .then(user=>res({id:user.id,...user.data()}))
        .catch(e=>rej(e))
    })
}
export const validateUserInOrder=(dbUser,orderId)=>{
    let found=dbUser.orders.find(order=>order.id==orderId)
    if(found)return true
    else return false
}

export const addOrder= async (uid,orderId,order)=>{
    let user = await getUser(uid)
    let arr= user.orders.slice()
    arr.push({id:orderId,...order})
    await setUser(uid,{...user,orders:arr})
}
export const saveProducts = async(dbUser,products)=>{
    const {name,phone,address,orders}=dbUser
    const info={name,phone,address,orders,products}
    setUser(dbUser.id,info)
    .catch(e=>console.log(e))
}