import React from 'react'
import './projectmodal.css'
import dungeongen from '../../../assets/game_black-and-white-roguelike/dungeongen.mp4'
import Roguelike from '../../../assets/game_black-and-white-roguelike/Roguelike.gif'
import editor from '../../../assets/game_black-and-white-roguelike/editor.png'

const Project4 = ({ children }) => {
  return (
    <section className="modals">
      <div className="modalbase">
        
        <div className='modal_btn'>
           {children}
         </div>

        <div className="project__titles">
         <h2>2D Roguelike</h2>
        </div>

        <div className="modal__content">
        <ul className="tech__info">
            <li>
              <p>- Godot</p>
            </li>
            <li>
              <p>- GDScript (Python)</p>
            </li>
            <li>
              <p>- PC</p>
            </li>
            <li>
              <p>- 2D</p>
            </li>
            <li>
              <p>- Roguelike</p>
            </li>
            <li>
              <p>- Bullet hell</p>
            </li>
          </ul>

          <div className="project__showcase">
            <p>
              In my spare time I'm working on roguelike game. Players task is to go through randomly generated dungeon.
              <br /><br />
              test dungeon generator
              <video className='video' src={dungeongen} autoPlay loop muted/>
              Floors are filled with different obstacles and enemies. Every floor will contain boss room and item room.
              <br /><br />
              For game art I went for 1Bit to keep it simple
              <img src={Roguelike} alt="Roguelike" />
              <img src={editor} alt="editor" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project4