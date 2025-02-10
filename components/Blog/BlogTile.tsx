/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FireIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function BlogTile({post}: any) {

    return (
        <Link href={"/blog/" + post.fields.slug} className='w-full h-auto flex flex-col group'>
            <div className='w-full aspect-video overflow-hidden bg-blue-500'>
                <img src={post.fields.titelbild.fields.file.url} className='w-full h-full object-cover group-hover:opacity-40 group-hover:scale-105 transition-all' alt=""/>
            </div>
            <div className='mt-3 w-fit bg-blue-500 px-2 py-1 text-white text-xs group-hover:pl-3 transition-all flex gap-2'>
               <FireIcon className='hidden group-hover:block h-4 w-auto transition-all'/><p>{post.fields.subHeadline}</p>
            </div>
            <div className='w-full mt-3 flex flex-col gap-3'>
                <h2 className='text-md text-stone-900 font-semibold tracking-normal'>{post.fields.titel}</h2>
                <p className='text-sm text-stone-900 line-clamp-3'>{post.fields.textPreview}</p>
            </div>
            <div className='w-full mt-3 flex flex-col gap-3'>
                <p className='text-xs text-stone-900'>Tags: {" "}
                    {post.fields.tags.map((item: any) => (
                    <span className="text-blue-500 after:content-[','] last-of-type:after:content-[''] mr-1" key={item.sys.id}>{item.fields.anzeigename}</span>
                ))}
                </p>
            </div>
        </Link>
    )
}
