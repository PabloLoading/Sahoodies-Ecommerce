import './IconButton.css'

const IconButton=(promps)=>{
    
    
    let params={
        size: '1.6rem'
    }
    let icono=promps.icon(params);
    return (
        <div className="IconButton">
            {icono}
        </div>
    )
}
export default IconButton