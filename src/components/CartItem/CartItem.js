import ItemCount from '../ItemCount/ItemCount'
import './CartItem.css'
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {AiFillThunderbolt} from 'react-icons/ai'

const CartItem=({item,path='/',modifyQuantity,getItemQuantity,deleteItem,numberOrdered,sale=false})=>{

    let itemQuant
    if(getItemQuantity) itemQuant=getItemQuantity(item)
    if(item.categoryId.length>4)item.categoryId.length=4
    return (
        <div className={sale? 'cart-item cart-item-sale' :"cart-item"}>
            {sale &&<div className='sale-container'>
                <p>Hot Sale</p>
                <AiFillThunderbolt/>
            </div>}
            <div className='cart-item-picture'>
                <img src={item.pictureUrl}/>
            </div>
            <div className="cart-item-info">
                <div className='shrinked'>
                    <p className='cat'>{item.categoryId.join(' ')}</p>
                    <Link className='link' to={path}>
                       <h3>{item.name}</h3>
                    </Link>
                    <p>$USD {item.price}</p>
                    {numberOrdered ? <p>Quantity: {numberOrdered}</p> :
                    <div className='cart-item-count'>
                        <ItemCount noButton={true} stock={item.stock} handleChange={quant=>modifyQuantity(item,quant)} initial={itemQuant}/>
                    </div>}
                </div>
                {!numberOrdered &&
                <div className='delete-box' onClick={()=>deleteItem(item)}>
                    <AiFillDelete size='1.5rem'/>
                </div>}
            </div>
        </div>
    )
}
export default CartItem