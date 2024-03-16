import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);

export const useAppcontext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppcontext must be used within a AppcontextProvider');
  }
  return context;
};

const AppContextProvider = ({children}) => {
  const [favourites, setFavourites] = useState([]);
  const addTofavourites = (book) => {
    const oldFavourites = [...favourites];
    const newFavourites = oldFavourites.concat(book);
    setFavourites(newFavourites);
  }
  const removeFromfavourites = (id) => {
    const oldFavourites = [...favourites];
    const newFavourites = oldFavourites.filter((book) => book.id !==id);
    setFavourites(newFavourites);
  }

  return (
    <AppContext.Provider value={{favourites,addTofavourites, removeFromfavourites}}>
      {children}
    </AppContext.Provider>
  )
}
export default AppContextProvider;
