import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore'

const ItemListContainer=()=>{

    const {catId} =useParams()

    const [load, setLoad] =useState(false)
    const [products,setProducts] = useState([])
    
    useEffect(()=>{
        setLoad(false)
        getProducts(catId)
        .then(products=>setProducts(products))
        .catch(e=>console.log(e))  
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