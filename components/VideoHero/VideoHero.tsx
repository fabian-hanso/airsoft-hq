import React from 'react'

function VideoHero() {
  return (
    // Desktop only
    <>
    <div className='hidden md:block w-full h-auto md:max-h-[500px] overflow-hidden relative'>
        <video autoPlay muted loop id="myVideo">
            <source src="/HeroVideoMain.mp4" type="video/mp4" />
        </video>
        <div className='absolute left-0 right-0 top-0 bottom-0 bg-slate-900/90'></div>
        <div className="absolute top-0 right-0 left-0 bottom-0 flex flex-row items-center">
            <div className="mx-auto w-7xl min-w-7xl max-w-7xl p-6 lg:px-8 flex-1 flex flex-col gap-8">
                <h1 className='font-regular text-4xl leading-5'><span className='font-bold text-blue-500'>Airsoft HQ</span> - Dein Zuhause</h1>
                <p className='max-w-2xl text-lg'>Willkommen im Zuhause der deutschen Airsoft-Community! Hier findest du regelmäßige Updates, Angebote, kannst Kontakte finden & dein Equipment kaufen / verkaufen.</p>
                <a href="https://discord.gg/UuYMfATHzf" className="px-3 py-2 bg-white hover:bg-white/90 w-fit flex gap-3 items-center group text-stone-700">
                    <img src='/Discord-Logos/discord-logo-blue.svg' className='h-4 w-auto' alt='Discord Image'/>
                    {/* <p className='text-sm'>Discord</p> */}
                </a>
            </div>
        </div>
    </div>

    <div className='block md:hidden w-full h-auto md:max-h-[500px] overflow-hidden relative'>
        <img src="/HeroImage.jpg"/>
        <div className='absolute left-0 right-0 top-0 bottom-0 bg-gray-900/60'></div>
    </div>
</>
  )
}

export default VideoHero