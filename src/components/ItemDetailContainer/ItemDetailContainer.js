import ItemDetail from "../ItemDetail/ItemDetail"
import {useState} from 'react'
import { useParams } from "react-router-dom"
import useCart from "../../Context/CartContext"
import useData from "../../hooks/useData"
import { getProduct } from "../../services/firebase/firestore/products"
import BackHome from "../BackHome/BackHome"
import {toast} from 'react-toastify'

const ItemDetailContainer=()=>{

    const [added,setAdded]=useState(false) 
    
    const {itemId} = useParams()
    const {addItem,getItemQuantity}= useCart()
    const {data,isLoading,error} = useData(getProduct,[itemId],[itemId])
    
    if(error)console.log(error)
    if(isLoading) return <p>Loading...</p>
    

    const inCartStock=getItemQuantity(data)
    const sale = data.categoryId.includes('sale')

    const onAdd=(count)=>{
        setAdded(true)
        let obj={quantity:count,...data}
        addItem(obj)
        toast.success("Item added correctly")

    }

    return (
        <div className="item-detail-container">
            {data.name ? <ItemDetail dbStock={data.stock} sale={sale} stockAvailable={data.stock-inCartStock} added={added} onAdd={onAdd} item={data}/>
            : <BackHome msg="We couldn't find that item"/>}
        </div>
    )
}
export default ItemDetailContainer