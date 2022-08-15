import Item from '../Item/Item.js'
import './ItemList.css'

const ItemList =({items=[],sale})=>{
    return (
        <section className='item-list'>
            {items.map(item=><Item sale={sale(item)} key={item.id} {...item}/>)}
        </section>
    )
}
export default ItemList