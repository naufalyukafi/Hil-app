import React, {useEffect} from 'react';
import { IAbouts } from '../../Helpers/types';
import './Card.css';
import Aos from 'aos';

const Card = ({ id, image, title, description } : IAbouts) => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <article className="post__item" key={id}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
        >
            <div className="post__item-top">
                <img src={image} alt="logo-card" />
            </div>
            <div className="post-item__content">
            <h1 className="post-item__title">{title}</h1>
            <div className="post-item__description">
                <p>{description}</p>
            </div>
            </div>
        </article>
    )
}

export default Card
