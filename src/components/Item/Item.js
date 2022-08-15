import './Item.css'
import { Link} from 'react-router-dom'

const Item = ({id,pictureUrl,description,price,name,stock,sale})=>{

    return (
        <section className={sale? 'item sale':'item'}>
            <Link className='link' to={`/item/${id}`}>
                <div className='img-container'>
                    {!stock && <div className='item-no-stock'>
                        Out of Stock
                    </div>}
                    {sale && <div className='item-sale'>Hot Sale!</div>}
                    <img src={pictureUrl} alt={description}/>
                </div>
                <div className='text'>
                    <p className='title'>{name}</p>
                    <p className='price'>$ {price}</p>
                </div>
            </Link>
        </section>
    )
}
export default Item