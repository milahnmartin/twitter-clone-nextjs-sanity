import React, { useState } from 'react'
import {
  BellIcon,
  BookmarkAltIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  MailIcon,
  UserIcon,
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
  const [signedIn, setSignedIn] = useState(false)
  return (
    <div className="col-span-2 flex flex-col items-center md:items-start">
      <img
        className="m-3 h-10 w-10 cursor-pointer hover:text-blue-500"
        src="https://links.papareact.com/drq"
        alt="twit-img"
      />
      <SidebarRow Icons={HomeIcon} Title="Home" />
      <SidebarRow Icons={HashtagIcon} Title="Explore" />
      <SidebarRow Icons={BellIcon} Title="Notifications" />
      <SidebarRow Icons={MailIcon} Title="Messages" />
      <SidebarRow Icons={BookmarkIcon} Title="Bookmarks" />
      <SidebarRow Icons={CollectionIcon} Title="Lists" />
      <SidebarRow Icons={UserIcon} Title={signedIn ? 'Profile' : 'Sign In'} />
      <SidebarRow Icons={DotsCircleHorizontalIcon} Title="More" />
    </div>
  )
}

export default Sidebar
