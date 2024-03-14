
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import fallback from '../assets/fallback.png'

const BookMenu = () => {
  const [books, setBooks] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=' + term + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' + '&maxResults=40')
      .then(response => {
        setBooks(response.data.items);
      })
      .catch(error => {
        console.log('Error fetching data: ', error);
      });
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {books.map((book) => (
          <div key={book.id} className="bg-white shadow-md rounded-md p-4">
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || fallback}
              alt={book.volumeInfo.title}
              className="w-full h-48 object-cover rounded-md cursor-pointer"
              onClick={() => openAmazonPage(book.volumeInfo.authors)}
              onError={(e) => {
                e.target.src = fallback;
              }}
            />

            <div className="flex justify-center">
              <button className="mt-2 bg-orange-500 hover:bg-blue-400 text-black font-bold py-2 px-4 rounded">
                Add to Favourites
              </button>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default BookMenu;
