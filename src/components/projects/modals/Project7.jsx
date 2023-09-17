import React from 'react'
import './projectmodal.css'
import currency from '../../../assets/game_the_forgotten_guardian/currency.mp4'
import portal from '../../../assets/game_the_forgotten_guardian/portalgif.gif'
import ultimate from '../../../assets/game_the_forgotten_guardian/ultimate.mp4'

const Project7 = ({ children }) => {
  return (
    <section className="modals">
      <div className="modalbase">
        
        <div className='modal_btn'>
           {children}
         </div>

        <div className="project__titles">
         <h2>The Forgotten Guardians</h2>
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
              <p>- Android</p>
            </li>
            <li>
              <p>- iOS</p>
            </li>
            <li>
              <p>- 2D</p>
            </li>
            <li>
              <p>- Tower Defence</p>
            </li>
            <li>
              <p>- Singleplayer</p>
            </li>
          </ul>

          <div className="project__showcase">
            <p>
               I completed 'Working as a software developer' course at <a href="https://www.brakesoft.com/">Brakesoft</a> working on a game <span className="highlight">The Forgotten Guardians.</span>
              <br/>
              Make sure to test the game! You can download it from <a href="https://play.google.com/store/apps/details?id=com.Brakesoft.TowerDefence&pli=1">Google Play</a> and <a href="https://apps.apple.com/fi/app/the-forgotten-guardians/id1602278692">App Store!</a>
              <br/><br/>
              The internship was fully remote, and I primarily worked as a programmer.
              <br/><br/>
              For the game, I implemented a flying currency effect for defeated enemies using a simple object pooler. Additionally, I reworked few small features, worked on levels, did some sprite work like portal, highlights and minor fixes. I also did testing and bug fixing. 
              <br/><br/>
              Currency effect from defeated enemies:
              <video className='video' src={currency} autoPlay loop muted/>
              <br/>
              Animated portal:
              <img className='portalgif' src={portal} alt="portal" />
              <br/>
              Lightning ability I rewrote:
              <video className='video' src={ultimate} autoPlay loop muted/>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project7