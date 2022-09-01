import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import ItemAdded from '../ItemAdded/ItemAdded'
import { AiFillThunderbolt } from 'react-icons/ai'


const ItemDetail=({item,stockAvailable,onAdd,dbStock,added,sale=false})=>{

    return (
        <div className='item-detail fitted'>
            <section className="wrapper">
                
                <div className='img-container'>
                    <img src={item.pictureUrl} />
                </div>
                <div className='pops'>
                    {!dbStock && <div className='no-stock'>Out of Stock</div>}
                    {sale && 
                    <div className='sale-container-detail'>
                        <p>Hot Sale</p>
                        <AiFillThunderbolt/>
                    </div>}
                </div>
                
                <div className='info-counter'>
                
                    <div className='details'>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p className='price'>${item.price} USD</p>
                    </div>
                    
                    {dbStock!=0 &&  (added || !stockAvailable ? <ItemAdded/> : <ItemCount msg='Add to Cart' onAdd={onAdd} stock={stockAvailable}/>)}
                </div>
            </section>
        </div>
    )
}

export default ItemDetail