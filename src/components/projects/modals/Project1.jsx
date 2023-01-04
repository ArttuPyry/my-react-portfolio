import React from 'react'
import './projectmodal.css'

import town from '../../../assets/game_epic-hero/town.png'  
import map from '../../../assets/game_epic-hero/map.png' 
import menu from '../../../assets/game_epic-hero/menu.png' 
import upgrade from '../../../assets/game_epic-hero/upgrade.png' 


const Project1 = ({ children }) => {
  return (
    <section className="modals">
      <div className="modalbase">
        
        <div className='modal_btn'>
           {children}
         </div>

        <div className="project__titles">
         <h2>Epic Hero</h2>
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
              <p>- 2.5D</p>
            </li>
            <li>
              <p>- Klikker</p>
            </li>
            <li>
              <p>- Yksinpeli</p>
            </li>
          </ul>

          <div className="project__showcase">
            <p>
              Pelituotantokurssilla jokaiselle ryhmälle jaettiin erilainen idea ja ohjeet peliin. Pelin ideaa sai hieman muokata.
              Ideaksi saimme klikker/idle pelin jossa pelataan aseenkantajalla.
              Toimin <span className="highlight">graafikkona</span> ja <span className="highlight">ohjelmoijana</span> tässä projektissa.
              <br /> <br />   
              Jaiomme pelin kahteen osaan, "kaupunki" sekä kartta. Kaupunkiosassa päivitetään rakennuksia, jotka passiivisesti kerää mareriaaleja, joilla päivitetään ritarin varustusta,
              Kartta osassa ritari lähetetään tekemään tehtäviä, joista saa palkkioksi lisää materiaaleja.
              <br /> <br />
              Kaupunki:
              <img src={town} alt="town" />
              <br />
              Kartta:
              <img src={map} alt="map" />
              <br />
              Ritarin päivitys menu:
              <img src={upgrade} alt="upgrade" />
              <br />
              Päävalikko:
              <img src={menu} alt="menu" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project1