import React, { useState } from 'react'
import "./Beranda.css"
import { Layout, Menu, Typography, Row, Col, Button, Avatar, Drawer, BackTop } from 'antd'
import { Link } from "react-router-dom"
import { UpCircleOutlined, AlignRightOutlined } from '@ant-design/icons';

const Beranda = () => {
    const [visible, setVisible] = useState(false);
    const handleDrawer = () => {
        setVisible(prev => !prev)
    }
    return (
        <Layout>
            <Layout.Header>
                <Row align="middle" justify="space-between" >
                    <Link to="/">
                        <Col>
                            <Typography.Title level={4} style={{ fontWeight: 'bold', color: '#fff' }}>HAFIDZ IT LUMAJANG</Typography.Title>
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
            <Layout.Content style={{ padding: 50, marginTop: 30, marginBottom: '100vh' }}>
                <h1>Content</h1>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>
                <div className="copyright">Copyright &copy; 2021, Create by HIL ENGINEER</div>
                <BackTop>
                    <Avatar icon={<UpCircleOutlined />} style={{ backgroundColor: 'blueviolet' }} />
                </BackTop>
            </Layout.Footer>
        </Layout >
    )
}
export default Beranda
