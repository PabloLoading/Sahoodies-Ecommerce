import {BsCart} from 'react-icons/bs'
import IconButton from '../IconButton/IconButton'
import './CartWidget.css'

const CartWidget=()=>{
    return (
        <div className='CartWidget'>
            <BsCart size='1.6rem'/>
            <p>4</p>
        </div>
    )
}
export default CartWidget