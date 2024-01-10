import React from 'react'

const ContentContainer = ({children}) => {
  return (
    <div className="flex dark:text-white text-[#6F6F6F] my-[32px] pl-[32px] pr-[92px]">
      {children}
    </div>
  )
}

export default ContentContainer