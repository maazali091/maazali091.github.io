import { Bird, GitBranch, Link, LucideGitCompareArrows, LucideInspectionPanel, Star } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div className='p-5 mt-15'>
        <div className='flex py-5  justify-around  text-slate-300'>
            <a href=""><GitBranch size={23} /></a>
            <a href=""><LucideInspectionPanel size={23}/></a>
            <a href=""><Bird size={23} /></a>
            <a href=""><Link size={23} /></a>
            <a href=""><LucideGitCompareArrows size={23} /></a>
        </div>
        <div>
            <p className='text-center text-sm text-slate-400'>Designed & Built by Brittany Chiang</p>
            <div className='flex justify-center gap-5 pt-5 items-center'>
                <a href="" className='flex items-center gap-2'><Star size={15} /> 8,263</a>
                <a href="" className='flex items-center gap-2'><GitBranch size={15} /> 4,266</a>
            </div>
        </div>
    </div>
  )
}

export default Footer