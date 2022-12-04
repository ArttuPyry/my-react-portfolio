import React from 'react'
import CV_fin from '../../assets/CV_fin.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV_fin} download className='btn'>Lataa CV</a>
        <a href="#projects" className='btn btn-primary'>Kurkkaa projektini!</a>
    </div>
  )
}

export default CTA