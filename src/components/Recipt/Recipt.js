import './Recipt.css'

const Recipt = ({products,subtotal})=>{

    const GetLines=()=>{
        return products.map((prod)=>{
            return (
                <div className='detail-line' key={prod.id}>
                    <p className='name'>{prod.name}: </p>
                    <p className='cost'>{prod.price}*{prod.quantity} = {(prod.price*prod.quantity).toFixed(2)} USD</p>
                </div>
            )
        })
    }

    return (
        <div className='recipt'>
            <h3>Recipt</h3>
            <GetLines/>
            <div className='subtotal'>
                <p>Subtotal: {subtotal} USD</p>
            </div>
        </div>
    )
}
export default Recipt