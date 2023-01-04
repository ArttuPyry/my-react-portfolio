import React from 'react'
import './projectmodal.css'
import one from '../../../assets/game_prisonbreak/one.png'
import two from '../../../assets/game_prisonbreak/two.png'
import three from '../../../assets/game_prisonbreak/three.png'

const Project6 = ({ children }) => {
  return (
    <section className="modals">
      <div className="modalbase">
        
        <div className='modal_btn'>
           {children}
         </div>

        <div className="project__titles">
         <h2>Prisonbreak</h2>
        </div>

        <div className="modal__content">
        <ul className="tech__info">
            <li>
              <p>- Unity</p>
            </li>
            <li>
              <p>- C#</p>
            </li>
            <li>
              <p>- PC</p>
            </li>
            <li>
              <p>- 2D</p>
            </li>
            <li>
              <p>- Tasohyppely</p>
            </li>
          </ul>

          <div className="project__showcase">
            <p>
            Koulussa teimme simppelin tasohyppelypelin Unityn alkeiden opettelemiseen.
            <br /><br />
            Päädyin tekemään Super Mario Bros tapaisen pelin, jossa juostaan kenttä mahdollisimman nopeasti läpi tupakka-askeja keräten
            <br /><br />
            Vasemmassa ylänurkassa näet pelaajan elämät sekä kerättyjen askien määrän ja oikeassa ylänurkassa sekunttikellon
            <img src={one} alt="one" /> 
            <br />
            Piirsin kaiken Aseprite-ohjelmalla. Kuvassa nostettu lippu, joka toimii checkpointtina.
            <img src={two} alt="two" /> 
            <br />
            <img src={three} alt="three" /> 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project6