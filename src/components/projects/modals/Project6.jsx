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
              <p>- 3D</p>
            </li>
            <li>
              <p>- Clicker</p>
            </li>
            <li>
              <p>- Singleplayer</p>
            </li>
          </ul>

          <div className="project__showcase">
            <p>
              In game production course every team was given an idea and rules for a game but we were allowed to change things. We were to make a clicker/idle game were you play as a squire.
              I worked with <span className="highlight">graphics</span> and <span className="highlight">code</span> in this project.
              <br /> <br />   
              We split game into two parts: city and map. In city you can upgrade buildings which increases passive material gain and with materials you upgrade the knights gear.
              In map you can send the knight for an adventure which gives even more materials.
              <br /> <br />
              City:
              <img src={town} alt="town" />
              <br />
              Map:
              <img src={map} alt="map" />
              <br />
              Knight upgrade menu:
              <img src={upgrade} alt="upgrade" />
              <br />
              Mainmenu:
              <img src={menu} alt="menu" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project1