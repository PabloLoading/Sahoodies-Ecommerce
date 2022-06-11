import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getDocs,collection, query,where} from 'firebase/firestore'
import db from '../../services/firebase'

const ItemListContainer=()=>{

    const {catId} =useParams()

    const [load, setLoad] =useState(false)
    const [products,setProducts] = useState([])
    
    useEffect(()=>{
        setLoad(false)
        const filtedCollection=catId
        ? query(collection(db,'products'),where('categoryId','==',catId))
        : collection(db,'products')

        getDocs(filtedCollection).then(
            response=>{
                const productos=response.docs.map(doc=>{
                    return {id: doc.id, ...doc.data()}
                })
                setProducts(productos)
            }
        ).catch(e=>console.log(e))  
        .finally(()=>setLoad(true))
        
    },[catId])
    
    const noItems =()=>{
        if(load && products.length==0){
            return <h2>Lo sentimos, no tenemos productos para esa categoria.</h2>
        }
    }
    return (
        <section className='item-list-container'>
            {load ? <ItemList items={products}/>: <p>Loading ...</p>}
            {noItems()}
        </section>
    )
}
export default ItemListContainer