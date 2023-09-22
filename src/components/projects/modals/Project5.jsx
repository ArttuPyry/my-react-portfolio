import React from 'react'
import './projectmodal.css'
import txt from '../../../assets/game_idea_generator/txtfile.png'
import gen1 from '../../../assets/game_idea_generator/generate1.png'

const Project5 = ({ children }) => {
  return (
    <section className="modals">
      <div className="modalbase">
        
        <div className='modal_btn'>
           {children}
         </div>

        <div className="project__titles">
         <h2>Game Idea Generator</h2>
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
              <p>- Tool</p>
            </li>
          </ul>

          <div className="project__showcase">
            <p>
            <a href="https://github.com/ArttuPyry/game_idea_generator">GitHub repo is public! Feel free to check it out!</a>
            <br /> <br />
            On my free time I did this simple tool to generate ideas for games. Tool is inspired by game jams and uses themes from past jams.
            <br />
            <img src={gen1} alt="gen1" />
            <br /> <br />
            Tool reads 2 txt files from user/AppData/Roaming/GIG and if you want to you can edit these txt files to add more genres or requirement.
            <img src={txt} alt="txt" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project5