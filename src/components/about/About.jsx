import React from 'react'
import './about.css'
import nerd from '../../assets/nerd.png'

const About = () => {
  return (
    <section id='about'>
      <div className="about__title">
        <h2>About Me</h2>
      </div>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={nerd} alt="nerd" />
          </div>
        </div>

        <div className="about__content">
          <p>
          Opiskelen <span className="highlight">ohjelmistokehittäjäksi</span>  OSAO:lla. Opinnoissani suuntaan <span className="highlight">pelinkehittäjäksi</span>. Koulussa olemme tehneet tiimeissä 2D-pelejä, 3D-pelejä sekä perus VR-demoja.
          <br /><br />
          Vapaa-ajalla tykkään työskennellä omien projektieni parissa. Suurimmaksi osaksi työskentelen <span className="highlight">Unity (C#)</span> ja <span className="highlight">Godot (GDScript)</span> pelimoottoreilla. 3D-mallintamiseen käytän <span className="highlight">Blenderiä</span>. Pikseligrafiikkaan ja muuhun kuvanmuokkaukseen käytän <span className="highlight">Aseprite</span>, <span className="highlight">Photoshop</span> sekä <span className="highlight">Gimp</span> ohjelmistoja.
          <br /><br />
          Pidän ongelmanratkaisemista, mutta tiedän milloin kysyä apua. Vahvuuteni ovat rauhallisuus, periksiantamattomuus ja paineensietokyky. Tykkään myös oppia uusia asioita.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About