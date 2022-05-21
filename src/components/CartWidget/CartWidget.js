import {BsCart} from 'react-icons/bs'
import IconButton from '../IconButton/IconButton'
import './CartWidget.css'

const CartWidget=()=>{
    return (
        <div className='CartWidget'>
            <BsCart size='1.6rem'/>
            <div className='number'><p>4</p></div>
        </div>
    )
}
export default CartWidget