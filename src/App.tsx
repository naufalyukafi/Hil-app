import React, {useState, useEffect} from 'react';
import { Beranda } from "./Pages";
import "./App.css"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Dropdown from "./Components/Dropdown";
import { BackTop, Layout } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { UpCircleOutlined } from '@ant-design/icons';
import Jumbotron from './Components/Jumbotron';

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
      <Layout.Footer style={{ textAlign: 'center' }}>
          <div className="copyright">Copyright &copy; 2021, Create by HIL ENGINEER</div>
          <BackTop>
              <Avatar icon={<UpCircleOutlined style={{ fontSize: 19 }} />} style={{ backgroundColor: '#5BA42F' }} />
          </BackTop>
      </Layout.Footer>
    </BrowserRouter>
  );
}

export default App;
