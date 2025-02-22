/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { ArrowRightIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function PlaygroundTile({data}: any) {

    console.log(data)

    return (
        <Link href={`/spielfelder/${data.fields.spielfeldSlug}`} className='w-full h-auto flex flex-col group'>
            <div className='w-full aspect-video overflow-hidden bg-blue-500'>
                <img src={data.fields.spielfeldTitelbild.fields.file.url} className='w-full h-full object-cover group-hover:opacity-40 group-hover:scale-105 transition-all' alt=""/>
            </div>

            <div className='flex flex-row justify-between gap-8 p-3 items-center bg-stone-100 group-hover:bg-stone-200'>
                <div>
                    <div className='w-fit bg-blue-500 px-2 py-1 text-white text-xs flex gap-1'>
                    <MapPinIcon className='w-4 h-4 text-white'/>{data.fields.spielfeldLocation}
                    </div>
                    <h2 className='text-md text-stone-900 font-normal tracking-normal mt-3'>{data.fields.spielfeldName}</h2>
                </div>
                <div className='h-full w-10 flex justify-center items-center'>
                    <ArrowRightIcon className='w-6 h-6 text-stone-900 group-hover:text-blue-500 transition-all'/>
                </div>
            </div>
        </Link>
    )
}
