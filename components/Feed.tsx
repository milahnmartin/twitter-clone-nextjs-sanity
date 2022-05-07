import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import Tweetbox from './Tweetbox'

function Feed() {
  return (
    <div className="col-span-7 lg:col-span-5 lg:border-x">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 font-bold">Home</h1>
        <RefreshIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>
      {/* tweetbox */}
      <Tweetbox />
    </div>
  )
}

export default Feed
