import React from 'react'

function GetinTouch() {
  return (
    <div className='px-5 py-6 mt-20' id='contact'>
        <div className='flex flex-col items-center gap-3'>
            <span className='text-emerald-400 text-xl tracking-wide font-medium'><span className='text-[16px]'>04.</span> What's Next?</span>
            <h2 className='text-4xl font-bold text-indigo-200'>Get In Touch</h2>
            <p className='text-center px-2 text-slate-400 pt-4 font-semibold text-[15px]'>Although I'm not currently looking for any new opportunities,my inbox is always open. ether you have a question or just want to say hi, i'll try my best to get back to you!</p>
            <button className='px-7 py-3 relative top-6 text-emerald-400 font-semibold rounded bg-transparent border-2 border-emerald-400'>Say Hallo!</button>
        </div>
    </div>
  )
}

export default GetinTouch