import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import ItemAdded from '../ItemAdded/ItemAdded'
import {useState} from 'react'



const ItemDetail=({item})=>{

    const onAdd=(count)=>{
        setItemsQuant(count)
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
                {itemsQuant>0 ? <ItemAdded/> : <ItemCount onAdd={onAdd} stock={item.stock}/>}
            </div>
        </section>
    )
}

export default ItemDetail