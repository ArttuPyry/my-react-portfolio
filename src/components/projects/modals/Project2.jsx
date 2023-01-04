import React from 'react'
import './projectmodal.css'

import customBulletBasic from '../../../assets/game_mekiwi_vr/CustomBulletBasic.png'
import customBulletGrenade from '../../../assets/game_mekiwi_vr/CustomBulletGrenade.png'
import AIstrafe from '../../../assets/game_mekiwi_vr/AIStrafe.gif'
import AICoverAim from '../../../assets/game_mekiwi_vr/AICoverAim.png'
import GrapplingHook from '../../../assets/game_mekiwi_vr/GrapplingHook.gif'

const Project2 = ({ children }) => {
  return (
    <section className="modals">
      <div className="modalbase">
        
        <div className='modal_btn'>
           {children}
         </div>

        <div className="project__titles">
         <h2>VR Prototyyppi</h2>
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
            Suoritin 'Tieto- ja viestintätekniikan perustehtävät' sekä 'Ohjelmointi' näytöt MeKiwi:llä. 
            <br /><br />
            Meille annettiin teema ja peli-idea, jonka mukaan me koodasimme sekä testasimme erilaisia mekaniikkoja. Päätin tehdä muokattavan ammuksen, vihollis AI:n sekä heittokoukun.
            <br /><br />
            Muokattavalle ammukselle annoin paljon eri asetuksia, joilla pystyit tekemään monia erilaisia ammuksia, kuten perusammuksia, räjähteitä, kranaatteja tai kimpolevia scifiammuksia.
            <br /><br />

            Asetukset perusammukselle:
            <img src={customBulletBasic} alt="customBulletBasic" />
            <br />
            Asetukset pomppivalle kranaatille:
            <img src={customBulletGrenade} alt="customBulletGrenade" />
            <br />
            AI:lle tein neljä eri tilaa: partioi, aja takaa, hyökkää sekä piiloudu. 
            <br /><br />
            Partioi: Tässä tilassa AI hakee satunnaisen kohdan kentässä ja kävelee siihen. 
            <br /><br />
            Aja takaa: Kun AI näkee pelaajan se lähtee juoksemaan pelaajaa kohti.
            <br /><br />
            Hyökkää: Jos AI pääsee tarpeeksi lähelle pelaajaa, se alkaa ampumaan muokattavilla ammuksilla sekä liikkuu satunnaisiin kohtiin väistelläkseen pelaajan ammuksia.
            <br /><br />
            Piiloudu: Jos AI:n elämäpisteet ovat tarpeeksi alhaiset se juoksee karkuun ja yrittää piiloutua.

            <br /><br />
            AI hyökkää pelaajaa ja väistelee:
            <img src={AIstrafe} alt="AIstrafe" />
            <br />
            AI suosii seinän takaa ampumista:
            <img src={AICoverAim} alt="AICoverAim" />
            <br />
            Heittokokku:
            <img src={GrapplingHook} alt="GrapplingHook" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project2