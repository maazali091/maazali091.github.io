import React from 'react'
import projects_data from '../assets/Projects_data'
import { GitBranch, Share } from 'lucide-react'

function Projects() {
  return (
    <section id='work'>
        <div className='px-5 mt-15'>
            <h2 className='text-[22px] relative font-bold text-indigo-200'><span className='text-emerald-400 text-xl pr-1'>03.</span> Some Things I've Built </h2>
        </div>
        <div className='px-5'>
          {projects_data.map((project, index) => {
            return <div key={index} className='px-7 py-6 rounded my-10 bg-slate-800'>
              <span className='text-emerald-400 font-semibold text-md tracking-wide pb-3'>{project.category}</span>
              <h2 className='text-2xl font-bold pb-5 text-indigo-100'>{project.project_name}</h2>
              <p className='text-[15px] text-slate-400 font-semibold'>{project.project_desc} <br /> <br />{project.extra_desc}</p>
              <div className='pt-5 flex gap-4'>
                <a href={project.git_repo} className='text-indigo-200'><GitBranch size={20}/></a>
                <a href={project.link}  className='text-indigo-200'><Share size={20} /></a>
              </div>
            </div>
          })}
        </div>
    </section>
  )
}

export default Projects