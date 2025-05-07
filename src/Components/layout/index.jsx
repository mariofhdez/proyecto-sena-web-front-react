import { Link, NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext"

export default function Layout(){
    const { user, logout } = useAuth();

    const stylesMenu = {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: '16px'
    }

    return(
        <div>
            <nav className="stylesNav">
                <div style={stylesMenu}>
                <NavLink className="stylesLink" to='/employees'>Empleados</NavLink>
                <Link className="stylesLink" to='/changes'>Novedades</Link>
                <Link className="stylesLink" to='/payrolls'>Nóminas</Link>
                <Link className="stylesLink" to='/config'>Configuración</Link>
                </div>
                <div style={stylesMenu}>
                <p className="stylesLink">{user || 'Usuario'}</p>
                <button className="stylesLink" onClick={logout}>Cerrar sesión</button>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}