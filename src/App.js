import './App.css';
import React, { useState } from 'react';
import Photos from './Components/Photos';
import Favourites from './Components/Favourites';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function App() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target[0].value);
  };

  return (
    <BrowserRouter>
      <div>
        <nav className="navbar">
          <div className="navbar_logo">
            FotoFlix
          </div>
          <form className='navbar_search-form' onSubmit={handleSearch}>
            <input type="text" className='form-input' placeholder='search' />
            <button type='submit' className='submit-btn'>
              <FaSearch />
            </button>
          </form>
          <div className="navbar_links">
            <Link to='/'>Home</Link>
            <Link to="/favourites">Favourites</Link>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Photos query={query} />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
