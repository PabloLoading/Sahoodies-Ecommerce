import './LinkedTitle.css'
import {Link} from 'react-router-dom'

const LinkedTitle=({target,title})=>{
    return (
        <li>
            <Link className='link linked-title' to={target}>{title}</Link>
        </li>
    )
}

export default LinkedTitle