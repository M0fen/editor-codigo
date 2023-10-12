import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about__img">
              {/* Aquí deberías poner la imagen que quieras mostrar */}
              {/*<img src={aboutImg} alt="" className="w-100" />*/}
            </div>
          </div>

          <div className="col-md-6">
            <div className="about__content">
              <h2>Quienes somos</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
              </p>
              <div className="about__buttons">
                <button className="btn btn-gray">Calidad</button>
                <button className="btn btn-gray">Comunidad</button>
                <button className="btn btn-gray">Aprendizaje</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;