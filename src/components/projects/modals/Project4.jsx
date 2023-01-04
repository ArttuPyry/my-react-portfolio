import React from 'react'
import './projectmodal.css'
import './projectfour.css'
import klikkerpeli from '../../../assets/game_untitled-android/klikkerpeli.gif'
import screenshotone from '../../../assets/game_untitled-android/screenshot1.png'
import screenshottwo from '../../../assets/game_untitled-android/screenshot2.png'
import screenshotthree from '../../../assets/game_untitled-android/screenshot3.png'
import screenshotfour from '../../../assets/game_untitled-android/screenshot4.png'
import screenshotfive from '../../../assets/game_untitled-android/screenshot5.png'

const Project4 = ({ children }) => {
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
              <p>- Klikkeri</p>
            </li>
            <li>
              <p>- Yksinpeli</p>
            </li>
          </ul>

          <div className="project__showcase project__showcase_long">
            <p>
            Tehtäväksi saimme tehdä ryhmässä Android-pelin.
            <br />
            Pelissä itse työskentelin taistelun, kaupan, inventaarion, suurimman osan valikkojen sekä pikseligrafiikan parissa.
            <br /><br />
            Päätimme ryhmässä tehdä klikkeripelin. Pelissä ideana on päästä kolmen tason läpi, joissa kohtaat erilaisia vihollisia ja bosseja.
            <br /><br />
            Pelin taistelu on simppeli: Vihollinen hyökkää automaattisesti satunnaisella hyökkäyksellä ja pelaajan pitää painaa loitsua tai hyökkäystä
            <img src={klikkerpeli} alt="klikkerpeli" /> 
            <br />
            Pelistä löytyy myös kauppa, josta voit ostaa aseita ja juomia.
            <br />
            Juomilla voi palauttaa elämäpisteitä sekä manaa.
            <img src={screenshottwo} alt="screenshottwo" /> 
            <img src={screenshotfive} alt="screenshotfive" /> 
            <img src={screenshotthree} alt="screenshotthree" /> 
            <img src={screenshotfour} alt="screenshotfour" /> 
            <img src={screenshotone} alt="screenshotone" />  
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project4