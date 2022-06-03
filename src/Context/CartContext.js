import { createContext,useState } from "react";
import ItemList from "../components/ItemList/ItemList";

const CartContext=createContext()

export const CartContextProvider=(props)=>{
    const [products,setProducts]=useState([])

    const getQuantity=()=>{
        let sum=0
        products.map(item=>sum+=item.quantity)
        return sum
    }
    const isIn=(product)=>{
        return products.some(item=>item.id==product.id)
    }
    const addItem=(item)=>{
        if(!isIn(item)){
            setProducts([...products,item])
        }
        else{
            let arr=products.slice()
            for(let product of arr){
                if(product.id==item.id){
                    product.quantity+=item.quantity
                }
            }
            setProducts(arr)
        }
        
    }
    console.log(products)
    const inValue={products,setProducts,getQuantity,addItem}
    return (
        <CartContext.Provider value={inValue}>
            {props.children}
        </CartContext.Provider>
    )

}
export default CartContext