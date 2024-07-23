import React from 'react'
import { IoMdNotifications } from "react-icons/io";

export default function Notification() {
  return (
      <span className="w-10 h-10 bg-gray-100 border md:mr-0 mr-16 border-gray-100 flex items-center justify-center rounded-lg relative after:w-3 after:h-3 after:rounded-full after:absolute after:top-0 after:-right-1 after:bg-red-400 after:content-['']" onClick={() => Fn.popFn("notify", true)}>
          <IoMdNotifications className="text-xl text-primary" />
      </span>
  )
}
