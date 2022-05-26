import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import {useState , useEffect} from 'react'
import { getItem } from '../../AsyncMock'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetailContainer=(props)=>{


    const [product,setProduct] = useState({})
    const [load,setLoad] = useState(false)

    useEffect(()=>{

        getItem(1002).then(item=>{
            setProduct(item)
            setLoad(true)
        })
        
        

    },[])

    return (
        <div className="item-detail-container">
            {load ? <ItemDetail item={product}/>: <div></div>}
        </div>
    )
}
export default ItemDetailContainer