import React, { useState } from 'react'
import './projects.css'
import IMGGamePB from '../../assets/game_prisonbreak/pb.png'
import IMGGame3D from '../../assets/game_3Dtest/wideimg.png'
import IMGGameUA from '../../assets/game_untitled-android/UntitledSchoolProject.png'
import IMGGameBW from '../../assets/game_black-and-white-roguelike/roguelikeimg.png'
import IMGGameKiwi from '../../assets/game_mekiwi_vr/VRKiwiProto.png'
import IMGGameHero from '../../assets/game_epic-hero/epichero.png'

import Project1 from './modals/Project1'
import Project2 from './modals/Project2'
import Project3 from './modals/Project3'
import Project4 from './modals/Project4'
import Project5 from './modals/Project5'
import Project6 from './modals/Project6'

const data = [
  {
    id: 1,
    image: IMGGameHero,
    title: 'Epic Hero [Prototype]',
  },
  {
    id: 2,
    image: IMGGameKiwi,
    title: 'VR Prototype',
  },
  {
    id: 3,
    image: IMGGameBW,
    title: 'Untitled 2D Roguelike',
  },
  {
    id: 4,
    image: IMGGameUA,
    title: 'Untitled Android Game',
  },
  {
    id: 5,
    image: IMGGame3D,
    title: '3D-test-game',
  },
  {
    id: 6,
    image: IMGGamePB,
    title: 'Prison break',
  }
]

const Projects = () => {

  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);

  const toggleModal = (id) => {
    if (id === 1) {
      setModal1(!modal1)
    }
    if (id === 2) {
      setModal2(!modal2)
    }
    if (id === 3) {
      setModal3(!modal3)
    }
    if (id === 4) {
      setModal4(!modal4)
    }
    if (id === 5) {
      setModal5(!modal5)
    }
    if (id === 6) {
      setModal6(!modal6)
    }
  }

  return (
    <section id='projects'>
      <div className="titles">
        <h2>Projektit</h2>
      </div>

      <div className="container projects__container">
        {
          data.map(({id, image, title}) => {
            return(
              <article key={id} className="project__item" onClick={() => toggleModal(id)}>
              <div className="project__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
            </article>
            )
          })
        }
      </div>

      {modal1 && (
        <div className="modal">
          <Project1>
            <button className='btn btn-primary' onClick={() => toggleModal(1)}>
              Sulje
            </button>
          </Project1>
        </div>
      )}

      {modal2 && (
        <div className="modal">
            <Project2>
            <button className='btn btn-primary' onClick={() => toggleModal(2)}>
              Sulje
            </button>
          </Project2>
        </div>
      )}

      {modal3 && (
        <div className="modal">
            <Project3>
            <button className='btn btn-primary' onClick={() => toggleModal(3)}>
              Sulje
            </button>
          </Project3>
        </div>
      )}

      {modal4 && (
        <div className="modal">
            <Project4>
            <button className='btn btn-primary' onClick={() => toggleModal(4)}>
              Sulje
            </button>
          </Project4>
        </div>
      )}

      {modal5 && (
        <div className="modal">
            <Project5>
            <button className='btn btn-primary' onClick={() => toggleModal(5)}>
              Sulje
            </button>
          </Project5>
        </div>
      )}

      {modal6 && (
        <div className="modal">
            <Project6>
            <button className='btn btn-primary' onClick={() => toggleModal(6)}>
              Sulje
            </button>
          </Project6>
        </div>
      )}

    </section>
  )
}

export default Projects