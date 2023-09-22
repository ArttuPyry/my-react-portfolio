import React from 'react'
import './projectmodal.css'
import ded from '../../../assets/game_3Dtest/ded.png'
import robot from '../../../assets/game_3Dtest/robot.png'
import dark from '../../../assets/game_3Dtest/dark.png'
import crate from '../../../assets/game_3Dtest/crate.png'
import moving from '../../../assets/game_3Dtest/moving.png'

const Project2 = ({ children }) => {
  return (
    <section className="modals">
      <div className="modalbase">
        
        <div className='modal_btn'>
           {children}
         </div>

        <div className="project__titles">
         <h2>3D test game</h2>
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
          </ul>

          <div className="project__showcase">
             <p>
              Our job was to make 3D game as group. but because it was our first time working on 3D we decided that we just wanna try out how thing work and what we can do.
             <br />
             I worked on the 3D models and I made the player movement, moving of objects, the buttons and the pressure plates.
             <br /> <br />

            <img src={ded} alt="ded" /> 
            Robot was inspired by The Morrowind's Dwemer Sphere.
            <img src={robot} alt="robot" /> 
            <br />
            Dark room where you need to move boxes and climb them to get to button to open a door.
            <img src={dark} alt="dark" /> 
            <img src={crate} alt="crate" /> 
            <br />
            Platformer level:
            <img src={moving} alt="moving" /> 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project2