import React, { useState, useEffect } from 'react'
import "./Beranda.css"
import { Layout, Menu, Typography, Row, Col, Button, Avatar, Drawer, BackTop, Image } from 'antd'
import { Link } from "react-router-dom"
import { UpCircleOutlined, AlignRightOutlined, ChromeOutlined, InstagramOutlined, MailOutlined } from '@ant-design/icons';
import AOS from "aos"
import "aos/dist/aos.css"

const Beranda = () => {
    const [visible, setVisible] = useState(false);
    const handleDrawer = () => {
        setVisible(prev => !prev)
    }
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <Layout>
            <Layout.Header>
                <Row align="middle" justify="space-between" >
                    <Link to="/">
                        <Col>
                            <Typography.Title level={4} style={{ fontWeight: 'bold', color: '#fff', marginTop: 10 }}>HAFIDZ IT</Typography.Title>
                        </Col>
                    </Link>
                    <Col className='navbar-search' >
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">Beranda</Menu.Item>
                            <Menu.Item key="2">Profil</Menu.Item>
                            <Menu.Item key="3">Video</Menu.Item>
                            <Menu.Item key="4">Contact</Menu.Item>
                            <Menu.Item key="5">Daftar</Menu.Item>
                        </Menu>
                    </Col>
                    <Col className="mobileVisible">
                        <Button className="drawer_button" type="primary" onClick={handleDrawer}>
                            <AlignRightOutlined style={{ fontSize: 20 }} />
                        </Button>
                        <Drawer
                            placement="right"
                            closable={false}
                            onClose={handleDrawer}
                            visible={visible}
                        >
                            <Menu mode="vertical" defaultSelectedKeys={['1']}>
                                <Menu.Item key="1">Beranda</Menu.Item>
                                <Menu.Item key="2">Profil</Menu.Item>
                                <Menu.Item key="3">Video</Menu.Item>
                                <Menu.Item key="4">Contact</Menu.Item>
                                <Menu.Item key="5">Daftar</Menu.Item>
                            </Menu>
                            {/* <Link to="#hero" title="Home">Home</Link> <br /> <br />
                            <Link to="#about" title="About" >About</Link> <br /> <br />
                            <Link to="#feature" title="Features">Features</Link> <br /> <br />
                            */}
                        </Drawer>
                    </Col>
                </Row>
            </Layout.Header>
            <Layout.Content style={{ marginTop: 30 }}>

                <div style={{ backgroundColor: '#102C75', paddingTop: 60 }}>
                    <Row justify='space-around' align="middle" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <Col className="text-welcome">
                            <Typography.Title level={1} style={{ color: '#fff' }}>Selamat Datang di</Typography.Title>
                            <Typography.Title level={1} style={{ color: '#fff' }}>HAFIDZ IT LUMAJANG</Typography.Title>
                        </Col>
                        <Col className="image-about">
                            <Image src="./img/hafidzit_home.png" preview={false} style={{ height: 'auto', width: '100%', maxWidth: 500, objectFit: 'contain' }} />
                        </Col>
                    </Row>
                </div>
                <div style={{ backgroundColor: '#FDC945', display: 'block', marginTop: -60 }}>
                    <Row justify="space-around" align="middle">
                        <Col style={{ padding: "20px 0px" }} data-aos="fade-right" data-aos-easing="linear"
                            data-aos-duration="1500">
                            <Row>
                                <Col><ChromeOutlined style={{ fontSize: 28, color: '#102C75', fontWeight: 'bold', paddingRight: 5 }} /></Col>
                                <Col><Typography.Title level={4} style={{ color: '#102C75', fontWeight: 'bold' }}> hafidzit.netlify.app</Typography.Title></Col>
                            </Row>
                        </Col>
                        <Col style={{ padding: "20px 0px" }} data-aos="fade-down" data-aos-easing="linear"
                            data-aos-duration="1500">
                            <Row>
                                <Col><InstagramOutlined style={{ fontSize: 28, color: '#102C75', fontWeight: 'bold', paddingRight: 5 }} /></Col>
                                <Col><Typography.Title level={4} style={{ color: '#102C75', fontWeight: 'bold' }}> Hafidz IT Lumajang</Typography.Title></Col>
                            </Row>
                        </Col>
                        <Col style={{ padding: "20px 0px" }} data-aos="fade-left" data-aos-easing="linear"
                            data-aos-duration="1500">
                            <Row>
                                <Col><MailOutlined style={{ fontSize: 28, color: '#102C75', fontWeight: 'bold', paddingRight: 5 }} /></Col>
                                <Col><Typography.Title level={4} style={{ color: '#102C75', fontWeight: 'bold' }}> hafidzitlumajang@gmail.com</Typography.Title></Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>
                <div className="copyright">Copyright &copy; 2021, Create by HIL ENGINEER</div>
                <BackTop>
                    <Avatar icon={<UpCircleOutlined style={{ fontSize: 20 }} />} style={{ backgroundColor: 'blueviolet' }} />
                </BackTop>
            </Layout.Footer>
        </Layout >
    )
}
export default Beranda
