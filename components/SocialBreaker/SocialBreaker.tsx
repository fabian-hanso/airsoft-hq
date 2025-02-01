import React from 'react'

export default function SocialBreaker() {
    return (
        <div className='mx-auto w-7xl min-w-7xl max-w-7xl lg:px-8 mt-16 mb-16 lg:mt-28 lg:mb-28'>
            <div className='bg-stone-900 px-6 py-32 text-white'>
                <div className='text-center flex flex-col gap-4 justify-center items-center'>
                    <h2 className='text-white text-2xl md:text-3xl font-semibold max-w-2xl text-center '>Folge uns auf Instagram oder tritt unserem Server auf Discord bei!</h2>
                    <p className='text-lg text-white max-w-2xl'>Verpasse keine Updates, erhalte spannende Einblicke und vieles mehr.</p>
                    <div className='mx-auto w-auto max-w-fit flex gap-4'>
                        <a href="#" className='flex items-center gap-2 bg-blue-500 hover:bg-blue-500/50 px-2 py-1 text-white'><img src="./Instagram_Glyph_White.svg" className='w-5 h-auto'/>Instagram</a>
                        <a href="#" className='flex items-center gap-2 bg-blue-500 hover:bg-blue-500/50 px-2 py-1 text-white'><img src="./Discord-Logos/discord-mark-white.svg" className='w-5 h-auto'/>Discord</a>
                    </div>
                </div>
            </div>
        </div>
    )
}