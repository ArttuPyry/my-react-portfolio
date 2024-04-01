import React from 'react'
import './projectmodal.css'

import sfthrow from '../../../assets/game_snowfight3D/sfthrow.png'
import sfmenu from '../../../assets/game_snowfight3D/sfmenu.png'
import sfdifficulty from '../../../assets/game_snowfight3D/sfdifficulty.png'
import sfcutscene from '../../../assets/game_snowfight3D/sfcutscene.png'
import sfstun from '../../../assets/game_snowfight3D/sfstun.png'

const Project1 = ({ children }) => {
  return (
    <section className="modals">
      <div className="modalbase">
        
        <div className='modal_btn'>
           {children}
         </div>

        <div className="project__titles">
         <h2>Snowfight3D</h2>
        </div>

        <div className="modal__content">
        <ul className="tech__info">
            <li>
              <p>- Godot</p>
            </li>
            <li>
              <p>- GDScript</p>
            </li>
            <li>
              <p>- PC</p>
            </li>
            <li>
              <p>- 3D</p>
            </li>
            <li>
              <p>- Singleplayer</p>
            </li>
            <li>
              <p>- Action</p>
            </li>
          </ul>
          
          <div className="project__showcase">
            <p>
             <a href="https://github.com/ArttuPyry/Snowfight_3D">GitHub repo is public! Feel free to check it out!</a>
             <br /> <br />
              This is small project inspired from old janky flash games from Miniclip!
              <br />
              Make sure to download and try the game from <a href="https://orc-hugs.itch.io/snowfight3d">here!</a>
              <br /> <br />

              In game you play as a kid and your mission is to destroy all snowmen from bullies who destroyed yours. Game has 6 levels and 2 enemies and 1 boss fight.
              <img src={sfthrow} alt="sfthrow" />
              <br />
              I made artsy cutscene fully with Godot's animations tree!
              <img src={sfcutscene} alt="sfcutscene" />
              <br />
              Enemies are stunned for a short duration after you deal enough damage.
              <img src={sfstun} alt="sfstun" />
              <br />
              <img src={sfmenu} alt="sfmenu" />
              <br />
              Game has 3 difficulty options!
              <img src={sfdifficulty} alt="sfdifficulty" />
              <br />
              <a href="https://orc-hugs.itch.io/snowfight3d">Make sure to test the game!</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project1