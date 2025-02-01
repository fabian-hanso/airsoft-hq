import React from 'react'
import BlogTile from './BlogTile'

export default function BlogOverview() {
    return (
        <div className='mx-auto w-7xl min-w-7xl max-w-7xl p-6 lg:px-8 mt-16 mb-16 lg:mt-28 lg:mb-28'>
            <div className='mb-10'>
                <h2 className='text-stone-900 text-2xl md:text-3xl font-semibold'>Blogbeiträge</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                <BlogTile />
                <BlogTile />
                <BlogTile />
            </div>
        </div>
    )
}