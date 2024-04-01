import React from 'react'
import CV_eng from '../../assets/CV_Arttu Viitajylha_ENG.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV_eng} download className='btn'>Download my CV!</a>
        <a href="#projects" className='btn btn-primary'>Check my projects!</a>
        <a href="https://github.com/ArttuPyry" className='btn'>Visit my GitHub!</a>
        <a href="https://orc-hugs.itch.io/" className='btn btn-primary'>My itch.io</a>
    </div>
  )
}

export default CTA