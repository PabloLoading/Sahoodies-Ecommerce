import './CartEmpty.css'
import {Link} from 'react-router-dom'

const CartEmpty=()=>{
    return (
        <section className="cart-empty">
            <h2>No tienes productos en tu carrito</h2>
            <Link to='/'>
                <button>Ir a Comprar</button>
            </Link>
        </section>
        
    )
}
export default CartEmpty
