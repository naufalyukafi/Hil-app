import React, {useEffect, useContext} from 'react'
import "./Beranda.css";
import { Layout} from 'antd';
import { MyContext } from '../../Contexts/ApiContext';
import Card from '../../Components/Card';
import Jumbotron from '../../Components/Jumbotron';

const Beranda = () => {
    const { abouts, getAllAbouts } = useContext(MyContext);

    useEffect(() => {
        getAllAbouts();
    }, [getAllAbouts])

    return (
        <>
        <Jumbotron />
        <Layout.Content className="main">
            <div className="content">
                <h2 id="about" className="content__title">Tentang Kami</h2>
                <div className="content__about">
                    <h3><span>HAFIDZ IT LUMAJANG</span> - Merupakan salah satu komunitas yang bergerak di bidang teknologi yang berbasis Islam. Dalam hal ini juga mengamalkan ajaran-ajaran Islam dengan menggunakan media teknologi. 
                        <br /> <br />
                        Apa yang akan kita pelajari?</h3>
                    <div className="posts">
                        {
                            abouts.map(about => (
                                <Card 
                                    key={about.id} 
                                    id={about.id} 
                                    image={about.image} 
                                    title={about.title} 
                                    description={about.description} 
                                />
                            ))
                        }
                    </div>

                </div>
            </div>
        </Layout.Content>
        </>
    )
}
export default Beranda
