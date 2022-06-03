import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import {useState , useEffect} from 'react'
import { getItem } from '../../AsyncMock'
import { useParams } from "react-router-dom"


const ItemDetailContainer=(props)=>{

    const {itemId} = useParams()
    const [product,setProduct] = useState({})
    const [exist,setExist] = useState(true)
    const [load,setLoad] = useState(false)

    useEffect(()=>{

        getItem(itemId).then(item=>{
            setProduct(item)
        })
        .catch(e=>setExist(false))
        .finally(()=>setLoad(true))
        
        

    },[itemId,exist])


    const onAdd=(count)=>{
        console.log(`Agregue al carrito ${count} unidades`)
    }
    const Who=()=>{
        if(!load){
            return <p>Loading ...</p>
        }
        else if(load && exist){
            return <ItemDetail onAdd={onAdd} item={product}/>
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