import React from 'react'
import CV_fin from '../../assets/CV_fin.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV_fin} download className='btn'>Download CV</a>
        <a href="#projects" className='btn btn-primary'>Check my projects!</a>
    </div>
  )
}

export default CTA