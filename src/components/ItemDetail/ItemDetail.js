import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import ItemAdded from '../ItemAdded/ItemAdded'
import {useState,useContext} from 'react'
import CartContext from '../../Context/CartContext'




const ItemDetail=({item})=>{

    const {addItem,getItemQuantity}=useContext(CartContext)
    let available=item.stock-getItemQuantity(item)

    const onAdd=(count)=>{
        setItemsQuant(count)
        let obj={quantity:count,...item}
        addItem(obj)
    }
    const [itemsQuant,setItemsQuant]=useState(0) 

    return (
        <section className="item-detail">
            <div className='img-container'>
                <img src={item.pictureUrl} />
            </div>
            <div className='info-counter'>
                <div className='details'>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p className='price'>${item.price} USD</p>
                </div>
                {itemsQuant>0 ? <ItemAdded/> : <ItemCount onAdd={onAdd} stock={available}/>}
            </div>
        </section>
    )
}

export default ItemDetail