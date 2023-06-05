import React from 'react'
import CV_eng from '../../assets/CV_-_Arttu_Viitajylha_-_ENG.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV_eng} download className='btn'>Download CV!</a>
        <a href="#projects" className='btn btn-primary'>Check my projects!</a>
    </div>
  )
}

export default CTA