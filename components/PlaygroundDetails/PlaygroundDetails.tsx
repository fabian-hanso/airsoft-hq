/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { InformationCircleIcon, MapPinIcon, TicketIcon } from '@heroicons/react/24/outline'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

export default function PlaygroundDetails({data}: any) {

    const renderOption = {
        renderMark: {
            [MARKS.BOLD]: (text: any) => <span className='font-semibold'>{text}</span>,
            [MARKS.ITALIC]: (text: any) => <span className='font-extralight'>{text}</span>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p className='mb-8 last-of-type:mb-0'>{children}</p>,
            [BLOCKS.HEADING_2]: (node: any, children: any) => <p className='mb-4 font-semibold text-xl text-blue-500'>{children}</p>,
            [BLOCKS.QUOTE]: (node: any, children: any) => <p className='mb-4 font-serif text-blue-500'>{children}</p>,
            [BLOCKS.EMBEDDED_ASSET]: (node: any) => <img
            src={`https://${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
            className='mb-8'
          />,
            // [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => <img className='mb-8 last-of-type:mb-0' src={node}>{children}</img>
        },
    }

    return (
        <div className=''>
            {/* Desktop Headline */}
            <div className='hidden lg:block mb-16 lg:mb-28 mt-16 lg:mt-28 px-6 lg:px-0'>
                <h1 className='text-stone-900 text-2xl lg:text-center md:text-3xl font-semibold max-w-xl lg:mx-auto'>{data.fields.spielfeldName}</h1>
                <h3 className='lg:mx-auto lg:text-center text-blue-500 mt-4 text-sm flex gap-1 -ml-1 lg:justify-center items-center'><MapPinIcon className='w-5 h-auto'/>{data.fields.spielfeldLocation}</h3>
            </div>

            <div className='max-w-7xl mx-auto lg:px-8 mb-16 lg:mt-28 lg:mb-28'>

                <div className='w-full aspect-video lg:aspect-[16/7] overflow-hidden bg-red-200'>
                    <img src={data.fields.spielfeldTitelbild.fields.file.url} className='object-cover w-full h-full object-center' alt=""/>
                </div>
                {/*  Mobile Headline */}
                <div className="block lg:hidden px-6 lg:px-0">
                    <div className='mb-10 mt-10'>
                        <h1 className='text-stone-900 text-2xl md:text-3xl font-semibold lg:text-center'>{data.fields.spielfeldName}</h1>
                        <h3 className="text-blue-500 flex -ml-1 text-sm lg:justify-center items-center gap-1 mt-2 lg:mt-4"><MapPinIcon className='w-5 h-auto'/>Koblenz (RLP)</h3>
                    </div>
                </div>

                <div className='max-w-7xl mx-auto px-6 lg:px-0 mt-10 md:grid md:grid-cols-3 gap-8'>
                    <div className='col-span-2 text-stone-900'>
                        { documentToReactComponents(data.fields.spielfeldBeschreibung, renderOption) }
                    </div>
                    <div className='col-span-1 bg-stone-50 h-fit mt-8 md:mt-0 md:sticky top-8'>
                        <div className='p-6 text-sm flex flex-col gap-6'>
                            {data.fields.spielfeldFeatures.map((feature: any) => (
                                <div className='flex gap-3 text-stone-900 items-center' key={feature.fields.featureName}>
                                    <img src={feature.fields.featureIcon.fields.file.url} className='w-5 h-5 flex-shrink-0 text-blue-500'/>
                                    <p>{feature.fields.featureName}</p>
                                </div>
                            ))}
                            <div className='w-full flex flex-col lg:flex-row gap-4'>
                                <a href={data.fields.spielfeldLink} target='_blank' className='w-full h-auto px-2 py-1 bg-stone-900 hover:bg-blue-500 text-center flex gap-2 justify-center items-center'><InformationCircleIcon className='w-5 h-auto'/>Infos</a>
                                <a href={data.fields.ticketLink} target='_blank' className='w-full h-auto px-2 py-1 bg-stone-900 hover:bg-blue-500 text-center flex gap-2 justify-center items-center'><TicketIcon className='w-5 h-auto'/>Tickets</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
