import React from 'react'
import { BackTop, Layout } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import {
   UpCircleOutlined, YoutubeFilled, MailFilled, InstagramFilled
  } from '@ant-design/icons';
import './Footer.css';

const Footer = () => {
    return (
        <>
        <div id="contact" className="contact__footer" style={{
            backgroundImage: 'url("./images/bg_contact.png")'
        }}>
          <h2>Ingin tahu lebih banyak dengan kami? <br /> Silahkan hubungi kami di bawah ini!</h2>
            <ul>
                <li><a href="mailto:hafidzitlumajang@gmail.com" target="_blank" rel="noopener noreferrer"> <MailFilled /> </a></li>
                <li><a href="https://www.youtube.com/channel/UCxhqnbF6cROQfhy0K4onsrg" target="_blank" rel="noopener noreferrer"> <YoutubeFilled /> </a></li>
                <li><a href="https://www.instagram.com/hafidzitlumajang/" target="_blank" rel="noopener noreferrer"> <InstagramFilled /> </a></li>
            </ul>
        </div>
            <Layout.Footer className="footer" style={{backgroundColor: '#4F7E32', color: '#fff'}}>
                <div className="copyright">Copyright &copy; 2021, Create by HIL ENGINEER</div>
                <BackTop>
                    <Avatar icon={<UpCircleOutlined style={{ fontSize: 19 }} />} style={{ backgroundColor: '#5BA42F' }} />
                </BackTop>
            </Layout.Footer>
        </>
    )
}

export default Footer
