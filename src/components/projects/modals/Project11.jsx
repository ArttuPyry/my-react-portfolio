import React from 'react'
import './projectmodal.css'

import pmodel from '../../../assets/game_horror_psx/pmodel.png'
import phead from '../../../assets/game_horror_psx/phead.png'
import pwireframe from '../../../assets/game_horror_psx/wireframe.png'

const Project1 = ({ children }) => {
  return (
    <section className="modals">
      <div className="modalbase">
        
        <div className='modal_btn'>
           {children}
         </div>

        <div className="project__titles">
         <h2>PSX Horror Demo [WIP]</h2>
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
              <p>- Singleplayer</p>
            </li>
            <li>
              <p>- Horror</p>
            </li>
          </ul>
          
          <div className="project__showcase">
            <p>
              Me and my friend decided to start protoypying short demo for a horror game inspired by Silnet Hill and old Resident Evil games.
              <br /> <br />
              I wanted to create player character model first because I have been 'learning Crocotile 3D' modeling program.
              <br /> <br />
              Model is still WIP but I'm still really happy with the model!
              <img src={pmodel} alt="pmodel" />
              <img src={phead} alt="phead" />
              Model polycount: 333
              <img src={pwireframe} alt="pwireframe" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project1