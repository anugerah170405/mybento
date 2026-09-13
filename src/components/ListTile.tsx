type ListTileProps = {
  label: string
  children: React.ReactNode
}

export const ListTile = ({ label, children }: ListTileProps) => {
  return (
    <div className="relative pt-3">
      {/* Label */}
      <div className="absolute left-4 top-0 z-10 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500">
        {label}
      </div>

      {/* Content */}
      <div className="rounded-[2rem] border border-gray-200 bg-white px-5 py-4 text-base text-gray-700 transition-transform duration-300 ease-out hover:scale-[0.98]">
        {children}
      </div>
    </div>
  )
}