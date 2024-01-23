import React from 'react'
import {Link}  from 'react-router-dom';
import arrow from '../assets/icons/arrow.svg'
const InfoBox = ({text,link,btnText}) => (
    <div className='info-box'>
      <p className="font-medium sm:text-xl text-center">{text} </p> 
      <Link to = {link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} alt="Arrow" className="w-4 h-4 object-contain"/>
      </Link>
    </div>
  )
const renderContent = {
    1:(
        <h1 className='sm:text-xl sm:leading-snug 
        text-center neo-brutalism-blue py-9 text-white mx-5'> Hi, I am <span className="font-semibold">
            Rudra </span>😎 
            <br className="mt-4" />  
            &nbsp; &nbsp; Indian, Canadian students collaborate, fostering synergy.  &nbsp; &nbsp;
            </h1>
           
    ),
    2:(
        <InfoBox 
        text ="Striving to independently develop and contribute to personal projects, I am dedicated to acquiring diverse skills through continuous learning."
        link="/about"
        btnText="Learn more about me"/>
    ),
    3:(
        <InfoBox 
        text ="As a fresher, built multiple projects to accelerate learning and skills. Curious to see my projects?"
        link="/projects"
        btnText="Explore my portfolio"/> 
    ),
    4:(
        <InfoBox 
        text ="Seeking an enthusiastic and dedicated fresher to contribute to an ongoing project. "
        link="/contact"
        btnText="Let's discuss"/>
    ),
  }
  
const HomeInfo = ({curretstage}) => {
  return renderContent[curretstage]||null;
}

export default HomeInfo
