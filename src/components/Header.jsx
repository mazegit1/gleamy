import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setSearchActive(!searchActive);
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <motion.div
      className='fixed py-4 bg-transparent text-white w-full flex items-center justify-between px-10 z-20' // Added z-20
    >
      <div className="header-left flex items-center">
        <motion.div
          className="search-icon cursor-pointer"
          onClick={toggleSearch}
        >
          <AiOutlineSearch size={40} />
        </motion.div>
        {searchActive && (
          <motion.input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="bg-transparent text-white border-b border-white focus:outline-none ml-2"
            initial={{ width: 0 }}
            animate={{ width: 'auto' }}
            transition={{ duration: 0.3 }}
          />
        )}
        {searchQuery && (
          <motion.div
            className="search-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>Searched for: {searchQuery}</p>
            {/* Example: Display search results */}
          </motion.div>
        )}
      </div>

      <a href='/' className="header-middle">
        <h1 className='text-6xl font-medium'>gleamy</h1>
      </a>

      <div className="header-right">
        <motion.div
          className="menu-icon flex items-center gap-8 text-xl cursor-pointer"
          onClick={toggleMenu}
          initial={{ rotate: 0 }}
          animate={{ rotate: menuOpen ? 90 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>MENU</h1>
          <AiOutlineMenu size={40} />
        </motion.div>

        {menuOpen && (
          <motion.div
            className="hamburger-menu z-10 bg-black/60 backdrop-blur-md fixed top-0 left-0 w-full h-full flex items-center justify-center"
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="close-icon cursor-pointer absolute top-4 right-4"
              onClick={toggleMenu}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <AiOutlineClose size={40} />
            </motion.div>
            <ul className="menu-items z-10 text-white text-2xl">
              <li><a href="/main" onClick={toggleMenu}>Home</a></li>
              <li><a href="/about" onClick={toggleMenu}>About</a></li>
              <li><a href="/services" onClick={toggleMenu}>Services</a></li>
              <li><a href="/portfolio" onClick={toggleMenu}>Portfolio</a></li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Header;
