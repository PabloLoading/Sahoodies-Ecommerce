import './Item.css'

const Item = (props)=>{
    return (
        <section className='item'>
            <div className='img-container'>
                <img src={props.pictureUrl}/>
            </div>
            <div className='text'>
                <p className='title'>{props.name}</p>
                <p className='price'>$ {props.price}</p>
            </div>
        </section>
    )
}
export default Item