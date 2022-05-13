import LinkedTitle from '../LinkedTitle/LinkedTitle';
import './NavBar.css'

function NavBar(){
    return (
        <div className='NavBar'>
            <nav>
                <div className='left-wrapper'>
                    <h1>Sahoodies</h1>
                    <ul>
                        <LinkedTitle target='#' title='Chicos'/>
                        <LinkedTitle target='#' title='Chicas'/>
                        <LinkedTitle target='#' title='Ofertas'/>
                    </ul>
                </div>
                <ul className='icons-lists'>
                    <LinkedTitle target='#' title='Login'/>
                </ul>
            </nav>
        </div>
        )
}
export default NavBar;