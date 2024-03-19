import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

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
    if (localStorage.getItem ("favourites")=== null) 
    // We want to check on page load the items that are in local storage under favourites key. 
    // If there is something in local storage we want to set it to favourites. If there is nothing - we want it to set to the empty array. 
    setFavourites([]);

    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addTofavourites = (book) => {
    console.log(book)
    setFavourites([...favourites, book])

    localStorage.setItem("favourites", JSON.stringify(favourites));

  }
  const removeFromfavourites = (id) => {
    const oldFavourites = [...favourites];
    const newFavourites = oldFavourites.filter((book) => book.id !== id);
    setFavourites(newFavourites);
  }

  return (
    <AppContext.Provider value={{ favourites, addTofavourites, removeFromfavourites }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;
