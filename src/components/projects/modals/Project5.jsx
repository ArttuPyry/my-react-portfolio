import React from 'react'
import './projectmodal.css'
import ded from '../../../assets/game_3Dtest/ded.png'
import robot from '../../../assets/game_3Dtest/robot.png'
import dark from '../../../assets/game_3Dtest/dark.png'
import crate from '../../../assets/game_3Dtest/crate.png'
import moving from '../../../assets/game_3Dtest/moving.png'

const Project5 = ({ children }) => {
  return (
    <section className="modals">
      <div className="modalbase">
        
        <div className='modal_btn'>
           {children}
         </div>

        <div className="project__titles">
         <h2>3D testi-peli</h2>
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
            Ryhmäprojektiksi saimme 3D-pelin tekemisen. Koska projekti oli ensimmäinen 3D-peli, päätimme vain testailla miten asiat toimivat.
            <br />
            Työskentelin projektissa enimmäkseen Blenderin puolella, mutta koodasin kuitenkin Unityssä esimerkiksi tavaroiden nostamisen ja heittelyn, pelaajan liikkumisen, toimivat ovet sekä painikkeet.
            </p>
            <img src={ded} alt="ded" /> 
            Robotti oli inspiroitunut Morrowind pelin Dwemer Sphere:stä.
            <img src={robot} alt="robot" /> 
            <br />
            Pimeä huone, jossa pitää kiivetä laatikoita pitkin ylös, jotta saat oven auki:
            <img src={dark} alt="dark" /> 
            <img src={crate} alt="crate" /> 
            <br />
            Hyppelykenttä:
            <img src={moving} alt="moving" /> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project5