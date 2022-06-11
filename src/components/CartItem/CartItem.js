import ItemCount from '../ItemCount/ItemCount'
import './CartItem.css'
import { useContext ,useEffect} from 'react'
import CartContext from '../../Context/CartContext'
import {AiFillDelete} from 'react-icons/ai'

const CartItem=({item})=>{

    const value =useContext(CartContext)

    const {modifyQuantity,getItemQuantity,deleteItem}=value
    const handleChange=(quant)=>{
        modifyQuantity(item,quant);
    }
    const itemQuant=getItemQuantity(item);
    const goDelete=()=>{
        deleteItem(item)
    }
    useEffect(()=>{
    })

    return (
        <div className="cart-item">
            <div className='cart-item-picture'>
                <img src={item.pictureUrl}/>
            </div>
            <div className="cart-item-info">
                <p className='cat'>{item.categoryId}</p>
                <h3>{item.name}</h3>
                <p>$USD {item.price}</p>
                <div className='cart-item-count'>
                    <ItemCount noButton={true} stock={item.stock} handleChange={handleChange} initial={itemQuant}/>
                </div>
                <div className='delete-box' onClick={goDelete}>
                    <AiFillDelete size={'1.5rem'}/>
                </div>
            </div>
        </div>
    )
}
export default CartItem