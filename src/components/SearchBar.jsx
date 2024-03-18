import React from 'react';



const SearchBar = () => {
  return (
    <div className="flex justify-left">
      <input className="py-4 px-40 rounded-l-lg border-t mr-0 border-l text-gray-800 border-white-200 bg-white"
        type="text"
        placeholder="Search books..."
        onChange={(e) => setTerm(e.target.value)}
        />
      <button className="px-4 rounded-r-lg bg-[#ea580c] text-white font-bold py-2 border-white-700">Find It</button>
      
    </div>
  );
};

export default SearchBar;