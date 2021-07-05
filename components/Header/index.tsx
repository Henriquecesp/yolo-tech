import React from 'react'
import { useRouter } from 'next/router'
import { HiArrowNarrowLeft } from 'react-icons/hi'

interface HeaderProps {
  title?: JSX.Element | string
  description?: JSX.Element | string
}

export const Header = ({ title, description }: HeaderProps): JSX.Element => {
  const router = useRouter()

  return (
    <div className="w-full bg-black-800 shadow-sm">
      <div className="h-56 max-w-2xl w-full mx-auto bg-black-800 flex items-center justify-start relative">
        <div
          className="absolute top-0 m-4 text-yellow-500 cursor-pointer"
          onClick={() => router.back()}
        >
          <HiArrowNarrowLeft fontSize="2rem" />
        </div>
        <div className="m-4">
          <h1 className="sm:text-3xl text-2xl title-font font-medium text-white mb-4">
            {title}
          </h1>
          <h2 className="sm:text-base text-lg text-yellow-500">
            {description}
          </h2>
        </div>
      </div>
    </div>
  )
}
