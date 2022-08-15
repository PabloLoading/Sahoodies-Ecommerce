import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import useData from '../../hooks/useData'
import { getProducts } from '../../services/firebase/firestore/products'
import BackHome from '../BackHome/BackHome'

const ItemListContainer=()=>{

    const {catId} =useParams()
    const {isLoading,data,error} = useData(getProducts,[catId],[catId])

    if(error)console.log(error)
    
    if(isLoading){
        return <p>Loading...</p>
    }
    const sale =(item)=>item.categoryId.includes('sale')

    return (
        <section className='item-list-container'>
            {data.length!=0 ?<ItemList sale={sale} items={data}/> : <BackHome msg="Ups, we don't have products for that category"/>}
        </section>
    )
}
export default ItemListContainer