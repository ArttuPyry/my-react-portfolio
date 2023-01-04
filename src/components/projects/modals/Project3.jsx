import React from 'react'
import './projectmodal.css'
import RoguelikeDungeonGenerator from '../../../assets/game_black-and-white-roguelike/RoguelikeDungeonGenerator.gif'
import Roguelike from '../../../assets/game_black-and-white-roguelike/Roguelike.gif'
import editor from '../../../assets/game_black-and-white-roguelike/editor.png'

const Project3 = ({ children }) => {
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
            Vapaa-ajalla työskentelen yksin roguelikepelin parissa, jossa pelaajan pitää päästä tornin huipulle satunnaisesti generoitujen kerrosten läpi.
              <img src={RoguelikeDungeonGenerator} alt="RoguelikeDungeonGenerator" />
              <br />
              Kerrokset täytetään erillaisilla esteillä ja vihollisilla, jotka yrittävät estää pelaajan etenemisen. Jokaiseen tasoon tulee myös aarrehuone sekä "boss" viholliselle huone, jonka pelaajan täytyy voittaa päästäkseen seuraavaan kerrokseen.
              <br /><br />
              Pidän graafisen puolen tosi rajattuna: 9 x 9 pixeliä per sprite vain mustaa ja valkoista käyttäen.
              <img src={Roguelike} alt="Roguelike" />
              <img src={editor} alt="editor" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project3