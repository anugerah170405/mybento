import { Check } from 'lucide-react'
import React from 'react'

type ButtonBoxProps = {
    Icon?: React.ReactNode,
    onClick? : () => void
}

export const ButtonBox = ({ Icon = <Check/>, onClick}: ButtonBoxProps) => {
    return (
        <button className="h-12 w-12 flex items-center justify-center p-2 rounded-[1.5rem] border border-gray-200 hover:bg-gray-100 hover:scale-105 transition-transform cursor-pointer"
        onClick={onClick}>
            {Icon}
        </button>
    )
}