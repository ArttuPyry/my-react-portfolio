import React from 'react'
import './about.css'
import nerd from '../../assets/nerd.png'

const About = () => {
  return (
    <section id='about'>
      <div className="titles">
        <h2>About me</h2>
      </div>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={nerd} alt="nerd" />
          </div>
        </div>

        <div className="about__content">
          <p>
            I graduated as a <span className="highlight">software developer</span> from OSAO Finland in the spring of 2023, with a specific emphasis on <span className="highlight">game development.</span>
            <br /><br />
            In my spare time I work on my personal projects. I mostly work on <span className="highlight">Unity (C#)</span> and <span className="highlight">Godot (GDScript)</span> game engines but I have also started studying <span className="highlight">Unreal Engine 5</span> and <span className="highlight">C++.</span> For 3D-modeling I use <span className="highlight">Blender</span> and for pixel graphics and other image editing I use <span className="highlight">Aseprite</span>, <span className="highlight">Krita</span> and <span className="highlight">Gimp.</span>
            <br /><br />
            My strengths in the gaming industry are calmness, pressure tolerance and that I'm a fast learner. I like problem solving but I'm not scared to ask for help.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About