import { ChevronRight, LucideChevronRightCircle, Play } from 'lucide-react'
import profile_img from '../assets/profile.png'
import React from 'react'

function About() {
    const languages = [
        {id:"01", language: "Javascript (ES6+)"},
        {id:"02", language: "React"},
        {id:"03", language: "Tailwind CSS"},
        {id:"04", language: "Node.js"},
        {id:"05", language: "HTML"},
        {id:"06", language: "CSS"},
    ]
  return (
    <section className='px-5 py-10' id='about'>
        <div>
            <h2 className='text-[24px] relative font-bold text-indigo-200'><span className='text-emerald-400 text-xl pr-1'>01.</span> About Me <span className='w-20 ml-2 h-0.5 absolute top-[50%] bg-slate-600'></span></h2>
            <div className='pt-8'>
                <p className='text-[16px] text-slate-400 font-normal max-w-67.5'>Hallo! My name is Maaz ali and I enjoy creating things that  live on the internet. My interest in web
                    development started back in 2021 when I decided  to try editing custom Tumblr themes - turns out hacking together 
                    a custom reblog button tought ma a lot about HTML & CSS! <br /><br />Fast-forward to today, and I've had the privilege 
                    of working at <span className='text-emerald-400'>an advertising agency</span>, <span className='text-emerald-400'>a start-up</span>, <span className='text-emerald-400'>a huge corporation</span>, and
                    <span className='text-emerald-400'> a student-led design studio</span>. My main focus these days is building accessible, inclusive products and
                    digital experiences at <span className='text-emerald-400'>Upstatement</span> for a variety of clients. <br /><br />
                    I also recently <span className='text-emerald-400'>launched a course </span>that  covers everything you need to build a web app with the spotify 
                    API using Node & React. <br /><br />
                    Here are a few technologies  I've been working with recently: 
                </p>
                <div className='grid grid-cols-2 gap-5  mt-8'>
                    {languages.map((item, index) => {
                        return <div key={index}><h4 className='flex gap-3  items-top text-[15px]'><Play size={10} className='mt-0.5 text-emerald-400 cursor-pointer' /> {item.language}</h4></div>
                    })}
                </div>
            </div>
        </div>

        <div className="mt-12 px-5">
            <div className="group relative w-50 h-50 mx-auto">
                <div className='absolute inset-0 bg-emerald-400/20 blur-xl rounded-full transition-all duration-500 group-hover:opacity-0 group-hover:scale-50 z-0'></div>
                <div className="w-50 h-50 absolute top-3 left-3 bg-transparent rounded-lg border-2  border-emerald-400 transition-all duration-500 ease-out group-hover:left-5 group-hover:top-5  z-0"></div>
                <img src={profile_img} alt="frontend web developer image" className='relative z-10 rounded-md w-full h-full object-cover transition-transform duration-500 shadow-md group-hover:scale-[1.02]' />
                <div className="absolute inset-0 bg-emerald-400/50 rounded-md z-20 transition-opacity duration-500 group-hover:opacity-0"></div>

            </div>
        </div>
    </section>
  )
}

export default About