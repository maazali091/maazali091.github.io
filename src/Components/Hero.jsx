import React from 'react'

function Hero() {
  return (
    <section className='px-5 py-5' id='about'>
        <div>
            <span className='text-emerald-400 text-[19px] font-semibold tracking-wider'>Hi, my name is</span>
            <h2 className='pt-1.5 text-5xl font-bold text-indigo-200'>Maaz Ali.</h2>
            <h1 className='text-slate-400 font-bold text-[32px]/9 max-w-65 pt-3'>I build things for the web.</h1>
            <p className='pt-5 text-[16px] text-slate-500  font-semibold'>I'm a software engineer specializing in building (and occasionaly designing) exceptional digital experiences. 
                Currently, I'm focused on building accessibe, human-centered  products at <span className='text-emerald-400'>Upstatement.</span>
            </p>
            <a href="#course" className='px-7 rounded py-3 text-emerald-400 mt-10 font-semibold border-2 tracking-wider border-emerald-400 inline-block transition-all duration-300 shadow-xl shadow-emerald-900 hover:bg-emerald-400 hover:text-slate-900'>Check out my course!</a>
        </div>
    </section>
  )
}

export default Hero