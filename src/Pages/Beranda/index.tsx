import React, { useState, useEffect } from 'react'
import "./Beranda.css";
import { Layout, Avatar, BackTop } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons';
import AOS from "aos"
import "aos/dist/aos.css"
import Navbar from '../../Components/Navbar';
import Dropdown from '../../Components/Dropdown/index';

const Beranda = () => {
    const [isShowBorderNav, setIsShowBorderNav ] = useState(false);
    const [isShowMobileNav, setIsShowMobileNav] = useState(false);
    
    const toggle = () => setIsShowMobileNav(!isShowMobileNav);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setIsShowBorderNav(true);
            } else setIsShowBorderNav(false);
        });

        const hideMenu = () => {
            if(window.innerWidth > 750 && isShowMobileNav) {
              setIsShowMobileNav(false);
            };
          }

        AOS.init();
        AOS.refresh();

        window.addEventListener('resize', hideMenu);

        return () => window.removeEventListener('resize', hideMenu);
    }, [isShowMobileNav]);
    
    return (
        <Layout>
            <Navbar isShowBorderNav={isShowBorderNav} toggle={toggle} />
            <Dropdown isShowMobileNav={isShowMobileNav} toggle={toggle} />
            <Layout.Content className="main">
                <div className="content"></div>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>
                <div className="copyright">Copyright &copy; 2021, Create by HIL ENGINEER</div>
                <BackTop>
                    <Avatar icon={<UpCircleOutlined style={{ fontSize: 19 }} />} style={{ backgroundColor: '#5BA42F' }} />
                </BackTop>
            </Layout.Footer>
        </Layout >
    )
}
export default Beranda
