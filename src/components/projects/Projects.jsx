import React, { useState } from 'react'
import './projects.css'
import IMGGamePB from '../../assets/game_prisonbreak/pb.png'
import IMGGame3D from '../../assets/game_3Dtest/wideimg.png'
import IMGGameUA from '../../assets/game_untitled-android/UntitledSchoolProject.png'
import IMGGameBW from '../../assets/game_black-and-white-roguelike/roguelikeimg.png'
import IMGGameKiwi from '../../assets/game_mekiwi_vr/VRKiwiProto.png'
import IMGGameHero from '../../assets/game_epic-hero/epichero.png'
import IMGTFG from '../../assets/game_the_forgotten_guardian/theforgottenguardian.png'
import GIG from '../../assets/game_idea_generator/GIG.png'
import fpsdc from '../../assets/game_dungeon_crawler/fpsdc.png'
import sf3d from '../../assets/game_snowfight3D/snowfight3d.png'
import hpsx from '../../assets/game_horror_psx/maincharacter.png'

import Project1 from './modals/Project1'
import Project2 from './modals/Project2'
import Project3 from './modals/Project3'
import Project4 from './modals/Project4'
import Project5 from './modals/Project5'
import Project6 from './modals/Project6'
import Project7 from './modals/Project7'
import Project8 from './modals/Project8'
import Project9 from './modals/Project9'
import Project10 from './modals/Project10'
import Project11 from './modals/Project11'

const data = [
  {
    id: 11,
    image: hpsx,
    title: 'PSX horror Demo [WIP]',
  },
  {
    id: 10,
    image: sf3d,
    title: 'Snowfight3D',
  },
  {
    id: 9,
    image: fpsdc,
    title: 'Dungeon Crawler [WIP]',
  },
  {
    id: 8,
    image: IMGTFG,
    title: 'The Forgotten Guardians',
  },
  {
    id: 7,
    image: IMGGameHero,
    title: 'Epic Hero [Prototype]',
  },
  {
    id: 6,
    image: IMGGameKiwi,
    title: 'VR Prototype',
  },
  {
    id: 5,
    image: GIG,
    title: 'Game Idea Generator',
  },
  {
    id: 4,
    image: IMGGameBW,
    title: 'Untitled 2D Roguelike',
  },
  {
    id: 3,
    image: IMGGameUA,
    title: 'Untitled Android Game',
  },
  {
    id: 2,
    image: IMGGame3D,
    title: '3D-test-game',
  },
  {
    id: 1,
    image: IMGGamePB,
    title: 'Prison break',
  }
]

const Projects = () => {

  const [modal11, setModal11] = useState(false);
  const [modal10, setModal10] = useState(false);
  const [modal9, setModal9] = useState(false);
  const [modal8, setModal8] = useState(false);
  const [modal7, setModal7] = useState(false);
  const [modal6, setModal6] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal1, setModal1] = useState(false);

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
    if (id === 7) {
      setModal7(!modal7)
    }
    if (id === 8) {
      setModal8(!modal8)
    }
    if (id === 9) {
      setModal9(!modal9)
    }
    if (id === 10) {
      setModal10(!modal10)
    }
    if (id === 11) {
      setModal11(!modal11)
    }
  }

  return (
    <section id='projects'>
      <div className="titles">
        <h2>Projects</h2>
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

      {modal11 && (
        <div className="modal">
          <Project11>
            <button className='btn btn-primary' onClick={() => toggleModal(11)}>
              Close
            </button>
          </Project11>
        </div>
      )}

      {modal10 && (
        <div className="modal">
          <Project10>
            <button className='btn btn-primary' onClick={() => toggleModal(10)}>
              Close
            </button>
          </Project10>
        </div>
      )}

      {modal9 && (
        <div className="modal">
          <Project9>
            <button className='btn btn-primary' onClick={() => toggleModal(9)}>
              Close
            </button>
          </Project9>
        </div>
      )}

      {modal8 && (
        <div className="modal">
          <Project8>
            <button className='btn btn-primary' onClick={() => toggleModal(8)}>
              Close
            </button>
          </Project8>
        </div>
      )}

      {modal7 && (
        <div className="modal">
          <Project7>
            <button className='btn btn-primary' onClick={() => toggleModal(7)}>
              Close
            </button>
          </Project7>
        </div>
      )}

      {modal6 && (
        <div className="modal">
          <Project6>
            <button className='btn btn-primary' onClick={() => toggleModal(6)}>
              Close
            </button>
          </Project6>
        </div>
      )}

      {modal5 && (
        <div className="modal">
            <Project5>
            <button className='btn btn-primary' onClick={() => toggleModal(5)}>
              Close
            </button>
          </Project5>
        </div>
      )}

      {modal4 && (
        <div className="modal">
            <Project4>
            <button className='btn btn-primary' onClick={() => toggleModal(4)}>
              Close
            </button>
          </Project4>
        </div>
      )}

      {modal3 && (
        <div className="modal">
            <Project3>
            <button className='btn btn-primary' onClick={() => toggleModal(3)}>
              Close
            </button>
          </Project3>
        </div>
      )}

      {modal2 && (
        <div className="modal">
            <Project2>
            <button className='btn btn-primary' onClick={() => toggleModal(2)}>
              Close
            </button>
          </Project2>
        </div>
      )}

      {modal1 && (
        <div className="modal">
            <Project1>
            <button className='btn btn-primary' onClick={() => toggleModal(1)}>
              Close
            </button>
          </Project1>
        </div>
      )}

    </section>
  )
}

export default Projects