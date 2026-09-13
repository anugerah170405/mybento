import { type ReactNode } from 'react'

type BentoCardProps = {
  children: ReactNode,
  className?: string,
  span?: string,
  actions?: ReactNode,
}

export const BentoCard = ({ children, className = '', span='', actions }: BentoCardProps) => {
  return (
    <div className={`bg-white p-2 border border-gray-200 rounded-[2rem] shadow-lg ${span} ${actions?'flex flex-row gap-2':'h-full w-full'}`}>
      <div className={`bg-gray-100 p-6 rounded-[1.5rem] h-full w-full ${className}`}>
        {children}
      </div>
      {actions && (
        <div className="flex flex-col justify-start gap-2">
          {actions}
        </div>
      )}
    </div>
  )
}