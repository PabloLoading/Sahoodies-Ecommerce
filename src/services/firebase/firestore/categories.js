import { collection,getDocs } from "firebase/firestore"
import db from ".."
import { getProducts } from "./products"

export const getCategories=()=>{
    return new Promise((res,rej)=>{
        let categories=[]
        const theCollection=collection(db,'categories')
        getDocs(theCollection)
        .then(response=>{
            categories=response.docs.map(doc=>{
                return {id: doc.id, ...doc.data()}
            })
            return getProducts()
        })
        .then(products=>{
            const sortedCats=popularitySort(categories,products)
            res(sortedCats)
        })
        .catch(e=>rej(e))
    })
}

export const popularitySort=(categories,products)=>{
    let newCategories=categories.map(cat=>{
        return {...cat,popularity:0}
    })
    for(let product of products){
        let catNames=product.categoryId
        for(let catName of catNames){
             let cat = newCategories.find(cat=>cat.name==catName)
             if(cat)cat.popularity++ 
        }
    }
    newCategories.sort((a,b)=>b.popularity-a.popularity)
    return newCategories
}