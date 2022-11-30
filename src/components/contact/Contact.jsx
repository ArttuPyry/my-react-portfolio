import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="titles">
      <h2>Get In Touch</h2>
      </div>

      <div className="container contact__container">
        <div className="contact__options">
          {/* EMAIL */}
          <article className="contact__option">
            <h4>Email</h4>
            <h5>Arttu.Viitajylha(at)gmail.com</h5>
            <p>Message me!</p>
          </article>

          {/* LINKEDIN */}
          <article className="contact__option">
            <h4>Linkedin</h4>
            <h5>Arttu Viitajylhä</h5>
            <a href="https://www.linkedin.com/in/arttu-viitajylh%C3%A4-3a186b222/">Connect with me!</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form action="">
          <input type="name" name='name' placeholder='Name' required/>
          <input type="email" name='email' placeholder='Email' required/>
          <textarea name="message" rows="12" placeholder='Message' required></textarea>
          <button type='send' className='btn btn-primary'>Send</button>
        </form>

      </div>
    </section>
  )
}

export default Contact