import { createContext,useContext,useState } from "react";

const CartContext=createContext()
const useCart=()=>{
    return useContext(CartContext)
}

export const CartContextProvider=(props)=>{
    const [products,setProducts]=useState([])

    const getQuantity=()=>{
        let sum=0
        products.map(item=>sum+=item.quantity)
        return sum
    }
    
    const getSubtotal=()=>{
        let total=0;
        for(let product of products){
            total+=product.price*product.quantity
        }
        return total.toFixed(2)
    }
    const deleteItem=(item)=>{
        let arr=[]
        for(let product of products){
            if(product.id!=item.id){
                arr.push(product)
            }
        }
        setProducts(arr)
    }

    const isIn=(product)=>{
        return products.some(item=>item.id==product.id)
    }
    const getItemQuantity=(item)=>{
        for(let product of products){
            if(product.id==item.id){
                return product.quantity;
            }
        }
        return 0
    }
    const clearCart=()=>{
        setProducts([])
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
    const modifyQuantity=(item,newQuant)=>{
        let arr=products.slice()
        for(let product of arr){
            if(product.id==item.id){
                product.quantity=newQuant
            }
        }
        setProducts(arr);
    }
    
    const inValue={products,setProducts,getQuantity,addItem,modifyQuantity,
        getItemQuantity,getSubtotal,deleteItem,isIn,clearCart}
    return (
        <CartContext.Provider value={inValue}>
            {props.children}
        </CartContext.Provider>
    )

}
export default useCart