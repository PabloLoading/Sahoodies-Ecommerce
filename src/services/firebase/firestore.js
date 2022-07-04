
import { collection,getDocs,where ,query,doc,getDoc,addDoc, documentId, writeBatch} from "firebase/firestore"
import db from "."

export const getProducts =(catId)=>{
    return new Promise((res,rej)=>{

        const filtedCollection=catId
        ? query(collection(db,'products'),where('categoryId','==',catId))
        : collection(db,'products')

        getDocs(filtedCollection).then(
            response=>{
                const productos=response.docs.map(doc=>{
                    return {id: doc.id, ...doc.data()}
                })
                res(productos)
            }
        )
        .catch(e=>rej(e))
    })
}
export const getProduct=(itemId)=>{
    return new Promise ((res,rej)=>{
        getDoc(doc(db,'products',itemId))
        .then(doc=>{
                let itemBrought={id : doc.id , ...doc.data()}
                res(itemBrought)
            }
        )
        .catch(e=>rej(e))
    })
}
export const makeOrder=(order)=>{
    return new Promise((res,rej)=>{
        let collectionRef = collection(db,'orders')
        addDoc(collectionRef,order)
        .then(obj=>res(obj))
        .catch(e=>rej(e))
    })
    
}
export const getProductsInIds=ids=>{
    return new Promise((res,rej)=>{
        let collectionRef=collection(db,'products')
        getDocs(query(collectionRef,where(documentId(),'in',ids)))
        .then(response=>res(response.docs))
        .catch(e=>rej(e))
    })
}
export const getBatch=()=>{
    return writeBatch(db)
}
export const updateBatch = (batch,docRef,changes)=>{
    batch.update(docRef,changes)
}
export const commitBatch=(batch)=>{
    batch.commit()
}

