import React from 'react'
import './projectmodal.css'
import hnp from '../../../assets/game_dungeon_crawler/hnp.PNG'
import movement from '../../../assets/game_dungeon_crawler/movement.mp4'
import pathfind from '../../../assets/game_dungeon_crawler/pathfind.mp4'
import epicfight from '../../../assets/game_dungeon_crawler/epic_fight.mp4'

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
                This is my current free time project I'm actively working on, and I'm keeping track of my progress with Hack 'n' Plan. The project is still in the very early stages of development!
                <br />
                <img src={hnp} alt="hnp" />
                <br />
                I wanted to make something grid-based. While doing some research, I came across some old FPS Dungeon Crawlers and wanted to make something similar but a bit more modern.
                <br />
                Many dungeon crawlers are turn-based, but I personally wasn't feeling it. So in the end, I decided on a Grid based, Dungeon Crawler with real-time combat and first-person perspective.
                <br /> <br />
                I decided to use Godot for this project because I wanted to try out the new Godot 4.1 and its new features and 3D fixes.
                <br /> <br />
                Basic player controls were fairly easy to make. I created a Finite State Machine for the player, with idle states and a movement state that uses Godot's Tween feature to move and rotate the player.
                <br />
                I also added RayCasts to check for walls and other obstacles and a small bump tween to provide smooth feedback to the player.
                <br />
                I wanted to add a look around or "free camera" for the player so I could include secret and more challenging puzzles in the game. 
                When the player is in the idle state, they can hold SHIFT to free the camera's X and Y axes. When the player stops holding SHIFT, the camera will smoothly move back to its original state, and this effect is achieved with tweens.
                <br />
                <video className='video' src={movement} autoPlay loop muted/>
                <br />
                Godot's basic pathfinding was a no-go because it doesn't support tile/grid-based movement. So, I went with AStar 3D pathfinding. <br />
                Godot's A* doesn't have partial pathing, and disabling points with 'set_point_disabled' made the game crash if enemies blocked the path of other enemies because A*s get_point_path didn't know what to do.
                I solved this problem with 'set_point_weight_scale', increasing points weight makes enemies go around each other if there is enough space and when the path is blocked, they stack up on one tile.
                But with a little check, I made enemies go into an idle state if they are about to step onto an already in-use tile.
                <video className='video' src={pathfind} autoPlay loop muted/>
                <br />
                Working on attack state! I'm getting good progress and I'm learning a lot.
                <video className='video' src={epicfight} autoPlay loop muted/>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project9