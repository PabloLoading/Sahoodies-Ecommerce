import { Link } from "react-router-dom"
import './BackHome.css'

const BackHome=({msg="Ups, we couldn't find that page :("})=>{
    return (
        <section className="back-home">
            <h2>{msg}</h2>
            <Link to='/'>
                <button className='btn-home'>Back to Home</button>
            </Link>
        </section>
    )
}
export default BackHome