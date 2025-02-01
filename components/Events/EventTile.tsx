import React from 'react'
import {
    InformationCircleIcon,
    TicketIcon
  } from '@heroicons/react/24/outline'

export default function EventTile() {
    return (
        <div href='#' className='w-full h-auto flex flex-col'>
            <div className='w-full aspect-video overflow-hidden relative'>
                <img src="./Fabian-Airsoft.jpg" className='w-full h-full object-cover object-top'/>
                <div className='absolute top-0 right-0 px-2 py-1 bg-blue-500'>
                    <p className='text-sm'>15.12.2025</p>
                </div>
            </div>
            <div className='mt-3 w-fit bg-blue-500 px-2 py-1 text-white text-xs'>
                Area M - Koblenz
            </div>
            <div className='w-full mt-3 flex flex-col gap-3'>
                <h2 className='text-md text-stone-900 font-semibold tracking-normal'>1,5 Joule Spieltag auf der Area M in Koblenz (Rheinland-Pfalz)</h2>
                <p className='text-sm text-stone-900'>Die Area M zeichnet sich durch 23 teilweise bespielbare Bunker aus. Insgesamt verfügt sie über 45.000qm Spielfläche.</p>
                <div className='grid grid-cols-2 gap-4'>
                    <a href="https://www.airsoft-koblenz.de/" target='_blank' className='w-full h-auto px-2 py-1 bg-stone-900 hover:bg-blue-500 text-center flex gap-2 justify-center items-center'><InformationCircleIcon className='w-5 h-auto'/>Infos</a>
                    <a href="https://www.airsoft-koblenz.de/" target='_blank' className='w-full h-auto px-2 py-1 bg-stone-900 hover:bg-blue-500 text-center flex gap-2 justify-center items-center'><TicketIcon className='w-5 h-auto'/>Tickets</a>
                </div>
            </div>
            <div className='w-full mt-3 flex flex-col gap-3'>
                <p className='text-xs text-stone-900'>Tags: <span className='text-blue-500'>Spieltag</span>, <span className='text-blue-500'>Area-M</span>, <span className='text-blue-500'>1,5 Joule</span></p>
            </div>
        </div>
    )
}
