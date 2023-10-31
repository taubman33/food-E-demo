import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <div className="nav-bar">
            <div className="nav-items-container">
                <Link to ='/' className='nav-item'>Home</Link>
                <Link to ='/drinks' className='nav-item'>Drinks</Link>
            </div>
        </div>
    )  
}

export default Nav