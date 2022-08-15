import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import ItemAdded from '../ItemAdded/ItemAdded'


const ItemDetail=({item,stockAvailable,onAdd,dbStock,added,sale=false})=>{

    return (
        <div className='item-detail fitted'>
            <section className="wrapper">
                
                <div className='img-container'>
                    <img src={item.pictureUrl} />
                </div>
                <div className='pops'>
                    {!dbStock && <div className='no-stock'>OUT OF STOCK</div>}
                    {sale && <div className='item-detail-sale'>HOT SALE</div>}
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