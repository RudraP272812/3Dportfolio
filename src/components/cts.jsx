import React from 'react'
import { Link } from 'react-router-dom'

const cts = () => {
  return (
    <section className='cta'>
        <p className='cta-text'> interested in a short conversation.
            <br  className='sm:block hidden'/>
            How about we team up and build something awesome together?
        </p>
        <Link to ="/contact" className='btn'> Contact me</Link>
    </section>
  )
}

export default cts
