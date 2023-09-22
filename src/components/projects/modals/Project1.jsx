import React from 'react'
import './projectmodal.css'
import one from '../../../assets/game_prisonbreak/one.png'
import two from '../../../assets/game_prisonbreak/two.png'
import three from '../../../assets/game_prisonbreak/three.png'

const Project1 = ({ children }) => {
  return (
    <section className="modals">
      <div className="modalbase">
        
        <div className='modal_btn'>
           {children}
         </div>

        <div className="project__titles">
         <h2>Prison break</h2>
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
              <p>- Platformer</p>
            </li>
          </ul>

          <div className="project__showcase">
            <p>
              At school we made simple platformer game to learn Unity basics.
              <br />
              I decided to do Super Mario Bros style game were you run through level collection cigarette packs.
              <br /><br />
              Top left corner you see player lives and how many pack you collected and in top right timer
            <img src={one} alt="one" /> 
            <br />
            I used Aseprite program to make sprites. Flag works as a checkpoint.
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

export default Project1