import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useState } from 'react'
import { useEffect } from 'react'
import getItems from '../../AsyncMock'

const ItemListContainer=(props)=>{

    const [products,setProducts] = useState([])
    
    useEffect(()=>{
        
        getItems().then(items=>{
            setProducts(items)
        })
    },[])

    return (
        <section className='item-list-container'>
            <ItemList items={products}/>
        </section>
    )
}
export default ItemListContainer