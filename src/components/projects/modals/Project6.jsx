import React from 'react'
import './projectmodal.css'

import customBulletBasic from '../../../assets/game_mekiwi_vr/CustomBulletBasic.png'
import customBulletGrenade from '../../../assets/game_mekiwi_vr/CustomBulletGrenade.png'
import AIstrafe from '../../../assets/game_mekiwi_vr/AIStrafe.gif'
import AICoverAim from '../../../assets/game_mekiwi_vr/AICoverAim.png'
import GrapplingHook from '../../../assets/game_mekiwi_vr/GrapplingHook.gif'

const Project6 = ({ children }) => {
  return (
    <section className="modals">
      <div className="modalbase">
        
        <div className='modal_btn'>
           {children}
         </div>

        <div className="project__titles">
         <h2>VR Prototype</h2>
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
              <p>- VR</p>
            </li>
          </ul>

          <div className="project__showcase">
            <p>
            I completed 'Basic tasks of information and communication technology' and 'Programming' displays of skills at MeKiwi
            <br /><br />
            Our job was to code and test different mechanics for virtual reality game. I decided to program a customizable bullet, enemy AI and a grappling hook.
            <br /><br />
            For the customizable bullet I did multiple options so you can use one script for grenades, basic bullet, scifi style bouncy bullet or anything that does damage.
            <br /><br />
            Basic bullet:
            <img src={customBulletBasic} alt="customBulletBasic" />
            <br />
            Bouncy grenade:
            <img src={customBulletGrenade} alt="customBulletGrenade" />
            <br />
            For enemy AI I made 4 states
            <br />
            Patrol: In this state enemy walks to random spot in close range
            <br />
            Chase: Enemy runs towards a target
            <br />
            Attack: Enemy attacks a target and strafes around it. 
            <br />
            Hide: If enemy is low HP it will try to run and hide

            <br /><br />
            AI attacking and strafing
            <img src={AIstrafe} alt="AIstrafe" />
            <br />
            Enemy prefers shooting from behind cover.
            <img src={AICoverAim} alt="AICoverAim" />
            <br />
            Grappling hook:
            <img src={GrapplingHook} alt="GrapplingHook" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project6