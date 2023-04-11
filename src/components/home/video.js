import React from 'react'

function Video() {
  return (
    <div className='py-20 bg-slate-100 px-30 md:px-28'>
    <div className=" aspect-w-16 aspect-h-9">
        <iframe
        src="https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        ></iframe>
    </div>
 </div>
  )
}

export default Video