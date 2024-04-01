import React from 'react'
import './projectmodal.css'
import hnp from '../../../assets/game_dungeon_crawler/hnp.PNG'
import movement from '../../../assets/game_dungeon_crawler/movement.mp4'
import pathfind from '../../../assets/game_dungeon_crawler/pathfind.mp4'
import epicfight from '../../../assets/game_dungeon_crawler/epic_fight.mp4'
import inventory from '../../../assets/game_dungeon_crawler/inventoryandcontainers.mp4'
import dropped from '../../../assets/game_dungeon_crawler/droppeditems.mp4'

const Project9 = ({ children }) => {
  return (
    <section className="modals">
      <div className="modalbase">
        
        <div className='modal_btn'>
           {children}
         </div>

        <div className="project__titles">
         <h2>Dungeon Crawler [WIP]</h2>
        </div>

        <div className="modal__content">
        <ul className="tech__info">
            <li>
              <p>- Godot</p>
            </li>
            <li>
              <p>- GDScript</p>
            </li>
            <li>
              <p>- PC</p>
            </li>
            <li>
              <p>- 3D</p>
            </li>
            <li>
              <p>- FPS</p>
            </li>
            <li>
              <p>- Dungeon Crawler</p>
            </li>
            <li>
              <p>- Real-time combat</p>
            </li>
          </ul>

          <div className="project__showcase">
            <p>
                This is my current free time project I'm actively working on.
                I wanted to make something grid-based and decided that I want to create old school style fps dungeon crwaler.
                <br />
                Many dungeon crawlers are turn-based, but I personally wasn't feeling it. So in the end, I decided on a Grid based, Dungeon Crawler with real-time combat.
                <br /> <br />
                I decided to use Godot for this project because I wanted to try out the new Godot 4.2 and its new features and 3D fixes.
                <br /> <br />
                Basic player controls were fairly easy to make. I created a Finite State Machine for the player, with idle states and a movement state that uses Godot's Tween feature to move and rotate the player.
                <br />
                I wanted to add a look around or "free camera" for the player so I could include secret and more challenging puzzles in the game. 
                When the player is in the idle state, they can hold SHIFT to free the camera's X and Y axes. When the player stops holding SHIFT, the camera will smoothly move back to its original state, and this effect is achieved with tweens.
                <br />
                <video className='video' src={movement} autoPlay loop muted/>
                <br />
                Godot's basic pathfinding was a no-go because it doesn't support tile/grid-based movement. So, I went with AStar 3D pathfinding. <br />
                <video className='video' src={pathfind} autoPlay loop muted/>
                <br />
                Basic enemy attack.
                <video className='video' src={epicfight} autoPlay loop muted/>
                I made inventory and container system with Godots resource system.
                <video className='video' src={inventory} autoPlay loop muted/>
                Dropping items from inventory will create container under the player that stores the dropped items. When player collects all dropped items from the container temporary container is removed.
                <video className='video' src={dropped} autoPlay loop muted/>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project9