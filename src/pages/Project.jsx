import React from 'react'
import {projects} from"../constants"
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTS from "../components/cts"
const Project = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span
          className="blue-gradient_text font-semibold
      drop-shadow"
        >
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500 w[100%]">
        <p>
          Love web development! I've made various projects alone and in college
          using open-source tech. Alongside class projects, I've added
          self-taught projects, showing my love for learning and creativity.
          Let's chat and team up for exciting projects!
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-20">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`}>
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt="project Icon"
                    className="w-0/2 h-0/2 object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="my-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins ">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live link
                </Link>
              </div>
              <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTS />
    </section>
  );
}

export default Project
