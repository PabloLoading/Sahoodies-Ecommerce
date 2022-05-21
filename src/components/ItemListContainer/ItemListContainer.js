import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer=(promps)=>{
    return (
        <section className='item-list-container'>
            <h3>{promps.greeting}</h3>
            <ItemCount stock={5} initial={2}/>
        </section>
    )
}
export default ItemListContainer