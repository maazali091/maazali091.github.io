import { Menu, Terminal, X } from 'lucide-react'
import React, { useState } from 'react'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    
    const navLinks = [
        {name: "About", href: "#about"},
        {name: "Experience", href: "#experience"},
        {name: "Work", href: "#work"},
        {name: "Contact", href: "#contact"},
    ]
  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900'>
        <div className='max-w-6xl mx-auto px-4 h-18 flex items-center relative justify-between'>
            <div className='flex relative items-center gap-2 font-mono tarcking-tight text-emerald-400'>         
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-emerald-400 stroke-current stroke-[7] fill-transparent transition-all duration-300 group-hover:fill-emerald-500/5">
                    <polygon points="50,8 90,31 90,77 50,100 10,77 10,31"  className="line-join-round"/>
                </svg>
                <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-transparent text-emerald-400   text-shadow-emerald-400 font-bold text-4xl/3">M</div>
            </div>
            <ol className='hidden md:flex'>
                {navLinks.map((item) => {
                    return <li><a href={item.href}>{item.name}</a></li>
                })}
            </ol>
            <button className='md:hidden p-2 text-zinc-50 z-30 absolute right-5 hover:text-zinc-100 transition-colors' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className=''>
                {isOpen && 
                    <div className='flex flex-col items-start gap-5 absolute h-screen px-5 py-10 top-0 right-0 w-50 bg-zinc-500'>
                        <ol className='flex flex-col gap-2.5'>
                            {navLinks.map((item) => {
                                return <li><a href={item.href}>{item.name}</a></li>
                            })}
                        </ol>
                        
                <a href="#contact" onClick={() => setIsOpen(false)} className=' text-center px-4 py-2 bg-emerald-600 text-zinc-50 font-semibold text-sm rounded-lg'>Let's Talk</a>
                    </div>
                }
           </div>
        </div>
    </nav>
  )
}

export default Navbar