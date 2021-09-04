import React, {useState, useEffect} from 'react';
import { Beranda } from "./Pages";
import "./App.css"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Dropdown from "./Components/Dropdown";
import Jumbotron from './Components/Jumbotron';
import Footer from './Components/Footer';

function App() {
  const [isShowMobileNav, setIsShowMobileNav] = useState(false);
  
  const toggle = () => setIsShowMobileNav(!isShowMobileNav);

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 750 && isShowMobileNav) {
        setIsShowMobileNav(false);
      };
    }

    window.addEventListener('resize', hideMenu);

    return () => window.removeEventListener('resize', hideMenu);
  }, [isShowMobileNav]);

  return (
    <BrowserRouter>
      <Navbar toggle={toggle} />
      <Dropdown isShowMobileNav={isShowMobileNav} toggle={toggle} />
      <Jumbotron />
      <Switch>
        <Route path="/" component={Beranda} />
        <Redirect to="/" />
      </Switch>
      <Footer />      
    </BrowserRouter>
  );
}

export default App;
