import { FireIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function BlogTile() {
    return (
        <a href='#' className='w-full h-auto flex flex-col group'>
            <div className='w-full aspect-video overflow-hidden bg-blue-500'>
                <img src="./HeroImage.jpg" className='w-full h-full object-cover group-hover:opacity-40 group-hover:scale-105 transition-all'/>
            </div>
            <div className='mt-3 w-fit bg-blue-500 px-2 py-1 text-white text-xs group-hover:pl-3 transition-all flex gap-2'>
               <FireIcon className='hidden group-hover:block h-4 w-auto transition-all'/> Einsteiger-Guide
            </div>
            <div className='w-full mt-3 flex flex-col gap-3'>
                <h2 className='text-md text-stone-900 font-semibold tracking-normal'>Dies ist eine Beispiel-Überschrift, die über zwei ganze Zeilen hinweg fließen kann</h2>
                <p className='text-sm text-stone-900'>Dies ist ein einfacher Lückenfüller Text zum testen, wie die Komponente mit etwas mehr Text aussehen würde.</p>
            </div>
            <div className='w-full mt-3 flex flex-col gap-3'>
                <p className='text-xs text-stone-900'>Tags: <span className='text-blue-500'>Einsteiger</span>, <span className='text-blue-500'>Airsoft</span>, <span className='text-blue-500'>Guide</span></p>
            </div>
        </a>
    )
}
