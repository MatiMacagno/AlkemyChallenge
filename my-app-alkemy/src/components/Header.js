import { Link } from 'react-router-dom'
import logo from '../images/peliculas.png'
import '../css/Header.css'
import Buscador from '../components/Buscador'



function Header (props) {
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link to='/Listado'><img src={logo} alt="logo" width={50}/></Link>
                <ul className="navbar-nav d-flex justify-content-center align-items-center">
                    <li className="nav-item">
                        <Link className='nav-link active' to='/Listado'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link active' to='/Listado'>Listado</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link active' to='/Detalle'>Detalle</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link active' to='/Favoritos'>Favoritos ({props.favoritos.length})</Link>
                    </li>
                </ul>
            </div>
            <Buscador/>
        </div>
    </nav>
    )
}

export default Header;