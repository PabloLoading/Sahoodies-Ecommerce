import Item from '../Item/Item.js'
import './ItemList.css'

const ItemList =(props)=>{
    return (
        <section className='item-list'>
            {props.items.map(item=><Item key={item.id} {...item}/>)}
        </section>
    )
}
export default ItemList