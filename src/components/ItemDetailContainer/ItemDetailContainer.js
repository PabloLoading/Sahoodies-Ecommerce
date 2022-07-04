import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import {useState , useEffect} from 'react'
import { useParams } from "react-router-dom"
import { getProduct } from "../../services/firebase/firestore"

const ItemDetailContainer=()=>{

    const {itemId} = useParams()
    const [product,setProduct] = useState({})
    const [load,setLoad] = useState(false)

    useEffect(()=>{
        setLoad(false)
        getProduct(itemId)
        .then(item=>setProduct(item))
        .catch(e=>console.log(e))
        .finally(()=>setLoad(true))
        

    },[itemId])

    
    const Who=()=>{
        if(!load){
            return <p>Loading ...</p>
        }
        else if(load && product.name){
            return <ItemDetail item={product}/>
        }
        else{
            return <h2>Lo sentimos, el producto que buscabas no existe.</h2>
        }
    }
    

    return (
        <div className="item-detail-container">
            <Who />
        </div>
    )
}
export default ItemDetailContainer