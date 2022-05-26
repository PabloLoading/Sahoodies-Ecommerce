
import {useState} from 'react'
import './ItemCount.css'
import {HiOutlinePlus} from 'react-icons/hi'
import IconButton from '../IconButton/IconButton'
import {IoRemove} from 'react-icons/io5'

const ItemCount = (props)=>{
    const [count,setCount] = useState(props.initial || 0)

    const increment = ()=>{
        if(count<props.stock){
            setCount(count+1)
        }
    }
    const decrement = () =>{
        if(count>0){
            setCount(count-1)
        }
    }
    const checkAndGo=()=>{
        if(count<props.stock){
            props.onAdd(count)
        }
    }

    return (
        <section className="item-count">
            <div className='counter'>
                <div className='move-count' onClick={decrement}><IconButton icon={IoRemove}/></div>
                <p>{count}</p>
                <div className='move-count' onClick={increment}><IconButton icon={HiOutlinePlus}/></div>
            </div>
            <button className='addItem' onClick={checkAndGo}>Agregar al carrito</button>
        </section>
    )
}
export default ItemCount