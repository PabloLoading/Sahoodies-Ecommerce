import './Item.css'
import { Link} from 'react-router-dom'

const Item = (props)=>{
    return (
        <section className='item'>
            <Link className='link' to={`/item/${props.id}`}>
                <div className='img-container'>
                    <img src={props.pictureUrl} alt={props.description}/>
                </div>
                <div className='text'>
                    <p className='title'>{props.name}</p>
                    <p className='price'>$ {props.price}</p>
                </div>
            </Link>
        </section>
    )
}
export default Item