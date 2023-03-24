import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';
import logo from '../images/OG Technologies_logo.png';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import  { Select} from '@mui/material';
import { style } from '@mui/system';




function Header() {
  
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const trigger = useRef(null);
  const mobileNav = useRef(null);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header Name={isDarkMode ? 'dark-mode' : ''} className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-2">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="sarah">
              <div style={{ width: '100px', height: '60px' }}>
                <img src={logo} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
            <li>
                <Link to="/" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"> Home </Link>
              </li>
              <li>
                <Link to="/imprint" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"> Imprint </Link>
              </li>
              <li>
              <Link to="/terms" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"> Terms </Link>
              </li>
              <li>
              <Link to="/Privacy" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"> Privacy </Link>
              </li>
              <li>
              <Link to="/blog" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"> Blogs </Link>
              </li>
              <li>
              <Link to="/products" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"> Products </Link>
              </li>
            </ul>

            <div>
            <FormControl sx={{ width: '200px' }}>
            <InputLabel id="demo-simple-select-autowidth-label"  style={{ color: 'white' }}>Language</InputLabel>
        <div>
        <Select   labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          size='large'
          autoWidth
          label="Language"
          padding-right= "80px"
          style={{ width: '100px' , border: '2px solid white', backgroundColor:'rgb(93 93 255 / var(--tw-bg-opacity))'}}
          inputProps={{ style: { color: 'white' } }}
           MenuProps={{ MenuListProps: {
              style: {
                backgroundColor: 'grey',
                color: 'white' },
              },
            }}

         >
       <MenuItem style={{ color: 'white' }} value={20}>Englich</MenuItem>
       <MenuItem style={{ color: 'white' }} value={10}>Deutsch </MenuItem>
       </Select>
    </div>
      </FormControl>
    </div>
    <button onClick={handleDarkModeToggle}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
          </nav>

        
          {/* Mobile menu */}
          <div className="md:hidden">

            {/* Hamburger button */}
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <Link to="/imprint" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Imprint</Link>
                </li>
                {/*<li>
                  <Link to="/" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Sign up</Link>
                </li>*/}
                <li>
                  <Link to="/terms" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Termsssssss</Link>
                </li>
                <li>
                  <Link to="/Privacy" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Privacy</Link>
                </li>
                <li>
                  <Link to="/blog" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Blogs</Link>
                </li>
                <li>
                  <Link to="/products" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Products</Link>
                </li>
              </ul>


            </nav>
            
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
