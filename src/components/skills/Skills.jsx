import React from 'react'
import './skills.css'
import skillsimg from '../../assets/skillsimg.png'

const Skills = () => {
  return (
    <section id='skills'>
      <div className="titles">
      <h2>Skills</h2>
      </div>
      
      <div className='container skillsdiv'>
      <div className="skills__container">
        <article className="skills">
          <div className="skills__header">
            <h3>Programming languages</h3>
          </div>

          <ul className="skills__list">
            <li>
              <p>- C#</p>
            </li>
            <li>
              <p>- C++</p>
            </li>
            <li>
              <p>- GDScript (Python)</p>
            </li>
            <li>
              <p>- Java</p>
            </li>
            <li>
              <p>- JavaScript (React)</p>
            </li>
          </ul>
        </article>
        {/* END OF LANGUAGES */}

        <article className="skills">
          <div className="skills__header">
            <h3>Game engines</h3>
          </div>

          <ul className="skills__list">
            <li>
              <p>- Unity</p>
            </li>
            <li>
              <p>- Godot</p>
            </li>
            <li>
              <p>- Unreal Engine 5</p>
            </li>
          </ul>
        </article>
        {/* END OF GAME ENGINES */}

        <article className="skills">
          <div className="skills__header">
            <h3>Programming tools</h3>
          </div>

          <ul className="skills__list">
            <li>
              <p>- Visual Studio & VSCode</p>
            </li>
            <li>
              <p>- Git</p>
            </li>
            <li>
              <p>- BitBucket</p>
            </li>
            <li>
              <p>- Trello</p>
            </li>
            <li>
              <p>- Hack'n'Plan</p>
            </li>
            <li>
              <p>- MySQL</p>
            </li>
          </ul>
        </article>
        {/* END OF GAME TOOLS */}

        <article className="skills">
          <div className="skills__header">
            <h3>Image editing and 3D modeling</h3>
          </div>

          <ul className="skills__list">
            <li>
              <p>- Photoshop</p>
            </li>
            <li>
              <p>- Gimp</p>
            </li>
            <li>
              <p>- Aseprite</p>
            </li>
            <li>
              <p>- Krita</p>
            </li>
            <li>
              <p>- Blender</p>
            </li>
            <li>
              <p>- Rhinoceros 7</p>
            </li>
          </ul>
        </article>
        {/* END OF IMAGE AND 3D MODELING */}
      </div>

      <div className='skillsimg'>
          <img src={skillsimg} alt="skillsimg" />
        </div>

      </div>

    </section>
  )
}

export default Skills