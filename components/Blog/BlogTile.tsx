import React from 'react'

export default function BlogTile() {
    return (
        <a href='#' className='w-full h-auto flex flex-col'>
            <div className='w-full aspect-video overflow-hidden'>
                <img src="./HeroImage.jpg" className='w-full h-full object-cover'/>
            </div>
            <div className='mt-3 w-fit bg-blue-500 px-2 py-1 text-white text-xs'>
                Einsteiger-Guide
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
