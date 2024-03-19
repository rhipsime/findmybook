import React from 'react'
import { useAppcontext } from './context/Context';

const Favourites = () => {
  const {favourites, addTofavourites, removeFromfavourites} = useAppcontext();
  console.log ('added', favourites);
  const availableFavourites = (id) =>{
    const boolean = favourites.some((book) => book.id === id);
    return boolean;
    }
    const openAmazonUKPage = (book) => {
      const author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : '';
      let isbn = '';
      if (book.volumeInfo.industryIdentifiers) {
          for (let identifier of book.volumeInfo.industryIdentifiers) {
              if (identifier.type === 'ISBN_13' || identifier.type === 'ISBN_10') {
                  isbn = identifier.identifier;
                  break; 
              }
          }
      }
      const title = book.volumeInfo.title ? book.volumeInfo.title : '';
      const amazonUKUrl = `https://www.amazon.co.uk/${encodeURIComponent(title)}-${encodeURIComponent(author)}/dp/${encodeURIComponent(isbn)}`;
      window.open(amazonUKUrl, '_blank');
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-4 shadow-lg items-center justify-center">
    {favourites.length > 0 ? favourites.map((book) => (
      <div key={book.id} className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
        <img
          src={book.volumeInfo.imageLinks?.thumbnail || fallback}
          alt={book.volumeInfo.title}
          className='object-scale-down w-48 h-48 cursor-pointer rounded-md transition-transform duration-500 ease-in-out transform hover:scale-110'
          onClick={() => openAmazonUKPage(book)}
          onError={(e) => {
            e.target.src = fallback;
          }}
        />
        <h3 className='text-lg font-bold mt-2 font-Palanquin'>{book.volumeInfo.title}</h3>
        <p className='text-sm font-bold mt-1 font-Palanquin'>By: {book.volumeInfo.authors?.join(', ')}</p>
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