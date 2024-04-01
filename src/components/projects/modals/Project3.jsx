import React from 'react'
import './projectmodal.css'
import './projectfour.css'
import klikkerpeli from '../../../assets/game_untitled-android/klikkerpeli.gif'
import screenshotone from '../../../assets/game_untitled-android/screenshot1.PNG'
import screenshottwo from '../../../assets/game_untitled-android/screenshot2.PNG'
import screenshotthree from '../../../assets/game_untitled-android/screenshot3.PNG'
import screenshotfour from '../../../assets/game_untitled-android/screenshot4.PNG'
import screenshotfive from '../../../assets/game_untitled-android/screenshot5.PNG'

const Project3 = ({ children }) => {
  return (
    <section className="modals">
      <div className="modalbase">
        
        <div className='modal_btn'>
           {children}
         </div>

        <div className="project__titles">
         <h2>Untitled Android game</h2>
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
              <p>- Mobile</p>
            </li>
            <li>
              <p>- 2D</p>
            </li>
            <li>
              <p>- Clicker</p>
            </li>
            <li>
              <p>- Singleplayer</p>
            </li>
          </ul>

          <div className="project__showcase project__showcase_long">
            <p>
              For this group project we made an Android game.
              <br />
              I programmed the combat system, the shop, the inventory and most menus. I also made most of the pixel art.
              <br /> <br />
              In game you have to get through three levels of fighting against different enemies and bosses. Enemies and bosses drop different loot.
              <br /> <br />
              Combat is fairly simple: Enemies attack automatically and player must press buttons to attack but some more powerfull attacks cost mana.
              <br /> <br />
              Player can buy potions and new gear from shop. Player can use potions to restore mana and health.
              <img src={klikkerpeli} alt="klikkerpeli" /> 
            <img src={screenshotfive} alt="screenshotfive" /> 
            <img src={screenshotthree} alt="screenshotthree" /> 
            <img src={screenshottwo} alt="screenshottwo" /> 
            <img src={screenshotfour} alt="screenshotfour" /> 
            <img src={screenshotone} alt="screenshotone" />  
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project3