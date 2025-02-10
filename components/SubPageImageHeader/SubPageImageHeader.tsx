/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function SubPageImageHeader() {
  return (
    <div className='block w-full h-auto md:max-h-[300px] overflow-hidden relative'>
        <img src="/HeroImage.jpg" alt=""/>
        <div className='absolute left-0 right-0 top-0 bottom-0 bg-gray-900/60'></div>
    </div>
  )
}