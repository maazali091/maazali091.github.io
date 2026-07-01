import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const navLink = [
        {id: "01", link:"About", href:"#about" },
        {id: "02", link:"Experience", href:"#experience" },
        {id: "03", link:"Work", href:"#work" },
        {id: "04", link:"Contact", href:"#contact" },
    ];
  return (
    <header className='flex justify-between items-center h-22.5 px-5 relative'>
        <div className='flex relative items-center gap-2 font-mono tarcking-tight text-emerald-400'>         
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-12 h-12 text-emerald-400 stroke-current stroke-6 overflow-visible fill-transparent transition-all duration-300 group-hover:fill-emerald-500/5">
                <polygon points="50,8 90,31 90,77 50,100 10,77 10,31"  className="line-join-round"/>
            </svg>
            <div className="flex items-center justify-center mt-px w-12 h-12  bg-transparent text-emerald-400 text-shadow-emerald-900 font-bold text-2xl">M</div>
        </div>
        
         <div className="z-50 cursor-pointer">
            {isOpen ? (
                <X size={32} className='z-55 text-emerald-500' onClick={() => setIsOpen(false)} />
            ) : (
                <Menu size={32} className=' text-emerald-500' onClick={() => setIsOpen(true)}  />
              )
            }
         </div> 
        <div className={`fixed inset-0 bg-zinc-950/60 backdrop-blur-sm transition-opacity duration-500 z-30 ${isOpen ? 'opacity-80 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)}></div>
        <nav className={`flex flex-col gap-5 fixed top-0 right-0 w-62.5 h-screen transition-all duration-500 z-40 ease-in-out border-emerald-500 px-4 py-3 bg-slate-800 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <ol className='flex flex-col gap-5 pt-13 px-5 text-center text-lg'>
                {navLink.map((item, index) => {
                    return <li key={index}><a href={item.href} className='text-slate-400 hover:text-emerald-500'><span className='block text-sm font-semibold pb-0.5 text-emerald-500'>0{index + 1}. </span>{item.link} </a></li>
                })}
            </ol>
            <a href="#resume" className='text-center px-7 py-2 bg-transparent border-2 border-emerald-500 text-emerald-500 font-semibold rounded mx-auto mt-5 hover:bg-emerald-500'>Resume</a>
        </nav>
        
    </header>
  )
}

export default Navbar