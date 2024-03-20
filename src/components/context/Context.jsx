import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);

export const useAppcontext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppcontext must be used within a AppcontextProvider');
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
    if (storedFavourites) {
      setFavourites(storedFavourites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addTofavourites = (book) => {
    setFavourites((prevFavourites) => [...prevFavourites, book]);
  };

  const removeFromfavourites = (id) => {
    setFavourites((prevFavourites) => prevFavourites.filter((book) => book.id !== id));
  };

  return (
    <AppContext.Provider value={{ favourites, addTofavourites, removeFromfavourites }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

