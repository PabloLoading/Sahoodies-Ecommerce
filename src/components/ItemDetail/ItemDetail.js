import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail=({item})=>{
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
                <div className='counter-container'>
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </section>
    )
}

export default ItemDetail