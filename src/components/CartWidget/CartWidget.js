import {BsCart} from 'react-icons/bs'
import './CartWidget.css'
import {Link} from 'react-router-dom'

const CartWidget=(props)=>{
    return (
        <Link className='link' to='/cart'>
            <div className='CartWidget'>
                <BsCart size='1.6rem'/>
                <div className='number'>{props.itemsQuant}</div>
            </div>
        </Link>
    )
}
export default CartWidget