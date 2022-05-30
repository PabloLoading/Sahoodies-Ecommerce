import './LinkedTitle.css'
import {Link} from 'react-router-dom'

const LinkedTitle=(props)=>{
    return (
        <li>
            <Link className='link' to={props.target}>{props.title}</Link>
        </li>
    )
}

export default LinkedTitle