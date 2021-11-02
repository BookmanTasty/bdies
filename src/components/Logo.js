import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-bdies.png'

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/">
            <img src={logo} width="80px" height="80px" alt="Logo" />
            </Link>
            <Link to="/">
            <div>
                <p>Biblioteca Digital</p>
                <h4>IESJRE</h4>
            </div>
            </Link>
        </div>
    )
}

export default Logo;