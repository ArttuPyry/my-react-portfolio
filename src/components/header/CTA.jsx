import React from 'react'
import CV_eng from '../../assets/CV_Arttu Viitajylha_ENG.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV_eng} download className='btn'>Download my CV!</a>
        <a href="#projects" className='btn btn-primary'>Check my projects!</a>
    </div>
  )
}

export default CTA