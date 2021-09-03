import React from 'react';
import "./Jumbotron.css";

const Jumbotron = () => {
    return (
        <article className="headline">
          <figure className="headline__figure">
            <picture>
                <img src="./images/logo_home.png" alt="Hafidz It Lumajang" />
            </picture>
          </figure>
          <div className="headline__content">
            <h1 className="headline__title">Selamat datang di <br /> hafidz it lumajang</h1>
            <p className="headline__description">Belajar IT Sekaligus Agama Islam</p>
            <a href="#/" target="_blank" rel="noopener noreferrer">
              <button type="button" className="headline__button">Daftar Sekarang</button>
            </a>
          </div>
        </article>
    )
}

export default Jumbotron;
