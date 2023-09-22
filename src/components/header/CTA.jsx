import React from 'react'
import CV_eng from '../../assets/CV_Arttu Viitajylha_ENG.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV_eng} download className='btn '>Download my CV!</a>
        <a href="#projects" className='btn'>Check my projects!</a>
        <a href="https://github.com/ArttuPyry" className='btn btn-primary'>Visit my GitHub!</a>
    </div>
  )
}

export default CTA