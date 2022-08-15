import { collection,addDoc, writeBatch,doc,getDoc} from "firebase/firestore"
import db from ".."
import { addOrder } from "./users"
import { getProductsInIds } from "./products"

export const newOrder=(order)=>{
    return new Promise((res,rej)=>{
        let collectionRef = collection(db,'orders')
        addDoc(collectionRef,order)
        .then(order=>res(order))
        .catch(e=>rej(e))
    })
}

const lookStocked= async(products,batch)=>{
    const ids=products.map(prod=>prod.id)
    let dbItems= await getProductsInIds(ids)
    let outStocked=[]

    return new Promise((res,rej)=>{
        for(let dbItem of dbItems){
            let prodQuant=products.find(prod=>prod.id==dbItem.id)?.quantity || 0
            if(dbItem.data().stock>=prodQuant){
                let newStock=dbItem.data().stock - prodQuant
                batch.update(dbItem.ref,{stock: newStock})
            }
            else outStocked.push(dbItem)   
        }
        if(outStocked.length==0)res()
        else rej({code:'outStocked'})
    })

}
export const getOrder=(id)=>{
    return new Promise ((res,rej)=>{
        getDoc(doc(db,'orders',id))
        .then(doc=>{
                let orderBrought={id : doc.id , ...doc.data()}
                res(orderBrought)
            }
        )
        .catch(e=>rej(e))
    })
}


const hasCredentials=(user)=>{
    return new Promise((res,rej)=>{
        if(user.address!=='' && user.phone!=='' && user.name!==''){
            res()
        }
        else rej({code:'accIncomplete'})
    })
}

export const makeOrder=async(products,currentUser,order,dbUser)=>{
    let uid=currentUser.uid
    return new Promise((res,rej)=>{
        let batch=writeBatch(db)
        hasCredentials(dbUser)
        .then(()=>lookStocked(products,batch))
        .then(()=>newOrder(order))
        .then((ord)=>addOrder(uid,ord.id,order))
        .then(()=>batch.commit())
        .then(()=>res())
        .catch(e=>rej(e))
    })
}

