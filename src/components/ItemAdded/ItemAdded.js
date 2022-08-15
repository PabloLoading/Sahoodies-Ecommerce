import {BsCart} from 'react-icons/bs'
import './ItemAdded.css'
import {Link} from 'react-router-dom'

const ItemAdded=()=>{
    return (
        <div className="item-added">
            <div className="bye-text">
                <p>Added to Cart!</p>
            </div>
            <div className="item-to-cart">
                <Link className="link" to='/cart'>
                    <BsCart size='1.5rem'/>
                </Link>
            </div>
        </div>
    )
}
export default ItemAdded