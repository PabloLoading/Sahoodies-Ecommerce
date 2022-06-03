import IconButton from "../IconButton/IconButton"
import {BsCart} from 'react-icons/bs'
import './ItemAdded.css'
import {Link} from 'react-router-dom'

const ItemAdded=()=>{
    return (
        <div className="item-added">
            <div className="bye-text">
                <p>Agregado al carrito!</p>
            </div>
            <div className="item-to-cart">
                <Link className="link" to='/cart'>
                    <IconButton icon={BsCart}/>
                </Link>
            </div>
        </div>
    )
}
export default ItemAdded