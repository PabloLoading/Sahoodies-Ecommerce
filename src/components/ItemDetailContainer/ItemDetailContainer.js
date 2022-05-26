import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import {useState , useEffect} from 'react'
import { getItem } from '../../AsyncMock'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetailContainer=(props)=>{


    const [product,setProduct] = useState({})

    useEffect(()=>{

        getItem(1002).then(item=>{
            setProduct(item)
        })

    },[])


    return (
        <div className="item-detail-container">
            <ItemDetail item={product}/>
        </div>
    )
}
export default ItemDetailContainer