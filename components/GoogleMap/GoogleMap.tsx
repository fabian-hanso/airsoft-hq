"use client"

import React from 'react'
import {APIProvider, Map} from '@vis.gl/react-google-maps';

export default function GooglMap() {
    return (
        <div className='max-w-7xl mx-auto overflow-hidden lg:px-8 mt-16 mb-16 lg:mt-28 lg:mb-28 aspect-square lg:aspect-video'>
            <div className='mb-10'>
                <h2 className='text-stone-900 text-2xl md:text-3xl font-semibold'>Spielfelder</h2>
            </div>
            <APIProvider apiKey="">
                <Map
                defaultCenter={{lat: 22.54992, lng: 0}}
                defaultZoom={3}
                minZoom={4}
                gestureHandling={'greedy'}
                >
                    {/* Marker */}
                </Map>
            </APIProvider>
        </div>
    )
}
