import React, { SVGProps } from 'react'
interface Props {
  Icons: (props: SVGProps<SVGSVGElement>) => JSX.Element
  Title: string
}

function SidebarRow({ Icons, Title }: Props) {
  return (
    <div className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full py-3 px-4 hover:bg-gray-100">
      <Icons className="h-6 w-6 " />
      <p className="hidden text-base font-semibold group-hover:text-twitter md:inline-flex lg:text-xl">
        {Title}
      </p>
    </div>
  )
}

export default SidebarRow
