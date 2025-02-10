/* eslint-disable @next/next/no-img-element */
import { Battery0Icon, BoltIcon, CheckIcon, CreditCardIcon, FaceSmileIcon, InformationCircleIcon, MapPinIcon, ShoppingCartIcon, TicketIcon, TruckIcon, WifiIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export default function PlaygroundDetails() {
    return (
        <div className=''>
            {/* Desktop Headline */}
            <div className='hidden lg:block mb-16 lg:mb-28 mt-16 lg:mt-28 px-6 lg:px-0'>
                <h1 className='text-stone-900 text-2xl lg:text-center md:text-3xl font-semibold max-w-xl lg:mx-auto'>Area M - Airsoft Spielfeld</h1>
                <h3 className='lg:mx-auto lg:text-center text-blue-500 mt-4 text-sm flex gap-1 -ml-1 lg:justify-center items-center'><MapPinIcon className='w-5 h-auto'/>Koblenz (RLP)</h3>
            </div>

            <div className='max-w-7xl mx-auto lg:px-8 mb-16 lg:mt-28 lg:mb-28'>

                <div className='w-full aspect-video lg:aspect-[16/7] overflow-hidden bg-red-200'>
                    <img src="/Fabian-Airsoft.jpg" className='object-cover w-full h-auto object-center' alt=""/>
                </div>
                {/*  Mobile Headline */}
                <div className="block lg:hidden px-6 lg:px-0">
                    <div className='mb-10 mt-10'>
                        <h1 className='text-stone-900 text-2xl md:text-3xl font-semibold lg:text-center'>Area M - Airsoft Spielfeld</h1>
                        <h3 className="text-blue-500 flex -ml-1 text-sm lg:justify-center items-center gap-1 mt-2 lg:mt-4"><MapPinIcon className='w-5 h-auto'/>Koblenz (RLP)</h3>
                    </div>
                </div>

                <div className='max-w-7xl mx-auto px-6 lg:px-0 mt-10 md:grid md:grid-cols-3 gap-8'>
                    <div className='col-span-2 flex flex-col gap-5'>
                        <p className='text-stone-600 text-base lg:text-lg '>Die Area M befindet sich in der Nähe von Koblenz und verfügt über insgesamt 63 ehemalige Bunkerlager. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum.</p>
                        <p className='text-stone-600 text-base lg:text-lg '>Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum.</p>
                        <p className='text-stone-600 text-base lg:text-lg '>Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum.</p>
                        <p className='text-stone-600 text-base lg:text-lg '>Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum. Lorem ipsum dolor sit amet de modifique el modesto des perede mi ipsum.</p>
                    </div>
                    <div className='col-span-1 bg-stone-50 h-fit mt-8 md:mt-0 md:sticky top-8'>
                        <div className='p-6 text-sm flex flex-col gap-6'>
                            <p className='flex gap-3 text-stone-900 items-center'><WifiIcon className='w-5 h-5 flex-shrink-0 text-blue-500'/>WLAN verfügbar</p>
                            <p className='flex gap-3 text-stone-900 items-center'><Battery0Icon className='w-5 h-5 flex-shrink-0 text-blue-500'/>HPA Füllstation</p>
                            <p className='flex gap-3 text-stone-900 items-center'><FaceSmileIcon className='w-5 h-5 flex-shrink-0 text-blue-500'/>Sanitäre Anlagen</p>
                            <p className='flex gap-3 text-stone-900 items-center'><CheckIcon className='w-5 h-5 flex-shrink-0 text-blue-500'/>Leihausrüstung buchbar</p>
                            <p className='flex gap-3 text-stone-900 items-center'><ShoppingCartIcon className='w-5 h-5 flex-shrink-0 text-blue-500'/>Shop vor Ort</p>
                            <p className='flex gap-3 text-stone-900 items-center'><CreditCardIcon className='w-5 h-5 flex-shrink-0 text-blue-500'/>Kartenzahlung möglich</p>
                            <p className='flex gap-3 text-stone-900 items-center'><BoltIcon className='w-5 h-5 flex-shrink-0 text-blue-500'/>Lademöglichkeiten vorhanden</p>
                            <p className='flex gap-3 text-stone-900 items-center'><WrenchScrewdriverIcon className='w-5 h-5 flex-shrink-0 text-blue-500'/>Begadi Feldsupport</p>
                            <p className='flex gap-3 text-stone-900 items-center'><TruckIcon className='w-5 h-5 flex-shrink-0 text-blue-500'/>Ausreichend Parkmöglichkeiten</p>
                            <div className='w-full flex flex-col lg:flex-row gap-4'>
                                <a href="https://www.airsoft-koblenz.de/" target='_blank' className='w-full h-auto px-2 py-1 bg-stone-900 hover:bg-blue-500 text-center flex gap-2 justify-center items-center'><InformationCircleIcon className='w-5 h-auto'/>Infos</a>
                                <a href="https://www.airsoft-koblenz.de/" target='_blank' className='w-full h-auto px-2 py-1 bg-stone-900 hover:bg-blue-500 text-center flex gap-2 justify-center items-center'><TicketIcon className='w-5 h-auto'/>Tickets</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
