import React from 'react'
import other_projects_data from '../assets/other_projects_data'
import { Folder, GitBranch, Share } from 'lucide-react'
import projects_data from '../assets/Projects_data'

function OtherProjects() {
  return (
    <div>
        <div className='px-5 pt-5 text-center'>
            <h2 className='text-[22px] font-bold text-indigo-200'>Other Noteworthy Projects</h2>
            <span className='text-emerald-400 font-medium text-md'>View the archive</span>
        </div>
        <div className='px-5'>
            {other_projects_data.map((work, index) => {
                return <div className='p-5 my-10 rounded bg-slate-800'>
                    <div className='flex justify-between items-center py-3'>
                        <Folder size={35} className='text-emerald-400' />
                        <div className='flex gap-3'>
                            <GitBranch size={20}  className='text-slate-400 hover:text-indigo-200'/>
                            <Share size={20} className='text-slate-400 hover:text-indigo-200' />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold text-indigo-200'>{work.title}</h2>
                        <p className='text-slate-400 pt-4 font-semibold text-[15px]'>{work.desc}</p>
                    </div>
                    <div className='pt-5 text-[14px] font-semibold text-slate-500'><span className=''>{work.language_1}</span>, <span>{work.language_2}</span>, <span>{work.language_3}</span></div>
                </div>
            })}
            <button className='px-7 py-3 text-emerald-400 font-semibold  border-2 border-emerald-400 rounded cursor-pointer transition-all duration-300 shadow-lg shadow-emerald-400 hover:bg-emerald-400 hover:text-slate-950'>Show More</button>
        </div>
    </div>
  )
}

export default OtherProjects