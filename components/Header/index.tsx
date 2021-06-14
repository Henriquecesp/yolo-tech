import React from 'react'

export const Header = (): JSX.Element => {
  return (
    <div className="h-56 w-full bg-black-800 flex items-center justify-center">
      <h1 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">
        Cursos disponíveis.
      </h1>
    </div>
  )
}
