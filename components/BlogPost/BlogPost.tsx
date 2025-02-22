/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FireIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

export default function Post({post}: any) {

    function formatDate(date: string) {

        const months = [
            'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
            'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
        ];

        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = months[d.getMonth()];
        const year = d.getFullYear();
      
        return `${day}. ${month} ${year}`;
    }

    const formattedDate = formatDate(post.sys.createdAt);

    const renderOption = {
        renderMark: {
            [MARKS.BOLD]: (text: any) => <span className='font-semibold'>{text}</span>,
            [MARKS.ITALIC]: (text: any) => <span className='font-extralight'>{text}</span>,
          },
          renderNode: {
            [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p className='mb-8 last-of-type:mb-0'>{children}</p>,
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
        <div className='mx-auto w-7xl min-w-7xl max-w-7xl p-6 lg:px-8 mt-16 mb-16 lg:mt-28 lg:mb-28'>
            <div className='w-full h-auto'>
                <div className='w-fit bg-blue-500 px-2 py-1 text-white text-xs group-hover:pl-3 transition-all flex gap-2 lg:mx-auto'>
                <FireIcon className='block h-4 w-auto transition-all'/> {post.fields.subHeadline}
                </div>
                <div className='mb-16 lg:mb-28 mt-5'>
                    <h2 className='text-stone-900 text-2xl lg:text-center md:text-3xl font-semibold max-w-xl lg:mx-auto'>{post.fields.titel}</h2>
                    <p className='lg:mx-auto lg:text-center text-blue-500 mt-4 text-sm'>{formattedDate}</p>
                </div>
                <div className='w-full aspect-video lg:aspect-[16/7] overflow-hidden'>
                    <img src={post.fields.titelbild.fields.file.url} className='object-cover w-full h-auto object-center' alt=""/>
                </div>
                <div className='max-w-3xl mx-auto mt-16 flex flex-col'>
                    <div className='text-stone-900'>
                    { documentToReactComponents(post.fields.content, renderOption) }
                    </div>
                    <div className='flex gap-3 mt-4 lg:mt-8'>
                        <div className='w-12 h-12 bg-red-100 overflow-hidden'>
                            <img src={post.fields.autor.fields.image.fields.file.url} className='w-full h-full object-cover object-center' alt=""/>
                        </div>
                        <div>
                            <p className='text-blue-500 font-semibold'>{post.fields.autor.fields.name}</p>
                            <p className='text-stone-900'>{post.fields.autor.fields.rolle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
