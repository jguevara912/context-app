import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Movie(props) {

  const {user, toggleFavoritemovieToUser} = useContext(UserContext)

  const imgStyles = {
    height: '260px',
    objectFit: 'cover'
  }

  const isFavorite = user?.favoriteMovies?.includes(props.movie.id)

  return (
    <div className="card">
        <img 
          style={imgStyles}
          src={props.movie.imageUrl} 
          alt={props.movie.title} 
          className="card-img-top"/>
        <div className="card-body">
            <h4>{props.movie.title}</h4>
            {user?.id &&
              <button className={`btn ${isFavorite ? 'btn-success' : 'btn-outline-primary'}`}
              onClick={()=> toggleFavoritemovieToUser(props.movie.id)}>
                  Favorito
              </button>
            }
        </div>
    </div>
  )
}

export default Movie