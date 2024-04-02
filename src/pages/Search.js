import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Search() {
  const [showItems, setShowItems] = useState(false);

  const handleInputClick = () => {
    setShowItems(true);
  };

  const handleBlur = () => {
    setShowItems(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="border text-sm rounded-sm w-[20%] h-8 p-2.5 pl-10 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black"
        onClick={handleInputClick}
        onBlur={handleBlur}
      />
      <div className="absolute left-3 top-2 text-gray-500 pointer-events-none">
        <IoIosSearch />
      </div>
      {showItems && (
        <div className="absolute left-0 mt-1 w-[20%] max-h-40 bg-white border  shadow overflow-y-auto">
          <div className="p-2"><Link to='/reviews'>Mahindra Thar</Link></div>
          <div className="p-2">Mahindra XUV700</div>
          <div className="p-2">Tata Punch</div>
          <div className="p-2">Tata Punch</div>
          <div className="p-2">Tata Nexon</div>
          <div className="p-2">Maruti Swift</div>
          <div className="p-2">Maruti Brezza</div>
          <div className="p-2">Kia Seltoz</div>
        </div>
      )}
    </div>
  );
}

export default Search;