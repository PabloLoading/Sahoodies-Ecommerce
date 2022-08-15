
import {useState} from 'react'
import './ItemCount.css'
import {HiOutlinePlus} from 'react-icons/hi'
import {IoRemove} from 'react-icons/io5'

const ItemCount = ({initial,stock,handleChange,onAdd,noButton,msg})=>{
    const [count,setCount] = useState(initial || 1)
    const isStock=count<stock

    const increment = ()=>{
        if(count<stock){
            if(handleChange){
                handleChange(count+1)
            }
            setCount(count+1)
        }
    }
    const decrement = () =>{
        if(count>1){
            if(handleChange){
                handleChange(count-1)
            }
            setCount(count-1)


        }
        
    }
    const checkAndGo=()=>{
        if(count<=stock){
            onAdd(count)
        }
    }
    const alertMax=()=>{
        alert('There is no more stock')
    }

    return (
        <section className="item-count">
            <div className='counter'>
                <div className='move-count' onClick={decrement}>
                    <IoRemove size='1.5rem'/>
                </div>
                <p>{count}</p>
                <div className='move-count' onClick={isStock ? increment : alertMax}>
                    <HiOutlinePlus size='1.5rem'/>
                </div>
            </div>
            {!noButton  && <button className='addItem' onClick={checkAndGo}>{msg}</button>
}
        </section>
    )
}
export default ItemCount