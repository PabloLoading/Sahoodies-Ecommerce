import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { getItems } from '../../AsyncMock'
import { useParams } from 'react-router-dom'

const ItemListContainer=(props)=>{

    const {catId} =useParams()

    const [load, setLoad] =useState(false)
    const [products,setProducts] = useState([])
    
    useEffect(()=>{
        setLoad(false)
        getItems().then(items=>{
            if(catId){
                items=items.filter(item=>item.categoryId==catId)
            }
            setProducts(items)
            setLoad(true)
        })
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