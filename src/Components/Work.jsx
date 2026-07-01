import React, { useState } from 'react'
import work_data from '../assets/work_data';

function Work() {
    const [activeTab, setActiveTab] = useState(0); 

  return (
    <section id='experience'>
        <div className='px-5 mt-10'>
            <h2 className='text-[22px] relative font-bold text-indigo-200'><span className='text-emerald-400 text-xl pr-1'>02.</span> Where I've Worked <span className='w-4 ml-2 h-0.5 absolute top-[50%] bg-slate-600'></span></h2>
        </div>
        <div className='flex mt-5 flex-col gap-5 min-h-75'>
            <div className='relative flex flex-row overflow-x-auto border-slate-700 min-w-35 scrollbar-none'>
                {work_data.map((work, index) => {
                    return <button key={work.id} onClick={() => setActiveTab(index)} className={`h-12 px-7 text-left border-b-2 border-slate-700 font-mono text-md transition-all duration-300 whitespace-nowrap 
                                                hover:bg-emerald-500/5 hover:text-emerald-400 ${
                                                    activeTab === index ? 'text-emerald-400 font-semibold border-b-2 bg-slate-800 border-b-emerald-400' :  'text-slate-400'
                                                }`}>
                                                    {work.company}
                    </button>
                })}
            </div>
            <div className='grow px-5 pt-2'>
                <h3 className='text-lg font-semibold text-indigo-200'>
                    {work_data[activeTab].role}{' '}
                    <span className='text-emerald-400'> @{work_data[activeTab].company}</span>
                </h3>
                <p className='text-slate-400 font-semibold mt-1'>{work_data[activeTab].duration}</p>
                <ul className='flex flex-col gap-3 pt-5 text-sm text-slate-400'>
                    {work_data[activeTab].points.map((point, i) => {
                        return <li key={i} className='flex gap-4 items-start'>
                            <span className='text-emerald-400 font-semibold text-md '>▹</span>
                            <span className='text-[16px] text-slate-400'>{point}</span>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Work