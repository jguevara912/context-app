import {useContext} from 'react'
import UserContext from '../context/UserContext'

function Navbar() {
    const { user, login, logout, toggleFavoritemovieToUser } = useContext(UserContext)//recibe como argumento el contexto que creamos

  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
            <span className="navbar-brand">
                <h2>{user ? `Hola ${user.name}`: 'Bienvenid@'}</h2>
            </span>
            {user
                ? <button className="btn btn-success" onClick={logout}>
                Cerrar Sesion
                </button>
                :<button className="btn btn-primary" onClick={login}>
                Iniciar Sesion
                </button>
            }
        </div>
    </nav>
  )
}

export default Navbar