import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {
  return (
    <div className="col-span-3 mt-2 hidden px-2 lg:inline">
      {/* SEARCH BOX */}
      <div className="group mt-2 flex cursor-pointer items-center space-x-2 rounded-full border-2 border-white bg-gray-100 p-3 outline-none focus-within:border-twitter">
        <SearchIcon className="h-5 w-5 text-gray-400 group-focus-within:text-twitter" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 bg-transparent outline-none"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="ultrafyy"
        options={{ height: 900 }}
      />
    </div>
  )
}

export default Widgets
