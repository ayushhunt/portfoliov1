import  {BackgroundBeamsWithCollision}  from '@/components/ui/backgroundbeanswithcollision'
import { FocusCards } from '@/components/ui/focus_cards'
import { TracingBeam } from '@/components/ui/tracingbeans'
import React from 'react'
import { Children } from 'react'

const Projects = () => {
  const cards = [{
    title:"Someting",
    src:"/projects/image1.png"
  },
  {
    title:"Someting",
    src:"/projects/image2.png"
  },
  {
    title:"Someting",
    src:"/projects/image3.png"
  },
  {
    title:"Someting",
    src:"/projects/image4.png"
  },
  {
    title:"Someting",
    src:"/projects/image5.png"
  }
]
  return (
    <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pb-5 w-full h-auto'>
    
        <div className='items-center'>
        <h2 className="text-center text-3xl sm:text-3xl font-extrabold text-white mb-3">
            Projects
          </h2>
          <div className="w-14 h-1 bg-green-500 rounded-full mx-auto mb-7 pb-1.5 "></div>
            <FocusCards cards={cards}>

            </FocusCards>
        </div>
   
    </div>
  )
}

export default Projects