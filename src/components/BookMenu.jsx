
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import fallback from '../assets/fallback.png'
import { useAppcontext } from './context/Context';

const BookMenu = () => {
  const [books, setBooks] = useState([]);
  const [term, setTerm] = useState('');
  const {favourites, addTofavourites, removeFromfavourites} = useAppcontext();
  console.log ('added', favourites);
  const availableFavourites = (id) =>{
    const boolean = favourites.some((book) => book.id === id);
    return boolean;
    }
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + term + '&key=AIzaSyDaJaU2_8QkMUfXJuAnrBOz_O5N8D_hvw4' + '&maxResults=40')
        setBooks(response.data.items);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchBooks();
  }, [term]);

  const openAmazonPage = (bookauthors) => {
    const amazonUrl = `https://www.amazon.co.uk/${bookauthors}`;
    window.open(amazonUrl, '_blank');
  };

    return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search books..."
        onChange={(e) => setTerm(e.target.value)}
        className="w-full p-2 border-4 border-orange-500 rounded-md"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-4 shadow-lg">
        {books.map((book) => (
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
        ))}
      </div>
    </div>
  );
};
export default BookMenu;
