import { collection,where ,query,doc,getDocs,getDoc,documentId} from "firebase/firestore"
import db from ".."


export const getProducts =(catId)=>{
    return new Promise((res,rej)=>{

        const filtedCollection=catId
        ? query(collection(db,'products'),where('categoryId','array-contains',catId))
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

export const getProductsInIds=ids=>{
    return new Promise((res,rej)=>{
        let collectionRef=collection(db,'products')
        getDocs(query(collectionRef,where(documentId(),'in',ids)))
        .then(response=>res(response.docs))
        .catch(e=>rej(e))
    })
}
const getCategories=async()=>{
    const products = await getProducts()
    const categories=products.map(prod=>prod.categoryId)
    const uniques =  [...new Set(categories)]
    if(uniques.length>4)uniques.length=4
    return uniques
}