import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';
import { useState } from 'react';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import Terms from './pages/Terms';
import Imprint from './pages/Imprint';
import Products from './pages/Products';

import Blogs from './pages/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
function App() {

  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/terms" element={<Terms/>} />
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route exact path="/imprint" element={<Imprint/>} />
        <Route exact path="/privacy" element={<PrivacyPolicy/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/blog" element={<Blogs/>} />




      </Routes>
    </>
  );
}

export default App;
