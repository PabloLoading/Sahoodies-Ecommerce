import './IconButton.css'

const IconButton=(props)=>{
    
    
    let params={
        size: '1.6rem'
    }
    let icono=props.icon(params);



    return (
        <div className="IconButton">
            {icono}
        </div>
    )
}
export default IconButton