import React from 'react'
import './projects.css'
import IMGGamePB from '../../assets/game_prisonbreak/pb.png'
import IMGGame3D from '../../assets/game_3Dtest/wideimg.png'
import IMGGameUA from '../../assets/game_untitled-android/UntitledSchoolProject.png'
import IMGGameBW from '../../assets/game_black-and-white-roguelike/roguelikeimg.png'
import IMGGameKiwi from '../../assets/game_mekiwi_vr/VRKiwiProto.png'
import IMGGameHero from '../../assets/game_epic-hero/epichero.png'

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
  return (
    <section id='projects'>
      <div className="titles">
        <h2>Projects</h2>
      </div>

      <div className="container projects__container">
        {
          data.map(({id, image, title}) => {
            return(
              <article key={id} className="project__item">
              <div className="project__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
            </article>
            )
          })
        }
        </div>
    </section>
  )
}

export default Projects