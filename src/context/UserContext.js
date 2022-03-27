import { createContext, useState } from "react";

const UserContext = createContext();

const initialUser = {
    id: 1,
    name: 'Jose',
    favoriteMovies: [1,2]
  }

const UserProvider = ({ children }) => {
  
  const [user, setUser] = useState(initialUser);

  const login = () => {
    setUser(initialUser);
  };

  const logout = () => {
    setUser(null);
  };

  const toggleFavoritemovieToUser = (movieId) => {

    const isFavorite = user.favoriteMovies.includes(movieId);
    const favoriteMovies = isFavorite ? user.favoriteMovies.filter(favMovId => favMovId !== movieId) : [...user.favoriteMovies, movieId];

    setUser({...user, favoriteMovies})
  }

  const data = { user, login, logout, toggleFavoritemovieToUser };

  return (
    <UserContext.Provider value={data}>
        {children}
    </UserContext.Provider>
  )
};

export default UserContext;
export {UserProvider}
