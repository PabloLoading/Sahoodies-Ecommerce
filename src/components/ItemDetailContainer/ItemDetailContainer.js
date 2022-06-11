import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import {useState , useEffect} from 'react'
import { useParams } from "react-router-dom"
import db from "../../services/firebase"
import { getDoc,doc } from "firebase/firestore"

const ItemDetailContainer=()=>{

    const {itemId} = useParams()
    const [product,setProduct] = useState({})
    const [load,setLoad] = useState(false)

    useEffect(()=>{

        getDoc(doc(db,'products',itemId)).then(
            doc=>{
                let itemBrought={id : doc.id , ...doc.data()}
                setProduct(itemBrought)
            }
        ).catch(e=>console.log(e))
        .finally(()=>setLoad(true))
        

    },[itemId])

    const onAdd=(count)=>{
        console.log(`Agregue al carrito ${count} unidades`)
    }
    const Who=()=>{
        if(!load){
            return <p>Loading ...</p>
        }
        else if(load && product.name){
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