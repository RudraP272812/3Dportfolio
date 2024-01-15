import React from 'react'
import { Link } from 'react-router-dom'

const cts = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Have a project in mind?
            <br  className='sm:block hidden'/>
            Lets built something together.
        </p>
        <Link to ="/contact" className='btn'> Contact me</Link>
    </section>
  )
}

export default cts
