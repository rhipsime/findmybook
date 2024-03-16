import React from 'react'
import { useAppcontext } from './context/Context';

const Favourites = () => {
  const {favourites, addTofavourites, removeFromfavourites} = useAppcontext();
  console.log ('added', favourites);
  const availableFavourites = (id) =>{
    const boolean = favourites.some((book) => book.id === id);
    return boolean;
    }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-4 shadow-lg items-center justify-center">
    {favourites.length > 0 ? favourites.map((book) => (
      <div key={book.id} className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
        <img
          src={book.volumeInfo.imageLinks?.thumbnail || fallback}
          alt={book.volumeInfo.title}
          className='object-scale-down w-48 h-48 cursor-pointer rounded-md transition-transform duration-500 ease-in-out transform hover:scale-110'
          onClick={() => openAmazonPage(book.volumeInfo.authors)}
          onError={(e) => {
            e.target.src = fallback;
          }}
        />
        <div className="flex justify-center">
          {
            availableFavourites(book.id) ? <button onClick={() => removeFromfavourites(book.id)}
              className="mt-2 bg-black text-white font-bold py-2 px-4 rounded">Remove from Favourites</button> :
              <button onClick={() => addTofavourites(book)}
                className="mt-2 bg-orange-500 hover:bg-blue-400 text-black font-bold py-2 px-4 rounded">
                Add to Favourites
              </button>
          }

        </div>
      </div>
      
    )):<h1 className='font-Palanquin font-bold text-center'>You have not selected any favourite books yet!</h1> }
    </div>
  )
}

export default Favourites