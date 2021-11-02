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
                    <NavLink to="/leer" exact>Articulos</NavLink>
                </li>
                <li>
                    <NavLink to="" exact>Acervo IESJRE</NavLink>
                </li>
                <li>
                    <h5>Libros escolares</h5>
                </li>
                <li>
                    <NavLink to="/rer" exact>Primaria</NavLink>
                </li>
                <li>
                    <NavLink to="" exact>Secundaria</NavLink>
                </li>
                <li>
                    <NavLink to=""exact>Medio Superior</NavLink>
                </li>
                <li>
                    <NavLink to=""exact>Superior</NavLink>
                </li>
                <li>
                    <h5>Ayuda</h5>
                </li>
                <li>
                    <NavLink to="/rer"exact>¿Como iniciar sesión?</NavLink>
                </li>
                <li>
                    <NavLink to=""exact>¿Como aportar al proyecto?</NavLink>
                </li>
                <li>
                    <NavLink to=""exact>¿Con que servicios cuenta la biblioteca?</NavLink>
                </li>
                <li>
                    <h5>Acerca de</h5>
                </li>
                <li>
                    <NavLink to="/rer"exact>Biblioteca digtal IESJRE</NavLink>
                </li>
                <li>
                    <NavLink to=""exact>Proyecto descentralizado</NavLink>
                </li>
                <li>
                    <NavLink to=""exact>Colaboradores</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu;