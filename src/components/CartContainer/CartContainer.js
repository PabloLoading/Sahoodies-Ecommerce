import './CartContainer.css'
import {useContext} from 'react'
import CartContext from '../../Context/CartContext';
import CartItem from '../CartItem/CartItem'
import OrderTemplate from '../OrderTemplate/OrderTemplate';

const CartContainer = ()=>{

    
    const {products,clearCart}=useContext(CartContext)
    return (
        <div className='cart-container'>

            <h2>Mis productos: </h2>
            <div className='cart-content'>
                <section>
                    {products.map(prod=><CartItem key={prod.id} item={prod}/>)}
                </section>
                <OrderTemplate clear={clearCart}/>
            </div>
        </div>
    )
}

export default CartContainer