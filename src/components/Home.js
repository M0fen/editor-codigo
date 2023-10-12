import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                En cualquier lugar <br /> En cualquier momento <br /> APRENDE!
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat!
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Busca cursos" />
              <button className="btn">Buscar</button>
            </div>
          </div>

          <div className="col-md-6">
            {/* Aquí deberías poner la imagen que quieras mostrar */}
            {/*<img src={heroImg} alt="" className="w-100 hero__img" />*/}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
