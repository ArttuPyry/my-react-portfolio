import React from 'react'
import './projectmodal.css'

const Project1 = ({ children }) => {
  return (
    <section className="modals">
      <div className="modalbase">
        
        <div className='modal_btn'>
           {children}
         </div>

        <div className="titles">
         <h2>Projektin nimi 1</h2>
        </div>

        <div className="modal__content">
        <ul className="tech__info">
            <li>
              <p>- Game Engine</p>
            </li>
            <li>
              <p>- Language</p>
            </li>
            <li>
              <p>- PC/Mobile</p>
            </li>
            <li>
              <p>- 2D/3D/2.5D</p>
            </li>
            <li>
              <p>- Type</p>
            </li>
            <li>
              <p>- Type</p>
            </li>
          </ul>

          <div className="project__showcase">
            <p>
              TESTE
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project1