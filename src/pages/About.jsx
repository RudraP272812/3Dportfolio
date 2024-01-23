import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills,experiences } from '../constants'
import CTS from '../components/cts';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello I'm{" "}
        <span
          className="blue-gradient_text font-semibold
      drop-shadow"
        >
          Rudra
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          A passionate and skilled web developer fresh out of academia. With a
          solid foundation in HTML, CSS, and JavaScript, along with hands-on
          experience in React.js and Node.js, I'm ready to embark on my journey
          in the development industry. Proficient in Git, GitHub, and
          TypeScript, I bring a commitment to learning and a drive to contribute
          to innovative projects. Excited to kickstart my career and make a
          positive impact!
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Work experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Throughout my academic journey, I've diligently developed a strong
            proficiency in web development, showcasing a hands-on mastery of
            open-source technologies and contributing to diverse college
            projects. My ability to bridge theoretical knowledge with practical
            application is evident in my adept use of front-end technologies,
            including HTML, CSS, and JavaScript. Notably, I've seamlessly
            integrated these skills into full-stack development, employing
            frameworks such as React.js to craft dynamic and intuitive user
            interfaces.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base">
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2 ">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 pl-1 text-sm font-normal"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTS />
    </section>
  );
}

export default About
