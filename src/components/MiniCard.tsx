import React from 'react'

type MiniCardProps = {
    children? : React.ReactNode,
    className? : string
}

export const MiniCard = ({ children, className }: MiniCardProps) => {
  return (
    <div className={`bg-white flex items-center justify-center p-4 rounded-[1.5rem] border border-gray-200 hover:p-2 transition-all duration-300 ease-in-out ${className}`}>
      {children}
    </div>
  )
}