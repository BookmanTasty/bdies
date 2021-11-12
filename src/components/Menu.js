import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';

const Menu = () => {
    return (
        <div className="menu">
            <Logo />
            <ul>
                <li>
                    <h5>Medios digitales</h5>
                </li>
                <li>
                    <NavLink to="/libros/portada" exact className="" activeClassName="active">Libros</NavLink>
                </li>
                <li>
                    <NavLink to="/articulos" exact>Articulos</NavLink>
                </li>
                <li>
                    <NavLink to="/acervo" exact>Acervo IESJRE</NavLink>
                </li>
                <li>
                    <h5>Libros escolares</h5>
                </li>
                <li>
                    <NavLink to="/escolares/portada" exact>Primaria</NavLink>
                </li>
                <li>
                    <NavLink to="/escolares/portada" exact>Secundaria</NavLink>
                </li>
                <li>
                    <NavLink to="/escolares/portada"exact>Medio Superior</NavLink>
                </li>
                <li>
                    <NavLink to="/escolares/portada"exact>Superior</NavLink>
                </li>
                <li>
                    <h5>Ayuda</h5>
                </li>
                <li>
                    <NavLink to="/ayuda"exact>¿Como iniciar sesión?</NavLink>
                </li>
                <li>
                    <NavLink to="/ayuda"exact>¿Como aportar al proyecto?</NavLink>
                </li>
                <li>
                    <NavLink to="/ayuda"exact>¿Con que servicios cuenta la biblioteca?</NavLink>
                </li>
                <li>
                    <h5>Acerca de</h5>
                </li>
                <li>
                    <NavLink to="/"exact>Biblioteca digtal IESJRE</NavLink>
                </li>
                <li>
                    <NavLink to="/roadmap"exact>Proyecto descentralizado</NavLink>
                </li>
                <li>
                    <NavLink to="/colaboradores"exact>Colaboradores</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu;